"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

type ToastProps = {
  open: boolean;
  title: string;
  message: string;
};

export function Toast({ open, title, message }: ToastProps) {
  const reduced = useReducedMotion();
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return createPortal(
    <div
      data-toast
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center p-4 sm:inset-x-auto sm:right-0 sm:left-auto sm:justify-end sm:p-6"
      style={{ position: "fixed", bottom: 0, zIndex: 100 }}
    >
      <AnimatePresence>
        {open ? (
          <motion.div
            key="toast"
            role="status"
            aria-live="polite"
            className="w-full max-w-[22rem] border border-border bg-surface px-4 py-3"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: EASE }}
          >
            <p className="text-small font-medium text-accent">{title}</p>
            <p className="mt-1.5 text-small text-muted-strong">{message}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>,
    document.body,
  );
}

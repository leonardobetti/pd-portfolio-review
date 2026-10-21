"use client";

import { useEffect, useRef, useState } from "react";
import { Toast } from "./Toast";

const EMAIL = "leonardobetti@gmail.com";
const EMAIL_DISPLAY = "leonardobetti [at] gmail [dot] com";

type ContactEmailProps = {
  className?: string;
};

export function ContactEmail({ className = "" }: ContactEmailProps) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setOpen(true);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => setOpen(false), 4200);
    } catch {
      setOpen(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copyEmail}
        aria-label="Email"
        className={`inline-flex shrink-0 cursor-pointer items-center bg-transparent p-0 text-small leading-[inherit] text-inherit transition-colors hover:text-accent ${className}`}
      >
        <span className="hidden md:inline">Email</span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-4 fill-none stroke-current md:hidden"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.75" />
          <path d="m4 7 8 6 8-6" strokeWidth="1.75" />
        </svg>
      </button>
      <Toast
        open={open}
        title="Email copied"
        message={`${EMAIL_DISPLAY}. Copied to your clipboard. Paste it into a new email.`}
      />
    </>
  );
}

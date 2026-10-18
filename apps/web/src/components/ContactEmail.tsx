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
        className={`cursor-pointer bg-transparent p-0 text-small leading-[inherit] text-inherit transition-colors hover:text-accent ${className}`}
      >
        Copy email
      </button>
      <Toast
        open={open}
        title="Email copied"
        message={`${EMAIL_DISPLAY}. Copied to your clipboard. Paste it into a new email.`}
      />
    </>
  );
}

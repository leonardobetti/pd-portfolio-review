"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

type MaskTextProps = {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  /** Soft wrap with text-wrap: balance. Ignores forced line breaks from `lines` (joins them). */
  balance?: boolean;
};

export function MaskText({
  lines,
  as: Tag = "p",
  className = "",
  delay = 0,
  balance = false,
}: MaskTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const text = balance ? lines.join(" ") : null;

  if (balance && text) {
    return (
      <Tag ref={ref as never} className={`overflow-hidden ${className}`}>
        <motion.span
          className="block text-balance"
          style={{ textWrap: "balance" }}
          initial={reduced ? false : { y: "110%" }}
          animate={reduced || inView ? { y: "0%" } : { y: "110%" }}
          transition={{
            duration: reduced ? 0 : 0.85,
            delay: reduced ? 0 : delay,
            ease: EASE,
          }}
        >
          {text}
        </motion.span>
      </Tag>
    );
  }

  return (
    <Tag ref={ref as never} className={className}>
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduced ? false : { y: "110%" }}
            animate={reduced || inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: reduced ? 0 : 0.85,
              delay: reduced ? 0 : delay + index * 0.08,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

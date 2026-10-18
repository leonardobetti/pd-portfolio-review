"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function RevealSection({
  children,
  className = "",
  delay = 0,
  id,
}: RevealSectionProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 36 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{
        once: true,
        // Fire as the section approaches the viewport, not after it's fully in.
        amount: 0.18,
        margin: "0px 0px -12% 0px",
      }}
      transition={{
        duration: reduced ? 0 : 1.05,
        delay: reduced ? 0 : delay,
        ease: EASE,
        opacity: { duration: reduced ? 0 : 0.95, ease: EASE },
        y: { duration: reduced ? 0 : 1.1, ease: EASE },
      }}
    >
      {children}
    </motion.section>
  );
}

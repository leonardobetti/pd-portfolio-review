"use client";

import { type LenisRef, ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { type ReactNode, useEffect, useRef } from "react";
import "lenis/dist/lenis.css";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    function update({ timestamp }: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(timestamp);
    }

    frame.setup(update, true);

    let cancelled = false;
    function goTop() {
      if (cancelled) return;
      const lenis = lenisRef.current?.lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    goTop();
    const raf = requestAnimationFrame(goTop);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      cancelFrame(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.09,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

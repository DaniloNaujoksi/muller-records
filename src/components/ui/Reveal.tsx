"use client";

import { m, useReducedMotion } from "framer-motion";

/**
 * Fade-and-rise on scroll. Deliberately small (16px, 0.5s) — a techno label
 * should feel like a machine that starts, not a site that performs.
 * `useReducedMotion` short-circuits to a plain render.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}

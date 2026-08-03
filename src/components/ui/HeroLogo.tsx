"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { useReducedMotion } from "framer-motion";
import MarkSvg from "@/assets/logo-mark.svg";

/**
 * The head as the homepage headline, split like the old typed lockup was:
 * paper above the fold line, blood below. Two copies of the same mark stacked
 * and clipped at 50% — the asset stays single-colour (`currentColor`), so the
 * no-recolouring rule in Logo.tsx still holds.
 *
 * On scroll the mark rides up with the page while shrinking around its
 * top-left corner and drifting right, so that at the moment the scaled height
 * reaches the header mark's 36px it sits exactly on `header-mark-slot` — the
 * head's place beside the always-visible wordmark. That is where we
 * cross-fade to the real header mark instead of pinning anything. While the
 * big mark is on screen, `data-hero-logo` on <html> keeps the header's head
 * hidden (the wordmark never hides); the attribute goes away when we dock, on
 * unmount, and under reduced motion, so every other page keeps its full
 * header lockup untouched.
 */
export function HeroLogo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    const slot = document.getElementById("header-mark-slot");
    if (!wrap || !inner || !slot) return;

    let pageTop = 0;
    let bigH = 1;
    let targetTop = 0;
    let targetH = 36;
    let distance = 1;
    let dx = 0;

    const measure = () => {
      const r = wrap.getBoundingClientRect();
      pageTop = r.top + window.scrollY;
      bigH = Math.max(r.height, 1);
      const s = slot.getBoundingClientRect();
      targetTop = s.top;
      targetH = s.height;
      distance = Math.max(pageTop - targetTop, 1);
      dx = s.left - r.left;
    };

    let dockedNow: boolean | null = null;
    const apply = () => {
      const p = Math.min(Math.max(window.scrollY / distance, 0), 1);
      const scale = 1 + (targetH / bigH - 1) * p;
      inner.style.transform = `translateX(${p * dx}px) scale(${scale})`;
      const d = p >= 1;
      if (d !== dockedNow) {
        dockedNow = d;
        setDocked(d);
        document.documentElement.toggleAttribute("data-hero-logo", !d);
      }
    };

    measure();
    apply();

    const onScroll = () => apply();
    const onResize = () => {
      measure();
      apply();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(wrap);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      inner.style.transform = "";
      document.documentElement.removeAttribute("data-hero-logo");
    };
  }, [reduced]);

  return (
    <div ref={wrapRef} className="w-[min(88vw,60svh,32rem)]">
      <div
        ref={innerRef}
        className={clsx(
          "relative aspect-[1002/904] origin-top-left transition-opacity duration-200",
          docked && "opacity-0",
        )}
      >
        <MarkSvg aria-hidden className="absolute inset-0 h-full w-full text-paper [clip-path:inset(0_0_50%_0)]" />
        <MarkSvg aria-hidden className="absolute inset-0 h-full w-full text-blood [clip-path:inset(50%_0_0_0)]" />
      </div>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Drives the scroll-reveal styles in globals.css: observes every
 * [data-reveal] element and marks it .is-revealed when it enters the
 * viewport (threshold/margins from the design). Elements already in view
 * reveal on load, staggered by their --reveal-delay — the one orchestrated
 * hero moment. Under prefers-reduced-motion everything stays visible.
 */
export function RevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("io-live"); // tells the bootstrap watchdog we're alive

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("reveal-all");
      return;
    }

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)"),
    );
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}

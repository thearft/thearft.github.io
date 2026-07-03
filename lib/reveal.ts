import type { CSSProperties } from "react";

/** Stagger delay for a [data-reveal] element (values come from the design). */
export function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}

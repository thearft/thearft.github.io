import type { Metadata } from "next";
import { Cta } from "@/components/cta";

export const metadata: Metadata = {
  title: "Page not found",
};

/* On-voice, useful, one link home. No jokes at the visitor's expense (§5). */
export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1160px] flex-col items-start justify-center gap-[clamp(22px,3vh,30px)] px-[clamp(20px,4vw,40px)] py-[clamp(80px,14vh,160px)]">
      <p className="flex items-baseline gap-3">
        <span
          aria-hidden
          className="h-px w-5 flex-none -translate-y-[3px] bg-copper"
        />
        <span className="font-mono text-[11px] tracking-[0.18em] text-steel">
          ERROR 404 — PAGE NOT FOUND
        </span>
      </p>
      <h1 className="max-w-[26ch] font-display text-[clamp(34px,4.5vw,60px)] font-normal leading-[1.1] tracking-[-0.02em] text-cream text-balance">
        This page doesn’t exist. The link may be old, or the page isn’t built
        yet.
      </h1>
      <Cta href="/">BACK TO THE HOMEPAGE</Cta>
    </section>
  );
}

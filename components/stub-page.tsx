import Link from "next/link";
import { arrowLink } from "@/components/cta";
import { StatusBadge } from "@/components/status";
import { revealDelay } from "@/lib/reveal";

type StubPageProps = {
  eyebrow: string;
  title: string;
  line: string;
  cta?: { href: string; label: string };
};

/** Interim page while the real content is drafted with Arafat (CLAUDE.md §5). */
export function StubPage({
  eyebrow,
  title,
  line,
  cta = { href: "/", label: "BACK TO THE HOMEPAGE" },
}: StubPageProps) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1160px] flex-col items-start justify-center gap-[clamp(22px,3vh,30px)] px-[clamp(20px,4vw,40px)] py-[clamp(80px,14vh,160px)]">
      <p data-reveal className="flex items-baseline gap-3">
        <span
          aria-hidden
          className="h-px w-5 flex-none -translate-y-[3px] bg-copper"
        />
        <span className="font-mono text-[11px] tracking-[0.18em] text-steel">
          {eyebrow}
        </span>
      </p>
      <h1
        data-reveal
        style={revealDelay(70)}
        className="max-w-[24ch] font-display text-[clamp(34px,4.5vw,60px)] font-normal leading-[1.1] tracking-[-0.02em] text-cream text-balance"
      >
        {title}
      </h1>
      <p
        data-reveal
        style={revealDelay(140)}
        className="max-w-[58ch] text-[clamp(16px,1.5vw,18px)] font-light leading-[1.7] text-body"
      >
        {line}
      </p>
      <p data-reveal style={revealDelay(200)}>
        <StatusBadge state="in-build" label="STATUS · IN BUILD" />
      </p>
      <Link
        data-reveal
        style={revealDelay(260)}
        href={cta.href}
        className={arrowLink}
      >
        {cta.label}&nbsp;&nbsp;→
      </Link>
    </section>
  );
}

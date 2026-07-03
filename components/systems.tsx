import Link from "next/link";
import { arrowLink } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status";
import { revealDelay } from "@/lib/reveal";

const CARD =
  "flex flex-col gap-3.5 bg-panel p-[clamp(24px,3vw,36px)] shadow-[-1px_0_0_rgba(169,215,232,0.10),0_-1px_0_rgba(169,215,232,0.10)]";

export function Systems() {
  return (
    <section id="systems" className="scroll-mt-14 border-y border-ice/10 bg-panel">
      <div className="mx-auto max-w-[1160px] px-[clamp(20px,4vw,40px)] py-[clamp(72px,10vh,120px)]">
        <SectionHeading
          label="WHAT I'M BUILDING"
          index="02"
          as="div"
          className="mb-[clamp(28px,4vh,40px)]"
        />

        <h2
          data-reveal
          className="mb-[clamp(40px,6vh,56px)] max-w-[20ch] font-display text-[clamp(28px,3.4vw,44px)] font-normal leading-[1.15] tracking-[-0.015em] text-cream text-balance"
        >
          Systems currently running the business
        </h2>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-px overflow-hidden border border-ice/10">
          <li data-reveal className={CARD}>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10.5px] tracking-[0.16em] text-steel-dim">
                SYS-01
              </span>
              <StatusBadge state="running" />
            </div>
            <h3 className="font-display text-[26px] font-normal tracking-[-0.01em] text-cream">
              The Quote Engine
            </h3>
            <p className="text-[15.5px] font-light leading-[1.7] text-body">
              A Telegram bot that turns a Bangla voice note into a print-ready
              PDF quotation in seconds.{" "}
              <span className="text-emph">
                Built for rush hour. Used at rush hour.
              </span>
            </p>
          </li>

          <li data-reveal style={revealDelay(90)} className={CARD}>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10.5px] tracking-[0.16em] text-steel-dim">
                SYS-02
              </span>
              <StatusBadge state="running" />
            </div>
            <h3 className="font-display text-[26px] font-normal tracking-[-0.01em] text-cream">
              The Receivables Assistant
            </h3>
            <p className="text-[15.5px] font-light leading-[1.7] text-body">
              Automated, polite, relentless payment follow-ups across WhatsApp
              and SMS.{" "}
              <span className="text-emph">
                Cash flow no longer depends on anyone’s memory.
              </span>
            </p>
          </li>

          <li data-reveal style={revealDelay(180)} className={CARD}>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10.5px] tracking-[0.16em] text-steel-dim">
                SYS-03
              </span>
              <StatusBadge state="in-build" />
            </div>
            <h3 className="font-display text-[26px] font-normal tracking-[-0.01em] text-cream">
              The Platform
            </h3>
            {/* Ledger-years count deliberately unstated (Arafat, 2026-07-03) */}
            <p className="text-[15.5px] font-light leading-[1.7] text-body">
              A full point-of-sale and business-management system, in active
              development — with years of purchase ledgers already rescued from
              Excel into a clean database.
            </p>
          </li>
        </ul>

        <Link
          data-reveal
          href="/build"
          className={`mt-8 inline-block ${arrowLink}`}
        >
          SEE HOW THEY&rsquo;RE BUILT&nbsp;&nbsp;→
        </Link>
      </div>
    </section>
  );
}

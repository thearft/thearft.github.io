import { revealDelay } from "@/lib/reveal";

const CELLS = [
  { label: "QUALIFICATION", value: "MASTER OF AI — RMIT UNIVERSITY, MELBOURNE" },
  { label: "RESEARCH", value: "PUBLISHED — SPRINGER" },
  { label: "SYSTEMS", value: "03 IN PRODUCTION · 01 IN BUILD" },
  { label: "FOUNDATION", value: "B.SC. COMPUTER SCIENCE — BRAC UNIVERSITY" },
];

const RIVET =
  "absolute size-2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#D9A47F,#8F5A3E)] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.35)]";

/** The receipts strip as a stamped equipment nameplate — the signature element. */
export function Nameplate() {
  return (
    <section
      aria-label="Credentials"
      className="mx-auto max-w-[1160px] px-[clamp(20px,4vw,40px)] pb-[clamp(72px,10vh,120px)]"
    >
      <div
        data-reveal
        style={revealDelay(320)}
        className="relative rounded-[3px] border border-ice/[0.16] bg-[linear-gradient(180deg,#161D22_0%,#11171C_55%,#0F1418_100%)] shadow-plate transition-[border-color,box-shadow] duration-[350ms] hover:border-ice/[0.32] hover:shadow-plate-hover"
      >
        <span aria-hidden className={`${RIVET} left-[9px] top-[9px]`} />
        <span aria-hidden className={`${RIVET} right-[9px] top-[9px]`} />
        <span aria-hidden className={`${RIVET} bottom-[9px] left-[9px]`} />
        <span aria-hidden className={`${RIVET} bottom-[9px] right-[9px]`} />

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ice/[0.12] px-7 py-3.5">
          <span className="font-mono text-[10px] tracking-[0.22em] text-steel">
            AL-AMIN TRADING ORGANIZATION · SPECIFICATION PLATE
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] text-copper-soft">
            DUTY · CONTINUOUS
          </span>
        </div>

        <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-px overflow-hidden">
          {CELLS.map((cell) => (
            <div
              key={cell.label}
              className="px-7 pb-[18px] pt-4 shadow-[-1px_0_0_rgba(169,215,232,0.12),0_-1px_0_rgba(169,215,232,0.12)]"
            >
              <dt className="mb-2 font-mono text-[9.5px] tracking-[0.2em] text-steel-dim">
                {cell.label}
              </dt>
              <dd className="font-mono text-[12.5px] leading-[1.6] tracking-[0.06em] text-plate [text-shadow:0_1px_0_rgba(0,0,0,0.6)]">
                {cell.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

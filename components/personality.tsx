/** Humor lives here and in /notes only — never in trust sections (CLAUDE.md §3). */
export function Personality() {
  return (
    <div className="border-y border-ice/10">
      <p
        data-reveal
        className="mx-auto flex max-w-[1160px] flex-wrap items-baseline gap-[18px] px-[clamp(20px,4vw,40px)] py-[26px]"
      >
        <span className="flex-none font-mono text-[10.5px] tracking-[0.2em] text-copper-soft">
          OFF THE CLOCK
        </span>
        <span className="font-mono text-[12.5px] leading-[1.8] text-steel">
          F1 for the strategy, football for the heartbreak, Dota 2 for reasons
          I’ve stopped defending, and photography —{" "}
          <span className="text-cream">every photo on this site is mine.</span>
        </span>
      </p>
    </div>
  );
}

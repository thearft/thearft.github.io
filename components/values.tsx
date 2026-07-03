import { SectionHeading } from "@/components/section-heading";
import { revealDelay } from "@/lib/reveal";

const PILLARS = [
  {
    name: "Amanah",
    tag: "TRUSTWORTHINESS",
    body: "It’s the name on our sign. Whatever is entrusted to me — a shipment, a database, a deadline — is safe.",
  },
  {
    name: "Sidq",
    tag: "TRUTHFULNESS",
    body: "Real numbers, real timelines. I’d rather lose an order than shade the truth.",
  },
  {
    name: "Itqan",
    tag: "EXCELLENCE IN THE WORK",
    body: "If a job is worth doing, it’s worth doing properly. A compressor order or a schema migration — same standard.",
  },
];

export function Values() {
  return (
    <section
      id="values"
      className="mx-auto max-w-[1160px] scroll-mt-14 px-[clamp(20px,4vw,40px)] py-[clamp(80px,11vh,130px)]"
    >
      <SectionHeading
        label="WHAT I RUN ON"
        index="03"
        className="mb-[clamp(48px,7vh,72px)]"
      />

      {/* Epigraph ships only with the translation Arafat confirms (CLAUDE.md §2.4).
          Text below is from the approved copy deck, pending final confirmation. */}
      <figure data-reveal className="mx-auto max-w-[780px] text-center">
        <blockquote className="font-display text-[clamp(21px,2.5vw,30px)] font-normal italic leading-[1.5] text-quote text-pretty">
          <span aria-hidden className="text-copper">
            “
          </span>
          The truthful, trustworthy merchant will be with the prophets, the
          steadfast affirmers of truth, and the martyrs.
          <span aria-hidden className="text-copper">
            ”
          </span>
        </blockquote>
        <figcaption className="mt-[18px] font-mono text-[10.5px] tracking-[0.2em] text-steel">
          PROPHET MUHAMMAD ﷺ — SUNAN AL-TIRMIDHI
        </figcaption>
      </figure>

      <div className="mt-[clamp(52px,8vh,80px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(36px,5vw,56px)]">
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar.name}
            data-reveal
            style={i > 0 ? revealDelay(i * 90) : undefined}
            className="flex flex-col gap-3.5"
          >
            <span aria-hidden className="h-px w-6 bg-copper" />
            <div>
              <h3 className="font-display text-[26px] font-normal text-cream">
                {pillar.name}
              </h3>
              <span className="mt-1.5 block font-mono text-[10.5px] tracking-[0.2em] text-steel-dim">
                {pillar.tag}
              </span>
            </div>
            <p className="text-[15.5px] font-light leading-[1.7] text-body">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

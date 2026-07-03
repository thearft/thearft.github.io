import { Cta } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { revealDelay } from "@/lib/reveal";
import { CONTACT } from "@/lib/site";

const DOOR_CARD =
  "flex flex-col items-start gap-[18px] border p-[clamp(28px,4vw,52px)] transition-[border-color,box-shadow] duration-300";

/** Order = priority: suppliers first, clients second (CLAUDE.md §1). */
export function Doors() {
  // Until Arafat provides the business endpoints, the CTA stays in-section.
  const contactHref = CONTACT.email ? `mailto:${CONTACT.email}` : "#doors";

  return (
    <section
      id="doors"
      className="mx-auto max-w-[1160px] scroll-mt-14 px-[clamp(20px,4vw,40px)] pb-[clamp(80px,11vh,130px)]"
    >
      <SectionHeading
        label="TWO DOORS"
        index="04"
        className="mb-[clamp(40px,6vh,64px)]"
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-stretch gap-[clamp(20px,3vw,28px)]">
        <article
          data-reveal
          className={`${DOOR_CARD} border-ice/[0.14] hover:border-ice/[0.38] hover:shadow-[0_24px_60px_-44px_rgba(89,155,180,0.35)]`}
        >
          <p className="font-mono text-[10.5px] tracking-[0.18em] text-ice">
            DOOR 01 — FOR MANUFACTURERS &amp; EXPORTERS
          </p>
          <h3 className="font-display text-[clamp(26px,3vw,38px)] font-normal tracking-[-0.015em] text-cream">
            Source with Al-Amin
          </h3>
          <p className="text-base font-light leading-[1.7] text-body">
            Al-Amin is moving into direct imports of refrigeration and AC
            components — compressors, capacitors, fittings, tools, and more. If
            you manufacture or distribute in this space,{" "}
            <span className="text-emph">
              I’m the person at Al-Amin you should be talking to.
            </span>
          </p>
          <div className="mt-auto flex flex-col items-start gap-2.5 pt-2.5">
            <Cta href={contactHref}>START A CONVERSATION</Cta>
            <span className="font-mono text-[10px] tracking-[0.16em] text-steel-dim">
              BUSINESS EMAIL / WHATSAPP
            </span>
          </div>
        </article>

        <article
          data-reveal
          style={revealDelay(90)}
          className={`${DOOR_CARD} border-ice/[0.14] hover:border-[rgba(217,160,126,0.45)] hover:shadow-[0_24px_60px_-44px_rgba(184,123,94,0.3)]`}
        >
          <p className="font-mono text-[10.5px] tracking-[0.18em] text-copper-soft">
            DOOR 02 — FOR BUSINESSES THAT WANT SYSTEMS LIKE MINE
          </p>
          <h3 className="font-display text-[clamp(26px,3vw,38px)] font-normal tracking-[-0.015em] text-cream">
            Hire me to automate
          </h3>
          <p className="text-base font-light leading-[1.7] text-body">
            Messaging bots, billing automation, data rescue, custom platforms
            with AI built in.{" "}
            <span className="text-emph">
              Everything I sell, I already run in my own business.
            </span>
          </p>
          <div className="mt-auto flex flex-col items-start gap-2.5 pt-2.5">
            <Cta href="/services" variant="ghost">
              SEE SERVICES&nbsp;&nbsp;→
            </Cta>
            <span className="font-mono text-[10px] tracking-[0.16em] text-steel-dim">
              /SERVICES
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

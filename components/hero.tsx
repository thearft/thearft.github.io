import { Cta } from "@/components/cta";
import { ImageSlot } from "@/components/image-slot";
import { revealDelay } from "@/lib/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1160px] px-[clamp(20px,4vw,40px)] pb-[clamp(40px,6vh,64px)] pt-[clamp(56px,9vh,110px)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(36px,5vw,80px)]">
        <div className="flex flex-col items-start gap-[clamp(22px,3vh,30px)]">
          <p data-reveal className="flex items-baseline gap-3">
            <span
              aria-hidden
              className="h-px w-5 flex-none -translate-y-[3px] bg-copper"
            />
            <span className="font-mono text-[11px] leading-[1.8] tracking-[0.18em] text-steel">
              MD. ARAFAT HOSSAIN — HEAD OF IMPORTS &amp; TECHNOLOGY, AL-AMIN
              TRADING ORGANIZATION
            </span>
          </p>

          <h1
            data-reveal
            style={revealDelay(70)}
            className="font-display text-[clamp(40px,5.4vw,76px)] font-normal leading-[1.04] tracking-[-0.02em] text-balance"
          >
            <span className="block text-mist">
              Most people leave home to chase opportunity.
            </span>
            <span className="block text-cream">
              I studied AI in Melbourne to{" "}
              <em className="italic text-ice">bring it back.</em>
            </span>
          </h1>

          <p
            data-reveal
            style={revealDelay(160)}
            className="max-w-[56ch] text-[clamp(16px,1.5vw,18px)] font-light leading-[1.7] text-body"
          >
            I lead Al-Amin Trading Organization’s expansion into direct
            imports, and I build the software that runs the company — a quoting
            bot, a receivables system, a full business platform.{" "}
            <span className="font-normal text-cream">
              Trust isn’t our slogan. It’s literally our name.
            </span>
          </p>

          <div
            data-reveal
            style={revealDelay(250)}
            className="mt-1 flex flex-wrap gap-3.5"
          >
            <Cta href="/#doors">SOURCE WITH AL-AMIN</Cta>
            <Cta href="/#doors" variant="ghost">
              HIRE ME TO AUTOMATE
            </Cta>
          </div>
        </div>

        <div data-reveal style={revealDelay(120)} className="justify-self-stretch">
          <div className="ml-auto max-w-[480px] border border-ice/[0.14] p-2.5">
            <div className="relative aspect-[4/5]">
              <ImageSlot
                brief="portrait — direct eye contact, natural light, warehouse shelving softly out of focus"
                src="/images/portrait.jpg"
                alt="Md. Arafat Hossain"
                className="absolute inset-0"
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

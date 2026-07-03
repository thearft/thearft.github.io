import Link from "next/link";
import { arrowLink } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { revealDelay } from "@/lib/reveal";
import { COMPANY_YEARS } from "@/lib/site";

export function ShortStory() {
  return (
    <section
      id="story"
      className="mx-auto max-w-[1160px] scroll-mt-20 px-[clamp(20px,4vw,40px)] pb-[clamp(80px,11vh,130px)]"
    >
      <SectionHeading
        label="THE SHORT STORY"
        index="01"
        className="mb-[clamp(40px,6vh,64px)]"
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(36px,5vw,72px)]">
        <p
          data-reveal
          className="font-display text-[clamp(24px,2.7vw,34px)] font-normal leading-[1.35] tracking-[-0.01em] text-cream text-pretty"
        >
          The first machine I ever improved was a calculator. I pulled out its
          solar panel and wired it to light a bulb. The calculator never
          recovered. <em className="italic text-ice">I never stopped.</em>
        </p>

        <div className="flex flex-col gap-5">
          <p
            data-reveal
            style={revealDelay(90)}
            className="text-[16.5px] font-light leading-[1.75] text-body"
          >
            That instinct ran through everything after: robots and a
            driving-assistance system built for Bangladeshi roads at BRAC
            University, and a smart water-management system that ended up
            published by Springer. Then four years in Melbourne and a Master of
            AI at RMIT — learning to build to a global standard.
          </p>
          <p
            data-reveal
            style={revealDelay(170)}
            className="text-[16.5px] font-light leading-[1.75] text-body"
          >
            Now I’m applying all of it to the business I grew up around.
            Al-Amin Trading Organization has supplied Bangladesh’s
            refrigeration and air-conditioning trade for{" "}
            <span className="font-mono text-[0.88em] text-copper-soft">
              {COMPANY_YEARS ?? "[X]"}
            </span>{" "}
            years. I’m building its next chapter: a direct-import pipeline, and
            a digital backbone most trading houses won’t have for another
            decade.
          </p>
          <Link
            data-reveal
            style={revealDelay(250)}
            href="/story"
            className={`mt-1.5 self-start ${arrowLink}`}
          >
            READ THE FULL STORY&nbsp;&nbsp;→
          </Link>
        </div>
      </div>
    </section>
  );
}

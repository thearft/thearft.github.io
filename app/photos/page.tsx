import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { arrowLink } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { revealDelay } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Eight frames from two hemispheres — autumn in Melbourne, monsoon in Gazipur. Every photo is Arafat's own.",
};

/* Captions state only what the frames and their metadata show (dates from
   EXIF, locations at district level). All published copies are EXIF/GPS-
   stripped; originals stay out of the repo. */

type Frame = {
  src: string;
  alt: string;
  aspect: string;
  label: string;
  note: string;
};

const MELBOURNE: Frame[] = [
  {
    src: "/images/frames/melbourne-forest.jpg",
    alt: "Tall mountain-ash forest with a dirt walking track in dappled afternoon light",
    aspect: "aspect-[3/4]",
    label: "FRAME 01 · APR 2026 · THE RANGES EAST OF MELBOURNE",
    note: "Mountain ash and a dirt track. I went for the quiet; the light decided to show off instead.",
  },
  {
    src: "/images/frames/melbourne-canopy.jpg",
    alt: "Eucalyptus canopy photographed straight up, crowns separated by thin gaps of blue sky, one small bird crossing the gap",
    aspect: "aspect-[3/4]",
    label: "FRAME 02 · APR 2026 · SAME FOREST, STRAIGHT UP",
    note: "Eucalypt crowns keep a small distance from each other — crown shyness, it's called. There's one bird crossing the gap. There's always one bird.",
  },
  {
    src: "/images/frames/melbourne-magpies.jpg",
    alt: "Three Australian magpies foraging on grass in low golden light",
    aspect: "aspect-[4/3]",
    label: "FRAME 03 · APR 2026 · MELBOURNE",
    note: "Australian magpies at golden hour. Everyone in Australia has a swooping story. Mine is just this photo.",
  },
  {
    src: "/images/frames/melbourne-honeyeater.jpg",
    alt: "New Holland honeyeater perched among white flowers and green leaves",
    aspect: "aspect-square",
    label: "FRAME 04 · APR 2026 · MELBOURNE",
    note: "A New Holland honeyeater working a flowering bush like it was on a deadline. I related.",
  },
];

const GAZIPUR: Frame[] = [
  {
    src: "/images/frames/gazipur-sparrow-rebar.jpg",
    alt: "House sparrow perched on rusted reinforcement steel at a construction site",
    aspect: "aspect-[4/3]",
    label: "FRAME 05 · MAY 2026 · GAZIPUR",
    note: "A house sparrow claiming a column of reinforcement steel. Half of Gazipur is mid-build. So am I.",
  },
  {
    src: "/images/frames/gazipur-sparrows-ledge.jpg",
    alt: "Three house sparrows preening on a red-painted concrete ledge",
    aspect: "aspect-[4/3]",
    label: "FRAME 06 · JUN 2026 · GAZIPUR",
    note: "The local committee at their afternoon preen. Sparrows run the same meetings on both hemispheres — I've checked.",
  },
  {
    src: "/images/frames/gazipur-dawn.jpg",
    alt: "Low orange sun rising through clouds over rooftop silhouettes",
    aspect: "aspect-[4/3]",
    label: "FRAME 07 · JUN 2026 · GAZIPUR, 05:33",
    note: "The sun arriving over the rooftops. The alarm was a bad idea; the frame wasn't.",
  },
  {
    src: "/images/frames/gazipur-waterlily.jpg",
    alt: "Pink water lily bud standing above a pond crowded with lily pads",
    aspect: "aspect-[4/3]",
    label: "FRAME 08 · JUN 2026 · GAZIPUR",
    note: "A shapla — the national flower — holding its shape in a crowded pond. It opens when it's ready. Fair enough.",
  },
];

const SIZES_FULL = "(min-width: 984px) 900px, 100vw";
const SIZES_HALF = "(min-width: 984px) 440px, 100vw";
const SIZES_CENTER = "(min-width: 620px) 560px, 100vw";

function PhotoFrame({
  frame,
  sizes,
  delay,
  center,
  priority,
}: {
  frame: Frame;
  sizes: string;
  delay?: number;
  center?: boolean;
  priority?: boolean;
}) {
  return (
    <figure
      data-reveal
      style={delay ? revealDelay(delay) : undefined}
      className={center ? "mx-auto w-full max-w-[560px]" : undefined}
    >
      <div className="border border-ice/[0.14] p-2.5">
        <div className={`relative ${frame.aspect}`}>
          <Image
            src={frame.src}
            alt={frame.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover [filter:saturate(0.82)_contrast(1.04)]"
          />
        </div>
      </div>
      <figcaption className="mt-3 flex flex-col gap-1.5">
        <span className="font-mono text-[10px] tracking-[0.2em] text-steel-dim">
          {frame.label}
        </span>
        <span className="max-w-[62ch] text-[15.5px] font-light leading-[1.7] text-body">
          {frame.note}
        </span>
      </figcaption>
    </figure>
  );
}

export default function PhotosPage() {
  return (
    <section className="mx-auto max-w-[920px] px-[clamp(20px,4vw,40px)] py-[clamp(56px,9vh,110px)]">
      {/* Header */}
      <div className="mb-[clamp(56px,8vh,88px)] flex flex-col items-start gap-[clamp(22px,3vh,30px)]">
        <p data-reveal className="flex items-baseline gap-3">
          <span
            aria-hidden
            className="h-px w-5 flex-none -translate-y-[3px] bg-copper"
          />
          <span className="font-mono text-[11px] tracking-[0.18em] text-steel">
            /PHOTOS — FIELD NOTES
          </span>
        </p>
        <h1
          data-reveal
          style={revealDelay(70)}
          className="font-display text-[clamp(34px,4.5vw,60px)] font-normal leading-[1.1] tracking-[-0.02em] text-cream text-balance"
        >
          Different sky, same habit.
        </h1>
        <p
          data-reveal
          style={revealDelay(140)}
          className="max-w-[58ch] text-[clamp(16px,1.5vw,18px)] font-light leading-[1.7] text-body"
        >
          Photography is the one system I run that ships nothing. Eight frames
          from a year that split in half — autumn in Melbourne, then the first
          monsoon back in Gazipur.{" "}
          <span className="font-normal text-cream">
            The birds never asked why I moved.
          </span>
        </p>
      </div>

      {/* Chapter 01 — Melbourne */}
      <SectionHeading
        label="CHAPTER 01 — MELBOURNE, AUTUMN"
        index="37°S"
        className="mb-[clamp(28px,4vh,40px)]"
      />
      <p
        data-reveal
        className="mb-[clamp(36px,5vh,56px)] max-w-[58ch] text-[16.5px] font-light leading-[1.75] text-body"
      >
        The last season of four years in Melbourne. When the code stopped
        compiling, the forests an hour east of the city usually fixed it.
      </p>
      <div className="flex flex-col gap-[clamp(36px,5vh,56px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(20px,3vw,28px)]">
          <PhotoFrame frame={MELBOURNE[0]} sizes={SIZES_HALF} priority />
          <PhotoFrame frame={MELBOURNE[1]} sizes={SIZES_HALF} delay={90} />
        </div>
        <PhotoFrame frame={MELBOURNE[2]} sizes={SIZES_FULL} />
        <PhotoFrame frame={MELBOURNE[3]} sizes={SIZES_CENTER} center />
      </div>

      {/* Chapter 02 — Gazipur */}
      <SectionHeading
        label="CHAPTER 02 — GAZIPUR, MONSOON"
        index="23°N"
        className="mb-[clamp(28px,4vh,40px)] mt-[clamp(72px,10vh,110px)]"
      />
      <p
        data-reveal
        className="mb-[clamp(36px,5vh,56px)] max-w-[58ch] text-[16.5px] font-light leading-[1.75] text-body"
      >
        Then home. Gazipur in the early monsoon: everything under construction,
        everything growing, the sky putting on a different show at both ends of
        the day.
      </p>
      <div className="flex flex-col gap-[clamp(36px,5vh,56px)]">
        <PhotoFrame frame={GAZIPUR[0]} sizes={SIZES_FULL} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(20px,3vw,28px)]">
          <PhotoFrame frame={GAZIPUR[1]} sizes={SIZES_HALF} />
          <PhotoFrame frame={GAZIPUR[2]} sizes={SIZES_HALF} delay={90} />
        </div>
        <PhotoFrame frame={GAZIPUR[3]} sizes={SIZES_FULL} />
      </div>

      {/* Close */}
      <div className="mt-[clamp(72px,10vh,110px)] flex flex-col items-start gap-7 border-t border-ice/10 pt-[clamp(40px,6vh,64px)]">
        <p
          data-reveal
          className="font-display text-[clamp(24px,2.7vw,34px)] font-normal leading-[1.35] tracking-[-0.01em] text-cream"
        >
          The gear changed cities.{" "}
          <em className="italic text-ice">The habit didn’t.</em>
        </p>
        <Link data-reveal style={revealDelay(90)} href="/" className={arrowLink}>
          BACK TO THE HOMEPAGE&nbsp;&nbsp;→
        </Link>
      </div>
    </section>
  );
}

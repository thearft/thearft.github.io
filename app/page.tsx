import { Doors } from "@/components/doors";
import { Hero } from "@/components/hero";
import { MacroBand } from "@/components/macro-band";
import { Nameplate } from "@/components/nameplate";
import { Personality } from "@/components/personality";
import { ShortStory } from "@/components/short-story";
import { Systems } from "@/components/systems";
import { Values } from "@/components/values";

/* Section order = order of trust (CLAUDE.md §5) — do not reorder. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Nameplate />
      <ShortStory />
      <MacroBand />
      <Systems />
      <Values />
      <Doors />
      <Personality />
    </>
  );
}

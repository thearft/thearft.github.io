import { CycleBand } from "@/components/cycle-band";
import { ImageSlot } from "@/components/image-slot";

/** Interim generated image under Arafat's one-time exception (2026-07-03);
 *  replace with his own parts-macro photograph when shot (§7 brief). */
const MACRO_PHOTO: string | null = "/images/parts-macro.jpg";

/** Full-bleed band between story and systems. Decorative. */
export function MacroBand() {
  return (
    <div aria-hidden className="border-t border-ice/10">
      {MACRO_PHOTO ? (
        <ImageSlot
          brief="parts macro — compressors · capacitors · copper fittings"
          src={MACRO_PHOTO}
          className="h-[clamp(220px,32vw,380px)] w-full"
          sizes="100vw"
        />
      ) : (
        <CycleBand />
      )}
    </div>
  );
}

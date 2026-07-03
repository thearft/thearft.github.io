import { CycleBand } from "@/components/cycle-band";
import { ImageSlot } from "@/components/image-slot";

/** Real photo once shot: set to e.g. "/images/parts-macro.jpg".
 *  Brief (§7): parts macro — compressors, capacitors, copper fittings. */
const MACRO_PHOTO: string | null = null;

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

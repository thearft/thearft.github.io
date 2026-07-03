import { ImageSlot } from "@/components/image-slot";

/** Full-bleed parts-macro photograph between story and systems. Decorative. */
export function MacroBand() {
  return (
    <div aria-hidden className="border-t border-ice/10">
      {/* TODO(Arafat): parts macro photo — compressors, capacitors, copper fittings */}
      <ImageSlot
        brief="parts macro — compressors · capacitors · copper fittings"
        className="h-[clamp(220px,32vw,380px)] w-full"
        sizes="100vw"
      />
    </div>
  );
}

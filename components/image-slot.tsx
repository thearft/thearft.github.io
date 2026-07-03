import Image from "next/image";

type ImageSlotProps = {
  /** Shot brief from the design — doubles as the visible pending-state label. */
  brief: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Photo slot. Per CLAUDE.md §2 only Arafat's photographs may fill it — no
 * stock, no generated images. Until a photo exists the slot renders the shot
 * brief as a quiet, on-brand pending state. All photos get the cold grade
 * from the design (saturate .82, contrast 1.04).
 */
export function ImageSlot({
  brief,
  src,
  alt = "",
  priority,
  sizes,
  className = "",
}: ImageSlotProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover [filter:saturate(0.82)_contrast(1.04)]"
        />
      </div>
    );
  }
  const tick = "absolute size-2.5 border-ice/20";
  return (
    <div
      role="img"
      aria-label={`Photograph pending: ${brief}`}
      className={`relative flex items-center justify-center overflow-hidden bg-[#10161A] ${className}`}
    >
      <span aria-hidden className={`${tick} left-3 top-3 border-l border-t`} />
      <span aria-hidden className={`${tick} right-3 top-3 border-r border-t`} />
      <span aria-hidden className={`${tick} bottom-3 left-3 border-b border-l`} />
      <span aria-hidden className={`${tick} bottom-3 right-3 border-b border-r`} />
      <span className="max-w-[85%] text-center font-mono text-[10px] uppercase leading-[1.9] tracking-[0.2em] text-steel-dim">
        {brief}
      </span>
    </div>
  );
}

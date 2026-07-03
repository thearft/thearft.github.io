type SectionHeadingProps = {
  label: string;
  index: string;
  /** h2 when the label is the section's heading; div when a larger h2 follows. */
  as?: "h2" | "div";
  className?: string;
};

export function SectionHeading({
  label,
  index,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div data-reveal className={`flex items-center gap-3.5 ${className}`}>
      <span aria-hidden className="size-[7px] flex-none bg-copper" />
      <Tag className="font-mono text-[11px] font-normal tracking-[0.2em] text-steel">
        {label}
      </Tag>
      <span aria-hidden className="h-px flex-1 bg-ice/10" />
      <span aria-hidden className="font-mono text-[11px] tracking-[0.1em] text-steel-dim">
        {index}
      </span>
    </div>
  );
}

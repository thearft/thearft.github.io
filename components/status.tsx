type StatusBadgeProps = {
  state: "running" | "in-build";
  label?: string;
};

export function StatusBadge({ state, label }: StatusBadgeProps) {
  if (state === "running") {
    return (
      <span className="flex items-center gap-2">
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-ice shadow-[0_0_8px_rgba(169,215,232,0.5)]"
        />
        <span className="font-mono text-[10.5px] tracking-[0.16em] text-ice">
          {label ?? "RUNNING"}
        </span>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2">
      <span
        aria-hidden
        className="size-1.5 animate-pulse-soft rounded-full bg-copper-soft motion-reduce:animate-none"
      />
      <span className="font-mono text-[10.5px] tracking-[0.16em] text-copper-soft">
        {label ?? "IN BUILD"}
      </span>
    </span>
  );
}

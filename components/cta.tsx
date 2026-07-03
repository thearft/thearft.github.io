import Link from "next/link";

/** Underlined mono arrow-link ("READ THE FULL STORY  →"). */
export const arrowLink =
  "border-b border-ice/30 pb-1 font-mono text-[11.5px] tracking-[0.16em] text-ice transition-colors duration-[250ms] hover:border-copper-warm/50 hover:text-copper-warm";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaProps) {
  const styles =
    variant === "primary"
      ? "bg-ice px-[26px] py-[15px] font-semibold text-night hover:bg-ice-bright"
      : "border border-ice/25 px-[26px] py-[14px] font-medium text-cream hover:border-copper hover:text-copper-warm";
  return (
    <Link
      href={href}
      className={`inline-block rounded-[2px] font-mono text-xs tracking-[0.12em] transition-colors duration-[250ms] ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

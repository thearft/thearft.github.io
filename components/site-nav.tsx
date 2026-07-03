import Link from "next/link";

const LINKS = [
  { href: "/#story", label: "STORY" },
  { href: "/#systems", label: "SYSTEMS" },
  { href: "/#values", label: "VALUES" },
  { href: "/#doors", label: "CONTACT" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ice/10 bg-ink">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-[clamp(20px,4vw,40px)] py-4">
        <Link
          href="/"
          className="font-display text-[21px] italic tracking-[0.01em] text-cream"
        >
          thearft<span className="text-copper">.</span>
        </Link>
        <nav
          aria-label="Site"
          className="flex flex-wrap gap-[clamp(16px,3vw,32px)] font-mono text-[11px] tracking-[0.16em]"
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-steel transition-colors duration-[250ms] hover:text-ice"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

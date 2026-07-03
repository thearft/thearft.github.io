import { CONTACT, SOCIAL } from "@/lib/site";

export function SiteFooter() {
  // Links without a confirmed URL are not rendered (no dead links; §9 asks pending).
  const links = [
    SOCIAL.linkedin && { label: "LINKEDIN", href: SOCIAL.linkedin, external: true },
    { label: "GITHUB", href: SOCIAL.github, external: true },
    CONTACT.email && { label: "EMAIL", href: `mailto:${CONTACT.email}`, external: false },
  ].filter(Boolean) as { label: string; href: string; external: boolean }[];

  return (
    <footer className="mx-auto flex max-w-[1160px] flex-col gap-4 px-[clamp(20px,4vw,40px)] pb-[52px] pt-9">
      <div className="flex flex-wrap items-baseline justify-between gap-6">
        <span className="font-mono text-[11px] tracking-[0.14em] text-steel-dim">
          © THEARFT
        </span>
        <div className="flex flex-wrap gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="font-mono text-[11px] tracking-[0.14em] text-steel transition-colors duration-[250ms] hover:text-ice"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      {/* Design's #5F6B72 fails WCAG AA at this size — steel-dim is the nearest passing token. */}
      <span className="font-mono text-[10px] tracking-[0.18em] text-steel-dim">
        ONE HANDLE EVERYWHERE — @THEARFT
      </span>
    </footer>
  );
}

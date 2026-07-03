/**
 * Single source of site-wide facts and endpoints.
 * Domain switch to thearft.com later = change SITE_URL only (CLAUDE.md §8).
 */
export const SITE_URL = "https://thearft.github.io";

export const SITE_TITLE =
  "Arafat Hossain — Imports & AI Systems · Al-Amin Trading Organization";

export const SITE_DESCRIPTION =
  "Head of Imports & Technology at Al-Amin Trading Organization. RMIT Master of AI. I build the systems that run a Bangladeshi trading house — and the import pipeline that supplies it.";

/* ——— Pending facts. Ask Arafat; never invent (CLAUDE.md §2, §9). ———
   Until filled: door CTAs fall back to the doors section, and footer links
   without a URL are simply not rendered. */

export const CONTACT = {
  /** Interim per Arafat (2026-07-03) — switches to a domain address later */
  email: "thearft@gmail.com" as string | null,
  /** WhatsApp link, e.g. "https://wa.me/<number>" — TODO(Arafat) */
  whatsapp: null as string | null,
};

export const SOCIAL = {
  github: "https://github.com/thearft",
  linkedin: "https://www.linkedin.com/in/thearft/" as string | null,
};

/** Company operating years in the short story (confirmed by Arafat, 2026-07-03) */
export const COMPANY_YEARS: string | null = "45+";

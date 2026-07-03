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
  /** Business email for the doors — TODO(Arafat) */
  email: null as string | null,
  /** WhatsApp link, e.g. "https://wa.me/<number>" — TODO(Arafat) */
  whatsapp: null as string | null,
};

export const SOCIAL = {
  github: "https://github.com/thearft",
  /** TODO(Arafat): confirm LinkedIn URL */
  linkedin: null as string | null,
};

/** "[X] years" in the short story — TODO(Arafat): company operating years */
export const COMPANY_YEARS: string | null = null;

/** "[12] years" of ledgers on the Platform card — TODO(Arafat): confirm figure */
export const LEDGER_YEARS: string | null = null;

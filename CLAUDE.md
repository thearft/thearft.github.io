# CLAUDE.md — thearft (personal site of Md. Arafat Hossain)

You are building a personal brand website. This file is the project constitution: brand,
rules, content, design, and stack. When anything here conflicts with your instincts,
this file wins. When information is missing, **ask Arafat — never invent.**

---

## 1. Mission

A narrative personal site — not a job-seeker portfolio. It tells the story of an AI
engineer (Master of AI, RMIT Melbourne) who returned to Bangladesh to build the next
chapter of his family's trading house: a new direct-imports division plus the software
that runs the company.

**Audiences, ranked:**
1. Suppliers / manufacturers / trade partners evaluating Al-Amin's next generation
2. Potential automation clients (businesses wanting systems like his)

**Architecture consequence:** the homepage has two CTAs ("two doors"), in that priority
order. Never bury the supplier door below the services door.

**Owner:** Md. Arafat Hossain — *Head of Imports & Technology, Al-Amin Trading
Organization*. Use this exact title everywhere. The company name is always spelled
exactly **Al-Amin Trading Organization** (registered spelling — never "Organisation").

---

## 2. Hard rules (non-negotiable)

1. **Never invent facts.** No fabricated metrics, testimonials, client names, logos,
   dates, or numbers. Every claim must come from this file, from `docs/copy/`, or from
   Arafat directly. Placeholders like `[X]` are resolved by asking him.
2. **Never use stock photos or AI-generated images.** Every photograph comes from
   Arafat (he is a photographer; this is a brand point). If an image slot is empty,
   ask him to shoot or supply it.
3. **Privacy blacklist — must never appear anywhere in the site or repo:**
   phone numbers, home addresses, his suburb of residence, his age, family members'
   names or photos, and any mention of visas, immigration, or the job market.
   The story of his return is told ONLY via the sanctioned narrative in §5.
4. **Faith content:** the values section quotes a hadith (§6). Ship it only with the
   translation Arafat confirms. Never paraphrase or restyle religious text yourself.
5. **Trust is the brand.** This site sells trustworthiness to trade partners.
   Anything that reads as hype, exaggeration, or dark-pattern UX is off-brand. When
   in doubt: receipts over adjectives.
6. If you need any info, asset, credential, or decision — **stop and ask Arafat.**

---

## 3. Brand core

**Thesis — trust, engineered.** The company is named from the hadith describing
*at-tājir aṣ-ṣadūq al-amīn* — the truthful, trustworthy merchant (name origin
confirmed by Arafat). Arafat's systems institutionalize that trustworthiness:
accurate quotes in seconds, relentless-but-polite receivables, twelve years of
records made queryable. The site's job: show the name on the sign now has an
engineer building trust into the business itself.

**Positioning line:** "AI engineer. Head of Imports & Technology at Al-Amin Trading
Organization. I build the company's import pipeline and the software that runs it."

**Voice:** first person, short sentences, plain verbs, zero corporate fluff.
Humor is allowed ONLY in the homepage personality strip and in /notes — never in
supplier-facing trust sections (hero, values, doors, /build).

**Personality strip (approved copy):**
"Off the clock: Formula 1 (Ferrari garage, Lewis's side — pray for us), football
(Barça, for the heartbreak), Dota 2 for reasons I've stopped defending, heavy rows
at the gym, and photography — every photo on this site is mine."

---

## 4. Content sources

- **Homepage copy:** `docs/copy/homepage.md` (a full section-by-section deck Arafat
  already has — ask him to drop it into the repo if missing). Implement it faithfully;
  do not rewrite approved copy without asking.
- **Other pages:** copy is drafted collaboratively with Arafat during the build,
  following the structures in §5. Draft, show him, revise.
- **LinkedIn reference:** `docs/linkedin.pdf` (Arafat's exported profile). **It is
  outdated.** Use it only as leads — dates, roles, credentials, publications that
  might enrich `/story` or the receipts strip — and confirm every single item with
  Arafat before it appears on the site.

**Career facts (source of truth — confirm exact titles, dates, and company-name
spellings with Arafat / linkedin.pdf before publishing):**
- **Strategic Analyst — EWN-BD Ltd** (startup software company, Bangladesh, ~1 year):
  role spanned strategy, product management, software QA, and more. Use for: /story
  beat 3, and business-side credibility toward suppliers (he understands commerce
  and shipping products, not just code).
- **Automation specialist — Pet Solution Int.** (Melbourne, several months): automated
  time-consuming office desk work — generating Excel, Word, and PDF files and similar
  workflows. Use for: /story beat 4; a professional receipt on /services (this is
  services lane 2, already done commercially in Australia); receipts-strip candidate.
- **Part-time jobs during the Master's** (Melbourne, various): may be referenced
  collectively ("part-time jobs to pay for it") only if Arafat approves the mention;
  never itemize them.
- Family business involvement is covered by §1, §3, and §5 — no separate entry.

---

## 5. Pages & routes

### `/` Home
Sections in order (order = order of trust; do not reorder):
hero (portrait + headline + two doors) → receipts strip → short story → systems
cards → values → two doors (full) → personality strip → footer.
All copy in `docs/copy/homepage.md`.

### `/story` The full narrative — six beats, in order, no additions:
1. The kid who pulled the solar panel out of a calculator and wired it to light a
   bulb. ("The calculator never recovered. I never stopped.")
2. Teenage years learning the trade at the counter — parts, people, pace.
3. BRAC University: robots, a driving-assistance system built for Bangladeshi roads,
   a smart water-management system published by Springer. Already building for home.
   Then a year as Strategic Analyst at EWN-BD Ltd, a startup — product, QA, and
   whatever else needed shipping.
4. Four years in Melbourne: Master of AI at RMIT, part-time jobs to pay for it, and
   months at Pet Solution Int. as an automation specialist — turning slow desk work
   (Excel, Word, PDF production) into workflows that run themselves. Global standards.
5. The return, framed as the decision it is: "The most interesting AI problem I could
   find wasn't in a lab. It was a trading house in Gazipur with twelve years of paper
   records and a growth plan."
6. Now: a direct-import pipeline, full digitalization, and select automation work.

### `/build` Case studies of real systems
Template per system: **Problem → What I built → Stack → Impact.**
Source-of-truth facts (confirm with Arafat which stack details he wants public,
and get real impact numbers from him — never estimate them):

| System | Facts |
|---|---|
| The Quote Engine | Telegram bot; Bangla voice input; generates print-ready multi-page PDF quotes/bills/challans; supports two company profiles; Dockerized on Oracle Cloud. In production, used at peak hours. |
| The Receivables Assistant | Telegram admin commands; outbound via WhatsApp and SMS; PostgreSQL (Neon); structured `/adddue` entry format; self-alerts on send failures. In production. |
| The Ledger Rescue | ~12 years of purchase records; Python/pandas pipeline; fuzzy-matching dedup of SKUs; Excel → clean relational database. Complete. |
| The Platform | Full POS + business management web app; Next.js / TypeScript / Tailwind / Prisma / Neon Postgres. In active development. |

### `/services` Four lanes, buyable and concrete:
1. Business messaging bots (Telegram/WhatsApp, Bangla voice included)
2. Document & billing automation (quotes, invoices, challans → PDF)
3. Data rescue & migration (messy Excel → real databases)
4. Custom web platforms with AI integration
Closing line: "Everything I sell, I already run in my own business."
Professional receipt to feature near lanes 2–3: document-workflow automation done
commercially for Pet Solution Int. in Melbourne (confirm phrasing with Arafat).
CTA: business email / WhatsApp (get endpoints from Arafat).

### `/notes` Writing
MDX blog. **Nav link renders only when ≥ 3 published posts exist** (gate it in code).
Seed titles he may write: "How a Telegram bot survives a Gazipur rush hour" ·
"Rescuing twelve years of Excel" · "What Melbourne taught me about building for Dhaka."

### `404`
On-voice, useful, one link home. No jokes at the visitor's expense.

---

## 6. Values section (homepage)

Epigraph (pending Arafat's confirmed translation):
"The truthful, trustworthy merchant will be with the prophets, the steadfast
affirmers of truth, and the martyrs." — Prophet Muhammad ﷺ (Sunan al-Tirmidhi)

Three pillars — **Amanah** (trustworthiness: "It's the name on our sign."),
**Sidq** (truthfulness: "Real numbers, real timelines."), **Itqan** (excellence in
the work: "A compressor order or a schema migration — same standard.").

---

## 7. Design brief

**Direction:** minimalist dark mode, premium and calm. "Most modern thing out there"
— but suppliers must feel *stability*, so: modern like a precision instrument, not
flashy like a portfolio toy. Minimal direction demands precision in spacing, type,
and detail.

**Palette (tokens — tune exact values, keep the logic):**
- Base: deep cold charcoal (NOT pure black; something like `#0D1114` territory)
- Primary accent: glacial ice blue (the refrigerant — this trade is literally cooling)
- Secondary accent: **copper** (the tubing and fittings of the AC trade — use
  sparingly, for warmth and craft: rules, small marks, hover states)
- Text: warm off-white; muted steel gray for secondary text
Ice + copper on cold charcoal is the palette story: refrigerant and pipework.

**Anti-cliché guardrails (hard):** no pure-black background with a single acid-green
or vermilion accent; no cream-and-terracotta template; no glassmorphism cards, no
particle backgrounds, no gradient-mesh hero blobs. If a choice would appear on any
generic AI-generated portfolio, it is wrong for this one.

**Typography:** carries the personality. A characterful display face used with
restraint + a clean modern body sans + a mono for data/labels. Candidate direction
(propose alternatives if better): display **Newsreader** or **Instrument Serif**,
body **Inter** or **Geist**, mono **Geist Mono** or **IBM Plex Mono**, via `next/font`.
Set a real type scale; oversized display type is welcome in the hero.

**Signature element (the one memorable thing):** render the "receipts strip" as a
stamped equipment **nameplate** — like the rating plate on a compressor: mono type,
engraved-metal feel, precise rules. Credentials presented as machine spec. Spend the
boldness here; keep everything else quiet.

**Photography:** Arafat's photos only. Grade them cold/consistent (subtle ice-blue
treatment) so mixed sources feel like one set. Subjects: parts macro (compressors,
capacitors, copper fittings), warehouse texture, Melbourne frames on /story, and his
portrait in the hero (direct eye contact, natural light, warehouse shelving or clean
neutral softly out of focus).

**Motion:** one orchestrated hero moment on load; subtle scroll-reveals elsewhere;
hover micro-interactions on the doors and nameplate. Respect `prefers-reduced-motion`
fully. If an animation would make the site feel AI-generated, cut it.

**Quality floor:** responsive to 360px, visible keyboard focus, WCAG AA contrast
(non-negotiable on dark), semantic HTML, Lighthouse ≥ 95 across the board.

**If arriving via a Claude Design handoff bundle:** treat the bundle as the visual
direction; this file still governs content, rules, copy, and stack.

Use the claude_design MCP (https://api.anthropic.com/v1/design/mcp, auth via /design-login) to import this project:
https://claude.ai/design/p/cb7eeb27-bc0c-4a7d-adb8-56bbc5a5efca?file=thearft+Homepage.dc.html

Implement: thearft Homepage.dc.html

---

## 8. Tech stack & deployment

- **Next.js 15 (App Router) + TypeScript (strict) + Tailwind CSS v4** — Arafat's
  stack; keep consistency with his other projects. MDX for /notes.
- Fonts via `next/font`. Framer Motion allowed, sparingly. No UI kit templates.
- **Static export** (`output: 'export'`, `images.unoptimized: true`, add `.nojekyll`)
  → deploys to **GitHub Pages at thearft.github.io** (replacing the old portfolio —
  that replacement is the point). Custom domain `thearft.com` may be added later;
  structure metadata so the switch is one config change.
- SEO: per-page metadata, OpenGraph image (design one on-brand), sitemap, robots.
  Title tag: "Arafat Hossain — Imports & AI Systems · Al-Amin Trading Organization".
- Identity: the handle is **@thearft** everywhere (footer links: LinkedIn, GitHub,
  email — confirm URLs with Arafat).
- Ask before adding any dependency beyond the above.

---

## 9. Ask-Arafat checklist (gather before or during build — one topic at a time)

- [ ] `docs/copy/homepage.md` placed in repo (he has the file)
- [ ] `docs/linkedin.pdf` exported from LinkedIn (profile → Resources → Save to PDF)
- [ ] Portrait photo (brief is in the copy deck)
- [ ] Parts/warehouse/Melbourne photography set
- [ ] Company operating years for "[X] years" in the short story
- [ ] Real impact numbers for /build case studies (or omit numbers entirely)
- [ ] Which stack details he wants public per system
- [ ] Business email + WhatsApp endpoint for the doors
- [ ] LinkedIn / GitHub URLs
- [ ] Confirmed hadith translation
- [ ] Exact titles, dates, and company-name spellings for EWN-BD Ltd and
      Pet Solution Int.; approval for the "part-time jobs" mention in /story
- [ ] Favicon / OG image approval
- [ ] Package manager preference (npm assumed)

---

## 10. Working agreement

- Ask, don't invent — for facts, assets, copy changes, and dependencies.
- Small commits with clear messages; run `lint` and `build` before declaring done.
- Review your own output at 360px / 768px / 1440px; screenshot if the environment
  allows and self-critique against §7 before showing Arafat.
- Definition of done: all §9 items resolved, copy matches the deck, privacy blacklist
  verified absent (grep for it), a11y and Lighthouse targets met, dark theme polished,
  and the two doors work — a supplier and a client can each reach Arafat in one click.

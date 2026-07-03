# Design reference

`thearft-homepage.dc.html` is the approved Claude Design handoff for the homepage,
imported 2026-07-03 from:

https://claude.ai/design/p/cb7eeb27-bc0c-4a7d-adb8-56bbc5a5efca?file=thearft+Homepage.dc.html

It is the **visual direction** (CLAUDE.md §7). Content, rules, copy, and stack are
governed by CLAUDE.md. The project's `support.js` / `image-slot.js` are design-tool
runtime widgets (drag-drop image placeholders) and are deliberately not part of the
site implementation — photo slots on the real site render an on-brand pending state
until Arafat supplies photographs.

Key tokens extracted from the design:

- Base bg `#0C1013` · panel bg `#0F1519` · nameplate gradient `#161D22 → #11171C → #0F1418`
- Text: `#EAE6DF` primary · `#A9B3BA` body · `#8D99A1` muted · `#7A8790` labels
- Ice accent `#A9D7E8` (hover `#C6E7F2`) · copper `#B87B5E` / `#C98F6B` / `#D9A07E`
- Hairlines: ice at 10–16% alpha
- Type: Newsreader (display, italic accents) · Geist (body) · Geist Mono (labels/data)
- Reveal motion: translateY(14px) → 0, 0.8s cubic-bezier(.22,1,.36,1), staggered delays

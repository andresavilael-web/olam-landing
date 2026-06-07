# Olam Med Spa — Design System

A brand & UI design system for **Olam Med Spa**, a medical aesthetics spa in
Pembroke Pines, FL, founded by Latina women and featured in Forbes & Univisión.
Olam offers non-invasive treatments — skin tightening, injectables, laser, body
contouring — with personalized plans and 3D skin diagnosis.

> **Positioning — "La nueva belleza natural."** Olam doesn't *transform*; it
> *reveals your best version*. The brand is **premium but warm, clinically
> rigorous but human** — "we care more about our patients than our sales."

**This system implements Brand Book v3 (Phase 1 of the color transition).** It
supersedes the earlier green-led direction. See "Sources" and the change note below.

---

## Sources reviewed

| Source | What it is | Notes |
|---|---|---|
| `assets/OLAM-Brand-Book-v3.pdf` | **Primary source of truth** — the 18-page Manual de Marca V3 (2026) | Palette, type, voice, bilingual rules, photography direction, legal guardrails, transition plan |
| `uploads/code.html` | Production HTML of the earlier skin-tightening landing page | Used for the UI-kit *structure & interactions*; its old palette/type are NOT current |
| `uploads/screencapture-…png` → `assets/reference-landing-page.png` | Screenshot of that earlier page | Historical reference only — predates Brand Book v3 |
| `uploads/logo-large-a.png` → `assets/logo-olam.png` | Olam logo (tri-stroke swoosh + wordmark) | "El logo se mantiene tal cual." Unchanged. White knockout added. |
| `uploads/cropped-favicon-a-1.png` → `assets/favicon-olam.png` | Favicon — the swoosh mark | |

Address: 17901 NW 5th St Ste 201, Pembroke Pines, FL · 954.237.0930

> **Change note (v2 → Brand Book v3):** The first build of this system used green
> `#7AB520` as the primary action color with Sora + Inter type. **Brand Book v3
> overrides that:** green now lives **only in the logo**; the single action color is
> **deep Olam blue `#1F5E78`**; the palette is neutral & warm (white-dominant); and
> type is **Cormorant Garamond + Poppins**. Everything here reflects v3, Phase 1.

---

## CONTENT FUNDAMENTALS

Voice is **clinically rigorous, humanly warm**. The balance rule (from the book):
*precision lives in treatments, consents and results; warmth and humour live in
social and reception — never the reverse.*

- **Person & address.** Speaks directly to *you* / *tú*. The clinic is *we* / *Olam*
  (never "I" in marketing). Reception/DMs are first-person and friendly ("¡Hola! Con
  gusto te ayudo…").
- **The promise.** *Reveal, don't transform.* "No cambiar quién sos, sino redescubrir
  tu mejor versión." Confidence without arrogance, warmth without being casual,
  premium without being cold. Aspirational but attainable.
- **Brand personality.** Olam is a woman ~30: confident, innovative, a business owner,
  young at heart. Motto: *"Aspire to inspire before you expire."* She speaks like an
  expert friend.
- **Say / don't say (verbatim from the book).**
  - ✅ "Revela / realza tu belleza natural" · "Reduce, mejora, atenúa, previene" ·
    "No invasivo / sin downtime" · "Plan personalizado / diagnóstico 3D" ·
    "Resultados visibles; varían por persona."
  - 🚫 "Borra / elimina para siempre" · "Revierte el envejecimiento" (as a promise) ·
    "Garantizado / resultados asegurados" · "Te transforma."
- **Honest qualification.** The brand openly says who a treatment may *not* be for —
  but warmly ("Quizá aún no si…"), never with harsh/red "disqualifier" framing.
- **Specific, current numbers (single source of truth — these replace the 2021
  figures).** *30+ years* combined team experience · *35,000+* procedures · *4.9★,
  400+* Google reviews · *3D* skin diagnosis · Forbes · TV (Univisión, Telemundo,
  Hola TV, RCN). Always pair claims with "results vary."
- **Casing & the name.** Headlines and body in sentence case. The brand name is
  **"Olam Med Spa"** (or "med-spa") — initial cap, never "OLAM MEDSPA" all-caps or in
  small caps within running text. Eyebrows/labels may be tracked uppercase (they are
  not the brand name).
- **CTAs.** Warm and specific, with a trailing `→`: "Agenda tu diagnóstico 3D →",
  "Book my consultation →". Never "Submit."
- **Bilingual — one language per piece.** Don't mix EN/ES in the same phrase. Spanish
  for community & warmth; English for premium positioning & press. Same warm-clinical
  register in both. (The UI kit demonstrates a per-page EN/ES toggle.)
- **Legal guardrails.** No result guarantees. Every before/after & testimonial carries
  "Individual results may vary / Los resultados varían según la persona" + patient
  consent. Injectable brand names only in clinical context. No emoji.

---

## VISUAL FOUNDATIONS

**Editorial, neutral, warm, minimalist — white commands the page.** The look is
premium and serene, never hard-advertising or hospital-cold.

- **Color (Phase 1).** White `#FFFFFF` dominates; light linen `#F8F3EA` is a gentle
  warm touch; mist 5% `#F4F7F8` grounds soft sections; **deep Olam blue `#1F5E78` is
  the single action/CTA color**; mist blue `#8FA7B6` for cool details; slate `#6E8CA3`
  for bands with white text; charcoal `#1F2020` for text and dark sections; champagne
  `#C8B78F` for thin metallic threads only. **No green except the logo. No browns, no
  saturated-blue backgrounds, no red.**
- **Type.** Headlines & quotes in **Cormorant Garamond** (serif, weight 500; emphasis
  words in *italic*, tinted deep-blue). Body & UI in **Poppins** (rounded sans, light
  300 / regular / 500). Serif **only** for headlines and quotes — never long text or
  buttons. Max two weights per piece. Hero: `clamp(3rem, 6.5vw, 5.5rem)`, line-height
  ~1.02. Lots of air.
- **Layout.** Single-column editorial sections, `max-width: 1152px` centered, side
  gutters 16/32px. Section rhythm **80px desktop / 48px mobile**. Asymmetric 1:2 and
  2:3 grids. Generous negative space (the photography direction explicitly reserves
  space for text).
- **Backgrounds.** Mostly flat white, with linen and mist-5% bands for rhythm. One
  charcoal "dark callout" band (the 3D consultation) and one slate band (reservation)
  for contrast and white text. A single soft mist blur sits behind the hero. **No
  gradient decoration, no patterns/textures, no glow blobs.**
- **Imagery.** Photography-forward and real: natural soft diffuse light, healthy real
  skin (visible pores/texture), close-ups of face/neck/hands, diverse models 25–55
  with serene expressions, a clean warm clinical space. Warm light neutrals (linen,
  sand, light wood) + natural skin; cool only as a nuance. **Avoid** generic stock,
  over-retouched "plastic" skin, aggressive/dramatic before-afters, neon, heavy gold,
  clutter, hospital cold. Photos sit in rounded frames (16–32px) with soft shadows.
- **Cards.** White or linen fill, `1px` warm hairline (`rgba(31,32,32,0.08)`), `16px`
  radius (`24px` for media), soft neutral shadow. A subtle **champagne hairline**
  appears on hover.
- **Hover — gentle lift.** Cards rise `translateY(-6px)` with a soft neutral shadow;
  the title shifts to action-blue. Eased `cubic-bezier(0.16,1,0.3,1)` over `0.4s`. No
  scale-pop, no colored glows.
- **Buttons.** Pill (`9999px`), Poppins semibold, never the serif. Primary = solid
  Olam blue with a soft blue depth shadow; hover darkens. Secondary = charcoal outline
  that fills on hover. Ghost = blue text + `→`. On dark/slate bands, a white button.
- **Borders & dividers.** Warm hairlines (`rgba(31,32,32,0.08–0.22)`); on dark,
  `rgba(255,255,255,0.14)`. **Champagne** for special accent rules (clinical-overview
  underline, hover hairline). Sections separated by hairlines, not heavy rules.
- **Radii.** `6px` inputs · `16px` cards · `24px` media · `32px` hero · pill buttons.
- **Shadows.** Soft, large-radius, neutral, low opacity. Hero media gets a deeper
  `shadow-2xl`. Buttons get a subtle blue depth shadow. No hard/dark or inner shadows.
- **Transparency & blur.** Sticky header `white/95` + `backdrop-blur`. Photo scrims
  fade white→transparent. Overlay chips on photos use `white/90` + blur. For chrome &
  legibility, not decoration.
- **Animation.** Quiet and premium: scroll reveals (fade + small rise), tab fades,
  accordion height reveals. No bounces, no infinite content loops. Respect
  `prefers-reduced-motion`.

---

## ICONOGRAPHY

The brand book does not prescribe an icon library, so iconography stays **minimal and
functional** — consistent with the editorial, airy aesthetic.

- **Line icons: Google "Material Symbols Outlined"** (thin, rounded, outlined), loaded
  from Google Fonts and rendered via `<span class="material-symbols-outlined">…</span>`.
  Used sparingly for UI glyphs. Carried over from the product implementation.
- **Inline SVG** for the bespoke marks the brand relies on: the reservation checkmark
  (`M5 13l4 4L19 7`) and chevrons (`M9 6l6 6-6 6`), `stroke-width: 2–2.5`, round caps,
  `currentColor`. Prefer inline SVG over an icon font in prominent spots (it never
  shows a FOUT placeholder).
- **Typographic "icons."** `→` on CTAs · `+` (rotates open) on FAQ accordions · `✓` /
  `—` in qualification lists · `★★★★★` ratings rendered in **champagne** (never gold) ·
  small colored dots (blue/slate/champagne) as eyebrow & status markers.
- **No emoji. No icon "cards."**
- **Logo/mark.** Tri-stroke swoosh (green/black/blue "O") = the brand mark; it appears
  alone as the favicon. Original colour on white/linen (preferred), white on dark.
  Never recolour, rotate, flip, stretch; keep a margin equal to the height of the "O".
  Assets: `assets/logo-olam.png`, `assets/logo-olam-white.png`, `assets/favicon-olam.png`.

---

## Index / manifest

**Root**
- `styles.css` — entry point; `@import`s all tokens + fonts. Consumers link this.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css` (Cormorant + Poppins), `colors.css` (Phase-1 palette),
`typography.css`, `spacing.css` (radii, neutral shadows, motion).

**`assets/`** — `logo-olam.png`, `logo-olam-white.png`, `favicon-olam.png`,
`OLAM-Brand-Book-v3.pdf`, `reference-landing-page.png` (historical).

**`guidelines/`** — 20 specimen cards for the Design System tab (Colors, Type,
Spacing, Brand — including a Voice "Sí/No" card).

**`components/`** — reusable React primitives (see each `*.prompt.md`):
- `buttons/` — `Button`, `IconButton`
- `forms/` — `Input`, `Textarea`, `Select`
- `cards/` — `ServiceCard`, `TestimonialCard`, `ResultCard`
- `feedback/` — `Badge`, `Tag`, `Accordion`
- `navigation/` — `SiteHeader`, `PriceBlock`

**`ui_kits/website/`** — high-fidelity, bilingual, click-through recreation of the
Olam landing page, re-skinned to Brand Book v3.

Namespace for `@dsCard` HTML: `window.OLAMMedSpaDesignSystem_e5ad93`.

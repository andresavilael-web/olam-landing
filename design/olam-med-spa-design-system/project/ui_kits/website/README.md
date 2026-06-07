# Olam Website — UI Kit

A high-fidelity, **bilingual (EN/ES)**, click-through recreation of Olam Med Spa's
landing page, **re-skinned to Brand Book v3**. It composes the design-system component
primitives — it does not re-implement them conceptually, only mirrors them locally so
the kit runs standalone.

## Run
Open `index.html`. It loads React + Babel, then `components.jsx` (self-contained
primitives registered on `window.OLAMMedSpaDesignSystem_e5ad93`), then the section
files. (The published `_ds_bundle.js` isn't fetched here so the kit works offline.)

## Structure
- `index.html` — shell: fonts, tokens (`styles.css`), Material Symbols, base CSS, scripts.
- `components.jsx` — local copies of the DS primitives (same API & namespace).
- `Chrome.jsx` — `Header` (logo, EN/ES toggle, phone), `Footer`, the `L` bilingual helper.
- `Top.jsx` — `Hero`, `Qualification` (warm honest filter), `Leadership`.
- `Middle.jsx` — `Treat` (six concerns via `ServiceCard`), `Technologies` (interactive tabs).
- `Bottom.jsx` — `Results` (`ResultCard` + "results vary" disclaimers), `Consult` (charcoal 3D-diagnostic band), `Pricing` (`PriceBlock`).
- `Closing.jsx` — `FAQ` (`Accordion`), `Reserve` (slate band; form via `Input`/`Select`/`Textarea`/`Button`).
- `app.jsx` — assembles all sections; holds the language state.

## Interactions
- **Language toggle** — EN/ES in the header swaps every `.only-en` / `.only-es` string.
- **Technology tabs** — Ultherapy / RF Microneedling / Agnes RF swap the clinical card.
- **FAQ accordion** — one panel open at a time, rotating "+".
- **Reservation form** — client-side only; submits to a thank-you alert.

## Brand Book v3 notes
- **Palette:** white-dominant, deep Olam blue `#1F5E78` for all CTAs, slate & charcoal
  bands, champagne accents. No green (logo only), no red.
- **Type:** Cormorant Garamond headlines/quotes (italic emphasis in blue) + Poppins body.
- **Voice:** "reveal, don't transform"; updated stats (35,000+ procedures, 30+ years,
  4.9★/400+); "Individual results may vary" disclaimers throughout; "Olam Med Spa" casing.
- **Photography is placeholdered.** Hero, team, and result imagery render as neutral
  "foto real de paciente" placeholders — real licensed photos weren't provided. Drop
  real images into the `.ph` blocks / `ResultCard` `image` prop. Follow the book's photo
  direction: natural soft light, real healthy skin, models 25–55, serene, negative space.

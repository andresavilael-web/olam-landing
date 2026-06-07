---
name: olam-med-spa-design
description: Use this skill to generate well-branded interfaces and assets for Olam Med Spa (medical aesthetics spa, Pembroke Pines FL — non-invasive treatments, "la nueva belleza natural"), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Implements Brand Book v3.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Key files:
- `readme.md` — full brand guide implementing **Brand Book v3**: content fundamentals (warm, honest, "reveal not transform"; no result promises; bilingual one-language-per-piece), visual foundations, iconography, manifest.
- `assets/OLAM-Brand-Book-v3.pdf` — the source brand book (2026).
- `styles.css` — links all design tokens + fonts. Link this one file.
- `tokens/` — colors (Phase-1 neutral palette), typography, spacing/radius/shadow.
- `components/` — React primitives (Button, IconButton, Input, Select, Textarea, ServiceCard, TestimonialCard, ResultCard, Badge, Tag, Accordion, SiteHeader, PriceBlock). Each has a `.prompt.md` with usage.
- `ui_kits/website/` — full bilingual landing-page recreation showing the components composed together.
- `assets/` — logos (`logo-olam.png`, `logo-olam-white.png`), favicon.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Brand essentials at a glance (Brand Book v3, Phase 1):
- **Fonts:** Cormorant Garamond (serif headlines & quotes, weight 500; emphasis words in italic, deep-blue) + Poppins (rounded sans body/UI, light 300). Serif never on body or buttons.
- **Color:** white `#FFFFFF` dominant · linen `#F8F3EA` · mist `#F4F7F8` · **deep Olam blue `#1F5E78` = the single action/CTA color** · mist blue `#8FA7B6` details · slate `#6E8CA3` bands · charcoal `#1F2020` text/dark · champagne `#C8B78F` thin lines only. **Green lives ONLY in the logo.** No browns, no red, no saturated-blue backgrounds, no emoji.
- **Voice:** premium but warm, clinically rigorous but human. "Reveal your natural beauty," never "transform." No guarantees ("borra", "para siempre", "garantizado"); use "reduce, mejora, revela." Always "results vary" on before/after. Name is always **"Olam Med Spa"**, never all-caps. Bilingual: one language per piece.
- **Feel:** editorial whitespace (white-dominant), pill buttons in Poppins, 16–32px card radii, soft neutral low-opacity shadows, gentle hover lift (−6px), champagne accent hairlines. Photography: natural soft light, real healthy skin, models 25–55, serene, negative space for text.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

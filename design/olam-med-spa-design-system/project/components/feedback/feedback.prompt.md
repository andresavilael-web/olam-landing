**Badge / Tag / Accordion** — Olam's small feedback & disclosure pieces. All use Poppins; there is **no red** in the palette, so disqualifiers/cautions use `slate` or `muted`, never danger-red.

```jsx
<Badge tone="accent">Belleza Natural</Badge>
<Badge tone="slate" dot>Diagnóstico 3D</Badge>
<Badge tone="champagne" dot>Premium · Cálido</Badge>

<Tag variant="soft">Ultherapy</Tag>
<Tag variant="glass">Nuestro espacio</Tag>

<Accordion items={[
  { q: "¿Duele el tratamiento?", a: "Aplicamos anestesia tópica antes de tu sesión…" },
  { q: "¿Cuándo veré resultados?", a: "La firmeza inicial suele notarse entre las semanas 4 y 6…" },
]} />
```

- **Badge**: section eyebrow / marker. Tones: `accent` (blue) · `slate` · `champagne` · `muted`. `dot` adds a leading status dot. Tracked-uppercase.
- **Tag**: pill chip. Variants: `soft` (blue tint) · `linen` · `solid` (blue) · `slate` · `outline` · `glass` (overlay on photos).
- **Accordion**: FAQ disclosure; questions render in the serif, the "+" rotates open. `single` (default) keeps one panel open.

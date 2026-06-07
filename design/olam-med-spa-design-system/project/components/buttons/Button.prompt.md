**Button** — Olam's pill CTA. There is **one** action color: deep Olam blue (`#1F5E78`). `primary` and `accent` are the same blue (accent kept for back-compat). `secondary` is a charcoal outline that fills on hover; `ghost` is an inline blue text link.

```jsx
<Button variant="primary" size="lg" href="#consulta" arrow>
  Agenda tu diagnóstico 3D
</Button>
```

- **variant**: `primary` / `accent` (deep blue, soft shadow) · `secondary` (1px charcoal outline → fills charcoal on hover) · `ghost` (blue text, used with `arrow`)
- **size**: `sm` · `md` (default) · `lg`
- **arrow**: appends the brand `→` glyph — almost always on for CTAs.
- Pass `href` to render an `<a>`. Copy is warm & confident; never promise ("garantizado", "para siempre"). Buttons use Poppins, never the serif.

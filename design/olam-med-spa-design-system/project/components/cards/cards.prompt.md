**ServiceCard / TestimonialCard / ResultCard** — Olam's content cards. Editorial, warm, white-dominant. All share the gentle hover (lift −6px, soft neutral shadow, a champagne hairline appears on top). Card titles and testimonial quotes are set in the serif (Cormorant Garamond); body in Poppins light.

```jsx
<ServiceCard index="01" title="Definición del óvalo facial">
  El primer lugar donde se nota la pérdida de firmeza. Lo abordamos con un plan personalizado.
</ServiceCard>

<TestimonialCard rating={5} name="María G." detail="Pembroke Pines · Ultherapy"
  quote="Me explicaron con honestidad qué esperar. A los tres meses me veía como yo, cinco años atrás." />

<ResultCard image="/path.jpg" tag="ÓVALO FACIAL" title="Elevación natural del pómulo"
  caption="Resultado clínico" disclaimer={true} />
```

- **ServiceCard**: numbered tile on linen; `accent` is `blue` (default) or `slate`.
- **TestimonialCard**: quote in serif italic; champagne stars (no gold/amber).
- **ResultCard**: photo-forward, image zooms on hover; falls back to a neutral placeholder. **Always pass `disclaimer`** on before/after imagery — `true` renders "Los resultados varían según la persona." (brand-legal requirement), or pass a custom string.

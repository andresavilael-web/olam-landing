/* Olam Med Spa Website UI Kit — self-contained component primitives.
   Brand Book v3. Mirrors the published design-system components
   (same API & namespace) so this kit renders standalone. */
(function () {
  const R = React;

  function Button({ children, variant = 'primary', size = 'md', href, arrow = false, disabled = false, onClick, type = 'button', style = {}, ...rest }) {
    const sizes = { sm: { padding: '11px 22px', fontSize: '0.8125rem' }, md: { padding: '15px 32px', fontSize: '0.9375rem' }, lg: { padding: '19px 42px', fontSize: '1rem' } };
    const variants = {
      primary: { background: 'var(--action)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-button)' },
      accent: { background: 'var(--action)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-button)' },
      secondary: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid var(--border-strong)', boxShadow: 'none' },
      ondark: { background: '#fff', color: 'var(--charcoal)', border: '1px solid transparent', boxShadow: 'none' },
      ghost: { background: 'transparent', color: 'var(--text-accent)', border: '1px solid transparent', boxShadow: 'none' },
    };
    const base = {
      display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, lineHeight: 1, letterSpacing: '0.005em',
      borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
      textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all var(--dur-base) var(--ease-cushion)',
      ...sizes[size], ...variants[variant], ...(variant === 'ghost' ? { padding: 0 } : {}), ...style,
    };
    const hoverIn = (e) => { if (disabled) return; const el = e.currentTarget;
      if (variant === 'primary' || variant === 'accent') el.style.background = 'var(--action-hover)';
      else if (variant === 'secondary') { el.style.background = 'var(--action-ink)'; el.style.color = '#fff'; el.style.borderColor = 'var(--action-ink)'; }
      else if (variant === 'ondark') el.style.background = 'var(--linen)';
      else if (variant === 'ghost') el.style.color = 'var(--action-hover)'; };
    const hoverOut = (e) => { if (disabled) return; const el = e.currentTarget;
      el.style.background = variants[variant].background; el.style.color = variants[variant].color;
      if (variant === 'secondary') el.style.borderColor = 'var(--border-strong)'; };
    const content = R.createElement(R.Fragment, null, children, arrow && R.createElement('span', { 'aria-hidden': 'true' }, '→'));
    const Tag = href ? 'a' : 'button';
    const tagProps = href ? { href } : { type, disabled };
    return R.createElement(Tag, { ...tagProps, onClick, onMouseEnter: hoverIn, onMouseLeave: hoverOut, style: base, ...rest }, content);
  }

  function IconButton({ icon, variant = 'accent', size = 40, label, href, onClick, style = {}, ...rest }) {
    const variants = { accent: { background: 'var(--action)', color: '#fff' }, primary: { background: 'var(--action)', color: '#fff' }, ink: { background: 'var(--charcoal)', color: '#fff' }, slate: { background: 'var(--slate)', color: '#fff' }, outline: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid var(--border-strong)' } };
    const base = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, borderRadius: 'var(--radius-pill)', border: '1px solid transparent', cursor: 'pointer', flexShrink: 0, transition: 'all var(--dur-base) var(--ease-cushion)', ...variants[variant], ...style };
    const Tag = href ? 'a' : 'button';
    const tagProps = href ? { href } : { type: 'button' };
    return R.createElement(Tag, { ...tagProps, 'aria-label': label, onClick, style: base, ...rest }, R.createElement('span', { className: 'material-symbols-outlined', style: { fontSize: size * 0.55, lineHeight: 1 } }, icon));
  }

  function Badge({ children, tone = 'accent', dot = false, style = {}, ...rest }) {
    const tones = { accent: 'var(--text-accent)', slate: 'var(--slate)', champagne: 'var(--champagne)', muted: 'var(--text-subtle)' };
    const dotColors = { accent: 'var(--olam-blue)', slate: 'var(--slate)', champagne: 'var(--champagne)', muted: 'var(--warm-grey-2)' };
    return R.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontSize: 'var(--text-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--ls-label)', color: tones[tone], ...style }, ...rest },
      dot && R.createElement('span', { style: { width: 6, height: 6, borderRadius: '50%', background: dotColors[tone], flexShrink: 0 } }), children);
  }

  function Tag({ children, variant = 'soft', style = {}, ...rest }) {
    const variants = {
      soft: { background: 'var(--action-tint)', color: 'var(--olam-blue)', border: '1px solid transparent' },
      linen: { background: 'var(--linen)', color: 'var(--text-body)', border: '1px solid transparent' },
      solid: { background: 'var(--action)', color: '#fff', border: '1px solid transparent' },
      slate: { background: 'var(--slate)', color: '#fff', border: '1px solid transparent' },
      outline: { background: 'transparent', color: 'var(--text-body)', border: '1px solid var(--border-strong)' },
      glass: { background: 'rgba(255,255,255,0.9)', color: 'var(--text-strong)', border: '1px solid var(--border-hairline)', backdropFilter: 'blur(4px)' },
    };
    return R.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '6px 12px', borderRadius: 'var(--radius-pill)', ...variants[variant], ...style }, ...rest }, children);
  }

  function ServiceCard({ index, title, children, accent = 'blue', style = {}, ...rest }) {
    const [hover, setHover] = R.useState(false);
    const accentColor = accent === 'slate' ? 'var(--slate)' : 'var(--text-accent)';
    const cardStyle = { position: 'relative', overflow: 'hidden', background: 'var(--surface-linen)', border: `1px solid ${hover ? 'var(--border-soft)' : 'var(--border-hairline)'}`, borderRadius: 'var(--radius-brand)', padding: 'var(--card-pad)', boxShadow: hover ? 'var(--shadow-cushion)' : 'none', transform: hover ? 'var(--lift-card)' : 'none', transition: 'all var(--dur-base) var(--ease-cushion)', ...style };
    return R.createElement('div', { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: cardStyle, ...rest },
      R.createElement('span', { style: { position: 'absolute', top: 0, left: 'var(--card-pad)', right: 'var(--card-pad)', height: 1, background: 'var(--border-champagne)', opacity: hover ? 0.9 : 0, transition: 'opacity var(--dur-base) var(--ease-cushion)' } }),
      R.createElement('div', { style: { position: 'relative' } },
        index != null && R.createElement('span', { style: { display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.18em', color: accentColor, marginBottom: 16 } }, index),
        R.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h3)', lineHeight: 1.1, margin: '0 0 12px', color: hover ? accentColor : 'var(--text-strong)', transition: 'color var(--dur-base) var(--ease-cushion)' } }, title),
        children && R.createElement('p', { style: { margin: 0, fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'var(--text-sm)', lineHeight: 1.65, color: 'var(--text-muted)' } }, children)));
  }

  function TestimonialCard({ quote, name, detail, rating = 5, style = {}, ...rest }) {
    const [hover, setHover] = R.useState(false);
    const cardStyle = { display: 'flex', flexDirection: 'column', gap: 18, background: 'var(--surface-card)', border: `1px solid ${hover ? 'var(--border-soft)' : 'var(--border-hairline)'}`, borderRadius: 'var(--radius-brand)', padding: 'var(--space-7)', boxShadow: hover ? 'var(--shadow-cushion)' : 'var(--shadow-card)', transform: hover ? 'var(--lift-card)' : 'none', transition: 'all var(--dur-base) var(--ease-cushion)', ...style };
    return R.createElement('div', { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: cardStyle, ...rest },
      R.createElement('div', { style: { color: 'var(--rating)', letterSpacing: 3, fontSize: '0.9rem' } }, '★'.repeat(rating) + '☆'.repeat(5 - rating)),
      R.createElement('p', { style: { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic', fontSize: '1.5rem', lineHeight: 1.35, color: 'var(--text-strong)', letterSpacing: 'var(--ls-tight)' } }, '“' + quote + '”'),
      R.createElement('div', { style: { marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 2 } },
        R.createElement('span', { style: { fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-strong)' } }, name),
        detail && R.createElement('span', { style: { fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.75rem', color: 'var(--text-subtle)' } }, detail)));
  }

  function ResultCard({ image, tag, title, caption, disclaimer, ratio = '3 / 4', style = {}, ...rest }) {
    const [hover, setHover] = R.useState(false);
    const cardStyle = { display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--surface-card)', border: `1px solid ${hover ? 'var(--border-soft)' : 'var(--border-hairline)'}`, borderRadius: 'var(--radius-brand-lg)', boxShadow: hover ? 'var(--shadow-cushion)' : 'var(--shadow-card)', transform: hover ? 'var(--lift-card)' : 'none', transition: 'all var(--dur-base) var(--ease-cushion)', ...style };
    const media = image
      ? R.createElement('img', { src: image, alt: title || '', style: { width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-cushion)' } })
      : R.createElement('div', { className: 'ph', style: { width: '100%', height: '100%' } }, 'Foto real de paciente');
    return R.createElement('div', { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: cardStyle, ...rest },
      R.createElement('div', { style: { position: 'relative', overflow: 'hidden', aspectRatio: ratio } }, media,
        tag && R.createElement('span', { style: { position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', border: '1px solid var(--border-hairline)', color: 'var(--text-strong)', fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 12px', borderRadius: 'var(--radius-pill)' } }, tag)),
      R.createElement('div', { style: { padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 4 } },
        R.createElement('h4', { style: { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.25rem', lineHeight: 1.15, color: 'var(--text-strong)' } }, title),
        caption && R.createElement('p', { style: { margin: 0, fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.75rem', color: 'var(--text-subtle)' } }, caption),
        disclaimer && R.createElement('p', { style: { margin: '6px 0 0', fontFamily: 'var(--font-body)', fontWeight: 300, fontStyle: 'italic', fontSize: '0.625rem', color: 'var(--warm-grey-2)' } }, disclaimer === true ? 'Los resultados varían según la persona.' : disclaimer)));
  }

  function Accordion({ items = [], single = true, style = {}, ...rest }) {
    const [open, setOpen] = R.useState(single ? -1 : []);
    const isOpen = (i) => (single ? open === i : open.includes(i));
    const toggle = (i) => { if (single) setOpen(open === i ? -1 : i); else setOpen(open.includes(i) ? open.filter((x) => x !== i) : [...open, i]); };
    return R.createElement('div', { style: { borderBottom: '1px solid var(--border-soft)', ...style }, ...rest },
      items.map((it, i) => R.createElement('div', { key: i, style: { borderTop: '1px solid var(--border-soft)' } },
        R.createElement('button', { onClick: () => toggle(i), 'aria-expanded': isOpen(i), style: { width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '28px 0', textAlign: 'left' } },
          R.createElement('span', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h3)', color: 'var(--text-strong)', lineHeight: 1.25 } }, it.q),
          R.createElement('span', { style: { fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '1.6rem', color: 'var(--text-accent)', lineHeight: 1, flexShrink: 0, transform: isOpen(i) ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform var(--dur-base) var(--ease-cushion)' } }, '+')),
        R.createElement('div', { style: { display: 'grid', gridTemplateRows: isOpen(i) ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-base) var(--ease-out)' } },
          R.createElement('div', { style: { overflow: 'hidden' } },
            R.createElement('p', { style: { margin: 0, paddingBottom: 28, maxWidth: 640, fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'var(--text-body)', lineHeight: 1.7, color: 'var(--text-muted)' } }, it.a))))));
  }

  const labelStyle = { fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-subtle)' };
  function fieldBox(focused) { return { width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9375rem', color: 'var(--text-body)', background: 'var(--surface-card)', border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`, borderRadius: 'var(--radius-sm)', padding: '13px 16px', outline: 'none', boxShadow: focused ? '0 0 0 3px rgba(31,94,120,0.14)' : 'none', transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease' }; }
  function Labeled(label, required, id, control) {
    return R.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 7 } },
      label && R.createElement('label', { htmlFor: id, style: labelStyle }, label, required && R.createElement('span', { style: { color: 'var(--action)' } }, ' *')), control);
  }
  function Input({ label, id, type = 'text', placeholder, value, onChange, required = false, disabled = false, style = {}, ...rest }) {
    const [f, setF] = R.useState(false);
    return Labeled(label, required, id, R.createElement('input', { id, type, placeholder, value, onChange, required, disabled, onFocus: () => setF(true), onBlur: () => setF(false), style: { ...fieldBox(f), ...style }, ...rest }));
  }
  function Textarea({ label, id, placeholder, value, onChange, rows = 4, required = false, disabled = false, style = {}, ...rest }) {
    const [f, setF] = R.useState(false);
    return Labeled(label, required, id, R.createElement('textarea', { id, rows, placeholder, value, onChange, required, disabled, onFocus: () => setF(true), onBlur: () => setF(false), style: { ...fieldBox(f), lineHeight: 1.5, resize: 'vertical', ...style }, ...rest }));
  }
  function Select({ label, id, options = [], value, onChange, placeholder, required = false, disabled = false, style = {}, ...rest }) {
    const [f, setF] = R.useState(false);
    const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
    const fieldStyle = { ...fieldBox(f), color: value ? 'var(--text-body)' : 'var(--text-subtle)', padding: '13px 40px 13px 16px', appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236E7273' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', ...style };
    return Labeled(label, required, id, R.createElement('select', { id, value, onChange, required, disabled, onFocus: () => setF(true), onBlur: () => setF(false), style: fieldStyle, ...rest },
      placeholder && R.createElement('option', { value: '', disabled: true }, placeholder),
      opts.map((o) => R.createElement('option', { key: o.value, value: o.value }, o.label))));
  }

  function PriceBlock({ range = '$500 – $3,500', caption = 'Rango por zona de tratamiento', note, style = {}, ...rest }) {
    return R.createElement('div', { style: { background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-brand)', boxShadow: 'var(--shadow-sm)', padding: 'var(--space-7)', minWidth: 300, ...style }, ...rest },
      R.createElement('p', { style: { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)' } }, range),
      R.createElement('p', { style: { margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-subtle)' } }, caption),
      note && R.createElement('p', { style: { margin: '22px 0 0', maxWidth: 320, fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-muted)' } }, note));
  }

  const mine = { Button, IconButton, Badge, Tag, ServiceCard, TestimonialCard, ResultCard, Accordion, Input, Textarea, Select, PriceBlock };
  window.OLAMMedSpaDesignSystem_e5ad93 = Object.assign({}, mine, window.OLAMMedSpaDesignSystem_e5ad93 || {});
})();

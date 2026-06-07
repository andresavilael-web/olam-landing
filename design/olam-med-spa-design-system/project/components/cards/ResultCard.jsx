import React from 'react';

/**
 * Before/after result card. Photo with a floating uppercase tag chip,
 * zoom-on-hover image, title + caption below. Use for the results gallery.
 * If no image is supplied, renders a neutral placeholder.
 */
export function ResultCard({
  image,
  tag,
  title,
  caption,
  disclaimer,
  ratio = '3 / 4',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    background: 'var(--surface-card)',
    border: `1px solid ${hover ? 'var(--border-soft)' : 'var(--border-hairline)'}`,
    borderRadius: 'var(--radius-brand-lg)',
    boxShadow: hover ? 'var(--shadow-cushion)' : 'var(--shadow-card)',
    transform: hover ? 'var(--lift-card)' : 'none',
    transition: 'all var(--dur-base) var(--ease-cushion)',
    ...style,
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={cardStyle}
      {...rest}
    >
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: ratio }}>
        {image ? (
          <img src={image} alt={title || ''} style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hover ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-cushion)',
          }} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, var(--surface-linen), var(--surface-mist))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--warm-grey-2)', fontFamily: 'var(--font-body)', fontSize: '0.7rem',
            letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 400,
          }}>
            Foto real de paciente
          </div>
        )}
        {tag && (
          <span style={{
            position: 'absolute', top: 16, left: 16,
            background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)',
            border: '1px solid var(--border-hairline)', color: 'var(--text-strong)',
            fontFamily: 'var(--font-body)', fontSize: '0.5625rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '6px 12px', borderRadius: 'var(--radius-pill)',
          }}>
            {tag}
          </span>
        )}
      </div>
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.25rem', lineHeight: 1.15, color: 'var(--text-strong)' }}>{title}</h4>
        {caption && <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{caption}</p>}
        {disclaimer && <p style={{ margin: '6px 0 0', fontFamily: 'var(--font-body)', fontWeight: 300, fontStyle: 'italic', fontSize: '0.625rem', color: 'var(--warm-grey-2)' }}>{disclaimer === true ? 'Los resultados varían según la persona.' : disclaimer}</p>}
      </div>
    </div>
  );
}

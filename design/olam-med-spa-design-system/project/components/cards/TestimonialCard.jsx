import React from 'react';

/**
 * Testimonial / review card. Star rating, quote in display italic-friendly
 * body, patient attribution. White fill, soft card shadow, cushion hover.
 */
export function TestimonialCard({
  quote,
  name,
  detail,
  rating = 5,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    background: 'var(--surface-card)',
    border: `1px solid ${hover ? 'var(--border-soft)' : 'var(--border-hairline)'}`,
    borderRadius: 'var(--radius-brand)',
    padding: 'var(--space-7)',
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
      <div style={{ color: 'var(--rating)', letterSpacing: 3, fontSize: '0.9rem' }} aria-label={`${rating} out of 5`}>
        {'\u2605'.repeat(rating)}{'\u2606'.repeat(5 - rating)}
      </div>
      <p style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic', fontSize: '1.5rem',
        lineHeight: 1.35, color: 'var(--text-strong)', letterSpacing: 'var(--ls-tight)',
      }}>
        “{quote}”
      </p>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-strong)' }}>{name}</span>
        {detail && <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{detail}</span>}
      </div>
    </div>
  );
}

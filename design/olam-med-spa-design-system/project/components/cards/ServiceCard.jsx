import React from 'react';

/**
 * Numbered service / problem card (the "Six problems" grid). Warm
 * fill, hairline border, brand-tint corner glow, signature cushion
 * hover. Title shifts to accent on hover.
 */
export function ServiceCard({
  index,
  title,
  children,
  accent = 'blue',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const accentColor = accent === 'slate' ? 'var(--slate)' : 'var(--text-accent)';

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--surface-linen)',
    border: `1px solid ${hover ? 'var(--border-soft)' : 'var(--border-hairline)'}`,
    borderRadius: 'var(--radius-brand)',
    padding: 'var(--card-pad)',
    boxShadow: hover ? 'var(--shadow-cushion)' : 'none',
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
      <span style={{ position: 'absolute', top: 0, left: 'var(--card-pad)', right: 'var(--card-pad)', height: 1, background: 'var(--border-champagne)', opacity: hover ? 0.9 : 0, transition: 'opacity var(--dur-base) var(--ease-cushion)' }} />
      <div style={{ position: 'relative' }}>
        {index != null && (
          <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.18em', color: accentColor, marginBottom: 16 }}>
            {index}
          </span>
        )}
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h3)', lineHeight: 1.1,
          margin: '0 0 12px', color: hover ? accentColor : 'var(--text-strong)',
          transition: 'color var(--dur-base) var(--ease-cushion)',
        }}>
          {title}
        </h3>
        {children && (
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'var(--text-sm)', lineHeight: 1.65, color: 'var(--text-muted)' }}>
            {children}
          </p>
        )}
      </div>
    </div>
  );
}

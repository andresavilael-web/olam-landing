import React from 'react';

/**
 * Pill tag / chip. Used for metadata chips, technology labels, and
 * overlay chips on imagery. Solid, soft, or outline fills.
 */
export function Tag({
  children,
  variant = 'soft',
  style = {},
  ...rest
}) {
  const variants = {
    soft: { background: 'var(--action-tint)', color: 'var(--olam-blue)', border: '1px solid transparent' },
    linen: { background: 'var(--linen)', color: 'var(--text-body)', border: '1px solid transparent' },
    solid: { background: 'var(--action)', color: '#fff', border: '1px solid transparent' },
    slate: { background: 'var(--slate)', color: '#fff', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--text-body)', border: '1px solid var(--border-strong)' },
    glass: { background: 'rgba(255,255,255,0.9)', color: 'var(--text-strong)', border: '1px solid var(--border-hairline)', backdropFilter: 'blur(4px)' },
  };

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: '0.1em',
      padding: '6px 12px', borderRadius: 'var(--radius-pill)',
      ...variants[variant], ...style,
    }} {...rest}>
      {children}
    </span>
  );
}

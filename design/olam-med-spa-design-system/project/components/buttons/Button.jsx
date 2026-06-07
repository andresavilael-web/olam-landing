import React from 'react';

/**
 * OLAM primary button system. Pill-shaped, Inter semibold,
 * cushion-eased hover. Variants: primary (green), accent (steel
 * blue, matches live site), secondary (ink outline), ghost (text + arrow).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  disabled = false,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '11px 22px', fontSize: '0.8125rem' },
    md: { padding: '15px 32px', fontSize: '0.9375rem' },
    lg: { padding: '19px 42px', fontSize: '1rem' },
  };

  const variants = {
    primary: {
      background: 'var(--action)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-button)',
    },
    accent: {
      background: 'var(--action)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-button)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid transparent',
      boxShadow: 'none',
      padding: 0,
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.005em',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'all var(--dur-base) var(--ease-cushion)',
    WebkitTapHighlightColor: 'transparent',
    ...sizes[size],
    ...variants[variant],
    ...(variant === 'ghost' ? { padding: 0 } : {}),
    ...style,
  };

  const hoverIn = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary' || variant === 'accent') el.style.background = 'var(--action-hover)';
    else if (variant === 'secondary') { el.style.background = 'var(--action-ink)'; el.style.color = '#fff'; el.style.borderColor = 'var(--action-ink)'; }
    else if (variant === 'ghost') el.style.color = 'var(--action-hover)';
  };
  const hoverOut = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.background = variants[variant].background;
    el.style.color = variants[variant].color;
    if (variant === 'secondary') el.style.borderColor = 'var(--border-strong)';
  };

  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true" style={{ transition: 'transform var(--dur-base) var(--ease-cushion)' }}>→</span>}
    </>
  );

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      style={base}
      {...rest}
    >
      {content}
    </Tag>
  );
}

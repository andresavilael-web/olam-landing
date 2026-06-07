/* @ds-bundle: {"format":3,"namespace":"OLAMMedSpaDesignSystem_e5ad93","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"ResultCard","sourcePath":"components/cards/ResultCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"PriceBlock","sourcePath":"components/navigation/PriceBlock.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"960976fb4ccc","components/buttons/IconButton.jsx":"f9a216020301","components/cards/ResultCard.jsx":"5fc123789242","components/cards/ServiceCard.jsx":"2915d6901110","components/cards/TestimonialCard.jsx":"a7b0b8ce39d3","components/feedback/Accordion.jsx":"c15a320c5bd3","components/feedback/Badge.jsx":"ad2086539398","components/feedback/Tag.jsx":"e3ce2cf63f88","components/forms/Input.jsx":"cafdf223e482","components/forms/Select.jsx":"35a9a3ba9358","components/forms/Textarea.jsx":"bdce93cb3f57","components/navigation/PriceBlock.jsx":"dbdf5f033f1e","components/navigation/SiteHeader.jsx":"d0d103f6e38c","ui_kits/website/Bottom.jsx":"45039237f396","ui_kits/website/Chrome.jsx":"757665449ce6","ui_kits/website/Closing.jsx":"03b9dc7957ec","ui_kits/website/Middle.jsx":"8dc69e66c43c","ui_kits/website/Top.jsx":"91ccc0d42639","ui_kits/website/app.jsx":"00d2892ce5ed","ui_kits/website/components.jsx":"66ee45bf3d98"},"inlinedExternals":[],"unexposedExports":[{"name":"labelStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.OLAMMedSpaDesignSystem_e5ad93 = window.OLAMMedSpaDesignSystem_e5ad93 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM primary button system. Pill-shaped, Inter semibold,
 * cushion-eased hover. Variants: primary (green), accent (steel
 * blue, matches live site), secondary (ink outline), ghost (text + arrow).
 */
function Button({
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
    sm: {
      padding: '11px 22px',
      fontSize: '0.8125rem'
    },
    md: {
      padding: '15px 32px',
      fontSize: '0.9375rem'
    },
    lg: {
      padding: '19px 42px',
      fontSize: '1rem'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-button)'
    },
    accent: {
      background: 'var(--action)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-button)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid transparent',
      boxShadow: 'none',
      padding: 0
    }
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
    ...(variant === 'ghost' ? {
      padding: 0
    } : {}),
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary' || variant === 'accent') el.style.background = 'var(--action-hover)';else if (variant === 'secondary') {
      el.style.background = 'var(--action-ink)';
      el.style.color = '#fff';
      el.style.borderColor = 'var(--action-ink)';
    } else if (variant === 'ghost') el.style.color = 'var(--action-hover)';
  };
  const hoverOut = e => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.background = variants[variant].background;
    el.style.color = variants[variant].color;
    if (variant === 'secondary') el.style.borderColor = 'var(--border-strong)';
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transition: 'transform var(--dur-base) var(--ease-cushion)'
    }
  }, "\u2192"));
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    style: base
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button using Material Symbols. Used for the
 * filled-blue chevron pills in feature rows and compact controls.
 */
function IconButton({
  icon,
  variant = 'accent',
  size = 40,
  label,
  href,
  onClick,
  style = {},
  ...rest
}) {
  const variants = {
    accent: {
      background: 'var(--action)',
      color: '#fff'
    },
    primary: {
      background: 'var(--action)',
      color: '#fff'
    },
    ink: {
      background: 'var(--charcoal)',
      color: '#fff'
    },
    slate: {
      background: 'var(--slate)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'all var(--dur-base) var(--ease-cushion)',
    ...variants[variant],
    ...style
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type: 'button'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    "aria-label": label,
    onClick: onClick,
    style: base
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: size * 0.55,
      lineHeight: 1
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/ResultCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Before/after result card. Photo with a floating uppercase tag chip,
 * zoom-on-hover image, title + caption below. Use for the results gallery.
 * If no image is supplied, renders a neutral placeholder.
 */
function ResultCard({
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
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: cardStyle
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: ratio
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-cushion)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, var(--surface-linen), var(--surface-mist))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--warm-grey-2)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.7rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontWeight: 400
    }
  }, "Foto real de paciente"), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(4px)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.5625rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.15,
      color: 'var(--text-strong)'
    }
  }, title), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: '0.75rem',
      color: 'var(--text-subtle)'
    }
  }, caption), disclaimer && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: '0.625rem',
      color: 'var(--warm-grey-2)'
    }
  }, disclaimer === true ? 'Los resultados varían según la persona.' : disclaimer)));
}
Object.assign(__ds_scope, { ResultCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ResultCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Numbered service / problem card (the "Six problems" grid). Warm
 * fill, hairline border, brand-tint corner glow, signature cushion
 * hover. Title shifts to accent on hover.
 */
function ServiceCard({
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
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: cardStyle
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 'var(--card-pad)',
      right: 'var(--card-pad)',
      height: 1,
      background: 'var(--border-champagne)',
      opacity: hover ? 0.9 : 0,
      transition: 'opacity var(--dur-base) var(--ease-cushion)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      fontWeight: 600,
      letterSpacing: '0.18em',
      color: accentColor,
      marginBottom: 16
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h3)',
      lineHeight: 1.1,
      margin: '0 0 12px',
      color: hover ? accentColor : 'var(--text-strong)',
      transition: 'color var(--dur-base) var(--ease-cushion)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.65,
      color: 'var(--text-muted)'
    }
  }, children)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial / review card. Star rating, quote in display italic-friendly
 * body, patient attribution. White fill, soft card shadow, cushion hover.
 */
function TestimonialCard({
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
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: cardStyle
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--rating)',
      letterSpacing: 3,
      fontSize: '0.9rem'
    },
    "aria-label": `${rating} out of 5`
  }, '\u2605'.repeat(rating), '\u2606'.repeat(5 - rating)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontStyle: 'italic',
      fontSize: '1.5rem',
      lineHeight: 1.35,
      color: 'var(--text-strong)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '0.875rem',
      color: 'var(--text-strong)'
    }
  }, name), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: '0.75rem',
      color: 'var(--text-subtle)'
    }
  }, detail)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FAQ accordion. Sora question, hairline top border, a "+" that
 * rotates to "×" on open, smooth height reveal. Renders a list of
 * {q, a} items; one open at a time by default.
 */
function Accordion({
  items = [],
  single = true,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(single ? -1 : []);
  const isOpen = i => single ? open === i : open.includes(i);
  const toggle = i => {
    if (single) setOpen(open === i ? -1 : i);else setOpen(open.includes(i) ? open.filter(x => x !== i) : [...open, i]);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderBottom: '1px solid var(--border-soft)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggle(i),
    "aria-expanded": isOpen(i),
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '28px 0',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      lineHeight: 1.25
    }
  }, it.q), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: '1.6rem',
      color: 'var(--text-accent)',
      lineHeight: 1,
      flexShrink: 0,
      transform: isOpen(i) ? 'rotate(45deg)' : 'rotate(0deg)',
      transition: 'transform var(--dur-base) var(--ease-cushion)'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: isOpen(i) ? '1fr' : '0fr',
      transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingBottom: 28,
      maxWidth: 640,
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 'var(--text-body)',
      lineHeight: 1.7,
      color: 'var(--text-muted)'
    }
  }, it.a))))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow / status badge. Tiny tracked-uppercase label, optional
 * leading dot. Used as section eyebrows and qualifier markers.
 */
function Badge({
  children,
  tone = 'accent',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    accent: 'var(--text-accent)',
    slate: 'var(--slate)',
    champagne: 'var(--champagne)',
    muted: 'var(--text-subtle)'
  };
  const dotColors = {
    accent: 'var(--olam-blue)',
    slate: 'var(--slate)',
    champagne: 'var(--champagne)',
    muted: 'var(--warm-grey-2)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dotColors[tone],
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill tag / chip. Used for metadata chips, technology labels, and
 * overlay chips on imagery. Solid, soft, or outline fills.
 */
function Tag({
  children,
  variant = 'soft',
  style = {},
  ...rest
}) {
  const variants = {
    soft: {
      background: 'var(--action-tint)',
      color: 'var(--olam-blue)',
      border: '1px solid transparent'
    },
    linen: {
      background: 'var(--linen)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--action)',
      color: '#fff',
      border: '1px solid transparent'
    },
    slate: {
      background: 'var(--slate)',
      color: '#fff',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)'
    },
    glass: {
      background: 'rgba(255,255,255,0.9)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-hairline)',
      backdropFilter: 'blur(4px)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM text input. Warm white field, hairline border, 8px radius,
 * blue focus ring. Optional label + uppercase tracked label style.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--text-body)',
    background: 'var(--surface-card)',
    border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 16px',
    outline: 'none',
    boxShadow: focused ? '0 0 0 3px rgba(31,94,120,0.14)' : 'none',
    transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--action)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest)));
}
const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.6875rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: 'var(--text-subtle)'
};
Object.assign(__ds_scope, { Input, labelStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM select dropdown. Custom chevron, matches Input field styling.
 * Pass options as [{value, label}] or string[].
 */
function Select({
  label,
  id,
  options = [],
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: value ? 'var(--text-body)' : 'var(--text-subtle)',
    background: 'var(--surface-card)',
    border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 40px 13px 16px',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    cursor: 'pointer',
    boxShadow: focused ? '0 0 0 3px rgba(31,94,120,0.14)' : 'none',
    transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236E7273\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'6 9 12 15 18 9\'/></svg>")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: __ds_scope.labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--action)'
    }
  }, " *")), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    onChange: onChange,
    required: required,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM multi-line textarea. Matches Input styling.
 */
function Textarea({
  label,
  id,
  placeholder,
  value,
  onChange,
  rows = 4,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    lineHeight: 1.5,
    color: 'var(--text-body)',
    background: 'var(--surface-card)',
    border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 16px',
    outline: 'none',
    resize: 'vertical',
    boxShadow: focused ? '0 0 0 3px rgba(31,94,120,0.14)' : 'none',
    transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: __ds_scope.labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--action)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PriceBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Price transparency block. Big Sora range, tracked caption, and a
 * financing note. White card on warm panel.
 */
function PriceBlock({
  range = '$500 – $3,500',
  caption = 'Range per session area',
  note,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-brand)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-7)',
      minWidth: 300,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      letterSpacing: '-0.04em',
      color: 'var(--text-strong)'
    }
  }, range), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text-subtle)'
    }
  }, caption), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      maxWidth: 320,
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { PriceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PriceBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OLAM sticky site header: logo, EN/ES language toggle, phone CTA.
 * Translucent white with backdrop blur and a hairline bottom border.
 */
function SiteHeader({
  logoSrc = 'assets/logo-olam.png',
  phone = '954.237.0930',
  lang = 'en',
  onLangChange,
  style = {},
  ...rest
}) {
  const [active, setActive] = React.useState(lang);
  const setLang = l => {
    setActive(l);
    onLangChange && onLangChange(l);
  };
  const pill = (l, txt) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(l),
    "aria-pressed": active === l,
    style: {
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      background: active === l ? 'var(--charcoal)' : 'transparent',
      color: active === l ? '#fff' : 'var(--text-subtle)',
      transition: 'all var(--dur-base) var(--ease-cushion)'
    }
  }, txt);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "OLAM Med Spa",
    style: {
      height: 38,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-mist)',
      padding: 4,
      borderRadius: 'var(--radius-pill)'
    }
  }, pill('en', 'EN'), pill('es', 'ES')), /*#__PURE__*/React.createElement("a", {
    href: `tel:+1${phone.replace(/\D/g, '')}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--border-strong)',
      padding: '9px 20px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '0.875rem',
      color: 'var(--text-strong)',
      textDecoration: 'none',
      transition: 'all var(--dur-base) var(--ease-cushion)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--charcoal)';
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = 'var(--charcoal)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-strong)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    }
  }, active === 'es' ? 'Llama' : 'Call', " ", phone))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Bottom.jsx
try { (() => {
/* Olam Med Spa Website UI Kit — Bottom: Results, 3D consult (dark), Pricing */
const {
  ResultCard,
  PriceBlock,
  Badge: Eb,
  Button: B2
} = window.OLAMMedSpaDesignSystem_e5ad93;
function Results() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Eb, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Realistic expectations",
    es: "Expectativas reales"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "What real results ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "look like.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "C\xF3mo se ven ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "los resultados reales."))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 28,
      marginBottom: 44
    }
  }, [['01', 'Visible firmness on the jaw and neck, often starting around week 4–6.', 'Firmeza visible en óvalo y cuello, a menudo desde la semana 4 a 6.'], ['02', 'Clearer definition that builds gradually over 2–6 months.', 'Definición más clara que se construye de forma gradual en 2 a 6 meses.'], ['03', 'Gradual collagen support — the kind of change friends notice quietly.', 'Soporte de colágeno gradual — el tipo de cambio que las amigas notan sin saber por qué.'], ['04', 'Natural-looking — never overdone, frozen or "filtered".', 'Aspecto natural — sin exceso, congelado ni "filtrado".']].map(([n, en, es]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.25rem',
      color: 'var(--olam-blue)',
      letterSpacing: '0.05em',
      marginTop: 2
    }
  }, n), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      color: 'var(--text-muted)',
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: en,
    es: es
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(ResultCard, {
    tag: "\xD3VALO \xB7 SEM 12",
    title: /*#__PURE__*/React.createElement(L, {
      en: "Jawline contour",
      es: "Contorno del \xF3valo"
    }),
    caption: /*#__PURE__*/React.createElement(L, {
      en: "Week 12 vs baseline",
      es: "Semana 12 vs inicio"
    }),
    disclaimer: true
  }), /*#__PURE__*/React.createElement(ResultCard, {
    tag: "TERCIO MEDIO",
    title: /*#__PURE__*/React.createElement(L, {
      en: "Cheek elevation",
      es: "Elevaci\xF3n del p\xF3mulo"
    }),
    caption: /*#__PURE__*/React.createElement(L, {
      en: "Clinical outcome",
      es: "Resultado cl\xEDnico"
    }),
    disclaimer: true
  }), /*#__PURE__*/React.createElement(ResultCard, {
    tag: "SESI\xD3N",
    title: /*#__PURE__*/React.createElement(L, {
      en: "Ultrasound session",
      es: "Sesi\xF3n de ultrasonido"
    }),
    caption: /*#__PURE__*/React.createElement(L, {
      en: "In clinic",
      es: "En cl\xEDnica"
    })
  }), /*#__PURE__*/React.createElement(ResultCard, {
    tag: "COL\xC1GENO",
    title: /*#__PURE__*/React.createElement(L, {
      en: "Natural contour",
      es: "Contorno natural"
    }),
    caption: /*#__PURE__*/React.createElement(L, {
      en: "Serene radiance",
      es: "Radiaci\xF3n serena"
    }),
    disclaimer: true
  }))));
}
function Consult() {
  const item = (n, en, es, sen, ses) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      paddingBottom: 28,
      borderBottom: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.6rem',
      color: 'var(--champagne)'
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '1.0625rem',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: en,
    es: es
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: sen,
    es: ses
  }))));
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--charcoal)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--champagne)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "The 3D diagnostic consultation",
    es: "La consulta con diagn\xF3stico 3D"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h2)',
      lineHeight: 1.05,
      margin: '18px 0 28px'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "A medical session. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic',
        color: 'var(--mist-blue)'
      }
    }, "Not a sales pitch.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Una sesi\xF3n m\xE9dica. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic',
        color: 'var(--mist-blue)'
      }
    }, "No un pitch de ventas."))
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontWeight: 300,
      fontSize: 'var(--text-lead)',
      lineHeight: 1.7,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "$100 is what it takes to do the work properly: a 3D skin analysis, a written plan reviewed by our medical director, exact pricing in writing, and a realistic view of what to expect.",
    es: "$100 es lo que cuesta hacer el trabajo bien: un an\xE1lisis 3D de la piel, un plan escrito y revisado por nuestro director m\xE9dico, precio exacto por escrito y una visi\xF3n realista de qu\xE9 esperar."
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 36px',
      fontWeight: 300,
      fontSize: 'var(--text-lead)',
      lineHeight: 1.7,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Move forward within 30 days and your $100 is credited to treatment. If it's not right for you, the plan is yours to keep.",
    es: "Si avanzas en 30 d\xEDas, tus $100 se acreditan al tratamiento. Si no es para ti, el plan es tuyo."
  })), /*#__PURE__*/React.createElement(B2, {
    variant: "ondark",
    size: "lg",
    href: "#reserve",
    arrow: true
  }, /*#__PURE__*/React.createElement(L, {
    en: "Book my consultation",
    es: "Agenda mi consulta"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 72,
      borderLeft: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--champagne)',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "What your consultation includes",
    es: "Qu\xE9 incluye tu consulta"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, item('01', '3D skin analysis', 'Análisis 3D de la piel', 'An objective reading of your skin — laxity, texture and structure — not a visual guess.', 'Una lectura objetiva de tu piel — flacidez, textura y estructura — sin adivinanzas.'), item('02', 'Personalized plan, in writing', 'Plan personalizado por escrito', 'Technology, area and sequence — reviewed and signed off by our medical director.', 'Tecnología, zona y secuencia — revisado y firmado por nuestro director médico.'), item('03', 'Exact pricing, in writing', 'Precio exacto por escrito', 'Before any decision. No upselling on the day of treatment.', 'Antes de decidir. Sin ventas de más el día del tratamiento.'), item('04', 'A realistic timeline', 'Una línea de tiempo realista', 'What to expect at months 2, 4 and 6 — results vary by person.', 'Qué esperar a los meses 2, 4 y 6 — los resultados varían según la persona.')))));
}
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--surface-linen)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eb, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Price transparency",
    es: "Transparencia de precios"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Real prices. ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "No hidden estimates.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Precios reales. ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "Sin estimados escondidos."))
  }))), /*#__PURE__*/React.createElement(PriceBlock, {
    range: "$500 \u2013 $3,500",
    caption: /*#__PURE__*/React.createElement(L, {
      en: "Range per treatment area",
      es: "Rango por zona de tratamiento"
    }),
    note: /*#__PURE__*/React.createElement(L, {
      en: /*#__PURE__*/React.createElement(React.Fragment, null, "Financing from ", /*#__PURE__*/React.createElement("strong", {
        style: {
          fontWeight: 500
        }
      }, "$45/mo"), ". Your exact price is confirmed in writing after your 3D diagnosis."),
      es: /*#__PURE__*/React.createElement(React.Fragment, null, "Financiamiento desde ", /*#__PURE__*/React.createElement("strong", {
        style: {
          fontWeight: 500
        }
      }, "$45/mes"), ". Tu precio exacto se confirma por escrito tras tu diagn\xF3stico 3D.")
    })
  })));
}
Object.assign(window, {
  Results,
  Consult,
  Pricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* Olam Med Spa Website UI Kit — Chrome: header + footer + helpers */
const {
  Button
} = window.OLAMMedSpaDesignSystem_e5ad93;
function L({
  en,
  es
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "only-en"
  }, en), /*#__PURE__*/React.createElement("span", {
    className: "only-es"
  }, es));
}
function Header({
  lang,
  setLang
}) {
  const pill = (l, txt) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(l),
    "aria-pressed": lang === l,
    style: {
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      background: lang === l ? 'var(--charcoal)' : 'transparent',
      color: lang === l ? '#fff' : 'var(--text-subtle)',
      transition: 'all var(--dur-base) var(--ease-cushion)'
    }
  }, txt);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 14,
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-olam.png",
    alt: "Olam Med Spa",
    style: {
      height: 40,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-mist)',
      padding: 4,
      borderRadius: 'var(--radius-pill)'
    }
  }, pill('en', 'EN'), pill('es', 'ES')), /*#__PURE__*/React.createElement("a", {
    href: "tel:+19542370930",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--border-strong)',
      padding: '9px 20px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '0.875rem',
      color: 'var(--text-strong)',
      textDecoration: 'none',
      transition: 'all var(--dur-base) var(--ease-cushion)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--charcoal)';
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = 'var(--charcoal)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-strong)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Call 954.237.0930",
    es: "Llama 954.237.0930"
  })))));
}
function Footer() {
  const col = (heading, links) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.625rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text-on-dark-muted)'
    }
  }, heading), links.map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontSize: '0.875rem',
      fontWeight: 300,
      color: 'rgba(255,255,255,0.62)',
      textDecoration: 'none'
    }
  }, t)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--charcoal)',
      color: '#fff',
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-olam-white.png",
    alt: "Olam Med Spa",
    style: {
      height: 40,
      width: 'auto',
      objectFit: 'contain',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: '0.875rem',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Medical aesthetics in Pembroke Pines, FL. Non-invasive treatments, personalized plans, and 3D skin diagnosis \u2014 to reveal your natural beauty.",
    es: "Est\xE9tica m\xE9dica en Pembroke Pines, FL. Tratamientos no invasivos, planes personalizados y diagn\xF3stico 3D \u2014 para revelar tu belleza natural."
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--champagne)',
      letterSpacing: 3
    }
  }, "\u2605\u2605\u2605\u2605\u2605 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: '0.8rem',
      letterSpacing: 0,
      fontWeight: 300
    }
  }, "4.9 \xB7 400+ Google reviews"))), col(/*#__PURE__*/React.createElement(L, {
    en: "Treatments",
    es: "Tratamientos"
  }), ['Skin Tightening', 'Ultherapy', 'RF Microneedling', 'Agnes RF', 'Injectables']), col(/*#__PURE__*/React.createElement(L, {
    en: "Clinic",
    es: "Cl\xEDnica"
  }), [/*#__PURE__*/React.createElement(L, {
    en: "Medical Leadership",
    es: "Liderazgo m\xE9dico"
  }), /*#__PURE__*/React.createElement(L, {
    en: "Real Results",
    es: "Resultados reales"
  }), 'Pricing', 'FAQ', /*#__PURE__*/React.createElement(L, {
    en: "Book Consultation",
    es: "Agenda tu consulta"
  })]), col(/*#__PURE__*/React.createElement(L, {
    en: "Visit",
    es: "Vis\xEDtanos"
  }), ['Pembroke Pines, FL', '954.237.0930', 'Mon–Sat 9–6', /*#__PURE__*/React.createElement(L, {
    en: "Financing",
    es: "Financiamiento"
  })])), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      fontWeight: 300,
      color: 'rgba(255,255,255,0.45)'
    }
  }, "\xA9 2026 Olam Med Spa. ", /*#__PURE__*/React.createElement(L, {
    en: "All rights reserved.",
    es: "Todos los derechos reservados."
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      fontWeight: 300,
      color: 'rgba(255,255,255,0.45)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Individual results may vary \xB7 Privacy \xB7 Terms",
    es: "Los resultados var\xEDan seg\xFAn la persona \xB7 Privacidad \xB7 T\xE9rminos"
  }))));
}
Object.assign(window, {
  L,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Closing.jsx
try { (() => {
/* Olam Med Spa Website UI Kit — Closing: FAQ + Reservation form */
const {
  Accordion,
  Input,
  Select,
  Textarea,
  Button: B3,
  Badge: Eb3
} = window.OLAMMedSpaDesignSystem_e5ad93;
function FAQ() {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const items = [{
    en: ['Does it hurt?', 'For most treatments we apply topical numbing beforehand. Patients describe warmth or a quick tingling, not sharp pain — and you can return to your day as usual.'],
    es: ['¿Duele el tratamiento?', 'Para la mayoría de tratamientos aplicamos anestesia tópica antes. Las pacientes describen calor o un cosquilleo breve, no dolor agudo — y puedes volver a tu día con normalidad.']
  }, {
    en: ['When will I see results?', 'Initial firmness is often visible between weeks 4–6, and improvement builds gradually over 2–6 months. It\'s a natural process — which is part of why it looks like you. Results vary by person.'],
    es: ['¿Cuándo veré resultados?', 'La firmeza inicial suele notarse entre las semanas 4 y 6, y la mejora avanza de forma gradual durante 2 a 6 meses. Es un proceso natural — por eso se ve como tú. Los resultados varían según la persona.']
  }, {
    en: ['Why choose Olam over a chain med-spa?', 'Your plan is reviewed by our medical director, treatments are performed by licensed professionals who don\'t rotate every few months, and you receive a complete follow-up. You\'re choosing medical supervision and warmth — not a room with a machine.'],
    es: ['¿Por qué elegir Olam frente a una cadena?', 'Tu plan lo revisa nuestro director médico, los tratamientos los realizan profesionales licenciados que no rotan cada pocos meses, y recibes un seguimiento completo. Eliges supervisión médica y calidez — no un cuarto con una máquina.']
  }, {
    en: ['What if it isn\'t right for me?', 'Your 3D diagnostic consultation is designed to find that out before we recommend anything. If a treatment isn\'t right for you, we\'ll tell you clearly — and you keep the written analysis, with no pressure.'],
    es: ['¿Y si no es lo adecuado para mí?', 'Tu consulta con diagnóstico 3D está diseñada para averiguarlo antes de recomendar nada. Si un tratamiento no es para ti, te lo decimos con claridad — y te llevas el análisis por escrito, sin presión.']
  }, {
    en: ['It\'s my first time — is it safe?', 'Every plan is supervised by our medical director, using technology cleared for its use, with a complete follow-up protocol and direct contact if you have questions.'],
    es: ['Es mi primera vez — ¿es seguro?', 'Cada plan está supervisado por nuestro director médico, con tecnología autorizada para su uso, un protocolo de seguimiento completo y contacto directo si tienes dudas.']
  }].map(it => ({
    q: it[lang][0],
    a: it[lang][1]
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--surface-mist)'
    },
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap-narrow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Eb3, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Common questions",
    es: "Preguntas frecuentes"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Questions ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "real patients"), " ask us."),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Preguntas que ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "pacientes reales"), " nos hacen.")
  }))), /*#__PURE__*/React.createElement(Accordion, {
    items: items
  })));
}
function Reserve() {
  const benefit = (en, es) => /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      fontWeight: 300,
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      marginTop: 1
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(L, {
    en: en,
    es: es
  })));
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--slate)'
    },
    id: "reserve"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 3fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Reserve your consultation",
    es: "Reserva tu consulta"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h2)',
      lineHeight: 1.05,
      color: '#fff',
      margin: '18px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "One honest conversation.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic',
        color: 'rgba(255,255,255,0.7)'
      }
    }, "Then you decide.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Una conversaci\xF3n honesta.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic',
        color: 'rgba(255,255,255,0.7)'
      }
    }, "T\xFA decides despu\xE9s."))
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 28px',
      fontWeight: 300,
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "We'll reach out within 5 minutes during business hours to confirm a time that works for you.",
    es: "Te contactaremos en 5 minutos en horario laboral para confirmar un horario que te funcione."
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, benefit('$100 credited to your first treatment within 30 days', '$100 acreditables a tu primer tratamiento en 30 días'), benefit('A written treatment plan you keep, regardless', 'Un plan de tratamiento por escrito, pase lo que pase'), benefit('Financing options from $45/mo', 'Opciones de financiamiento desde $45/mes'), benefit('Supervised by our medical director', 'Supervisado por nuestro director médico'))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-brand-lg)',
      padding: 36,
      boxShadow: 'var(--shadow-2xl)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      e.target.reset();
      alert('Gracias — te contactaremos en 5 minutos en horario laboral.');
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "First name",
      es: "Nombre"
    }),
    id: "fn",
    placeholder: "Jane",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "Last name",
      es: "Apellido"
    }),
    id: "ln",
    placeholder: "Doe",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "Phone",
      es: "Tel\xE9fono"
    }),
    id: "ph",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    id: "em",
    type: "email",
    placeholder: "you@email.com",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "What would you like to improve?",
      es: "\xBFQu\xE9 te gustar\xEDa mejorar?"
    }),
    id: "cn",
    placeholder: lang0(),
    options: ['Jawline & neck', 'Cheeks & mid-face', 'Skin texture / chest', 'Brow & eye area', 'Post-weight-loss laxity', 'Not sure — help me decide']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: /*#__PURE__*/React.createElement(L, {
      en: "Anything else we should know?",
      es: "\xBFAlgo m\xE1s que debamos saber?"
    }),
    id: "nt",
    rows: 3,
    placeholder: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(B3, {
    variant: "primary",
    size: "lg",
    type: "submit",
    arrow: true,
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Book my 3D diagnostic consultation",
    es: "Agenda mi diagn\xF3stico 3D"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1 / -1',
      margin: 0,
      fontWeight: 300,
      fontSize: '0.6875rem',
      fontStyle: 'italic',
      color: 'var(--text-subtle)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Non-invasive treatments. Individual results may vary.",
    es: "Tratamientos no invasivos. Los resultados var\xEDan seg\xFAn la persona."
  }))))));
}
function lang0() {
  return (document.documentElement.getAttribute('data-lang') || 'en') === 'es' ? 'Elige una zona' : 'Select an area';
}
Object.assign(window, {
  FAQ,
  Reserve
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Middle.jsx
try { (() => {
/* Olam Med Spa Website UI Kit — Middle: What we treat + Technologies tabs */
const {
  ServiceCard,
  Badge: Eyebrow
} = window.OLAMMedSpaDesignSystem_e5ad93;
const CONCERNS = [{
  en: ['Jawline definition', 'The first place skin laxity tends to show. We address it with a personalized plan, not a single technique.'],
  es: ['Definición del óvalo facial', 'El primer lugar donde suele notarse la flacidez. Lo abordamos con un plan personalizado, no con una sola técnica.']
}, {
  en: ['Neck firmness', 'Loss of tone in the neck and under the chin — often visible in photos before the mirror catches it.'],
  es: ['Firmeza del cuello', 'Pérdida de tono en el cuello y bajo el mentón — visible en fotos antes que en el espejo.']
}, {
  en: ['Cheeks & mid-face', 'Gradual descent of the mid-face. We help restore a softer, lifted balance — naturally.'],
  es: ['Pómulos y tercio medio', 'Descenso gradual del tercio medio. Ayudamos a recuperar un equilibrio más suave y elevado — con naturalidad.']
}, {
  en: ['Skin texture & crepiness', 'Surface texture and fine crepey skin on the neck and chest. A different protocol than facial laxity.'],
  es: ['Textura y piel crepé', 'Textura superficial y piel crepé fina en cuello y escote. Un protocolo distinto al de la flacidez facial.']
}, {
  en: ['Post-weight-loss laxity', "Skin that didn't fully retract after a weight change. We plan deeper, gradual collagen support."],
  es: ['Flacidez post pérdida de peso', 'Piel que no se retrajo del todo tras un cambio de peso. Planeamos un soporte de colágeno gradual y profundo.']
}, {
  en: ['Brow & eye area', 'A subtle heaviness around the brow and eyes over time. Often improvable without surgery.'],
  es: ['Cejas y mirada', 'Una ligera pesadez en cejas y ojos con el tiempo. A menudo mejorable sin cirugía.']
}];
function Treat() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "What we treat",
    es: "Qu\xE9 tratamos"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Six concerns. ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "One diagnostic path.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Seis inquietudes. ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "Un camino diagn\xF3stico."))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, CONCERNS.map((p, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: i,
    index: String(i + 1).padStart(2, '0'),
    title: /*#__PURE__*/React.createElement(L, {
      en: p.en[0],
      es: p.es[0]
    })
  }, /*#__PURE__*/React.createElement(L, {
    en: p.en[1],
    es: p.es[1]
  }))))));
}
const TECH = {
  ultherapy: {
    name: 'Ultherapy®',
    kicker: {
      en: 'Deep ultrasound lifting',
      es: 'Lifting de ultrasonido profundo'
    },
    body: {
      en: "Micro-focused ultrasound reaches the deeper support layer to gently stimulate the skin's own collagen — without breaking the surface.",
      es: 'El ultrasonido microfocalizado llega a la capa de soporte profunda para estimular suavemente el colágeno propio de la piel — sin dañar la superficie.'
    },
    points: [{
      en: 'Well-suited for jawline and brow areas',
      es: 'Indicado para óvalo facial y cejas'
    }, {
      en: 'Results build gradually over 2–6 months',
      es: 'Los resultados se construyen de forma gradual en 2 a 6 meses'
    }],
    meta: [['Target', 'Deep support layer'], ['Duration', '60–90 minutes'], ['Downtime', 'None'], ['Comfort', 'Topical numbing']]
  },
  rf: {
    name: 'RF Microneedling',
    kicker: {
      en: 'Radiofrequency & microneedling',
      es: 'Radiofrecuencia y microagujas'
    },
    body: {
      en: 'Microneedling paired with radiofrequency at precise depths to support the skin and improve texture and crepiness.',
      es: 'Microagujas combinadas con radiofrecuencia a profundidades precisas para apoyar la piel y mejorar textura y piel crepé.'
    },
    points: [{
      en: 'Great for neck texture and fine lines',
      es: 'Ideal para textura del cuello y líneas finas'
    }, {
      en: 'Supports density in maturing skin',
      es: 'Apoya la densidad en piel madura'
    }],
    meta: [['Target', 'Dermis & surface'], ['Duration', '45–60 minutes'], ['Downtime', '1–2 days redness'], ['Comfort', 'Topical numbing']]
  },
  agnes: {
    name: 'Agnes RF™',
    kicker: {
      en: 'Targeted precision',
      es: 'Precisión dirigida'
    },
    body: {
      en: 'Precision radiofrequency to address targeted areas such as under-eye fullness and the jawline, with careful, gradual technique.',
      es: 'Radiofrecuencia de precisión para zonas específicas como bolsas bajo los ojos y el óvalo facial, con una técnica cuidadosa y gradual.'
    },
    points: [{
      en: 'Pinpoint approach for small areas',
      es: 'Enfoque puntual para zonas pequeñas'
    }, {
      en: 'Tailored to your diagnosis',
      es: 'Ajustado a tu diagnóstico'
    }],
    meta: [['Target', 'Targeted zones'], ['Duration', '30–45 minutes'], ['Downtime', '2–3 days swelling'], ['Comfort', 'Local / topical']]
  }
};
function Technologies() {
  const [tab, setTab] = React.useState('ultherapy');
  const t = TECH[tab];
  const tabBtn = (id, label) => {
    const on = tab === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setTab(id),
      style: {
        padding: '12px 24px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: `1px solid ${on ? 'var(--olam-blue)' : 'var(--border-strong)'}`,
        background: on ? 'var(--olam-blue)' : 'transparent',
        color: on ? '#fff' : 'var(--text-subtle)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'all var(--dur-base) var(--ease-cushion)'
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "The category, not one machine",
    es: "La categor\xEDa, no una sola m\xE1quina"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Not one treatment. ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "The right treatment"), " for your skin."),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "No un tratamiento. ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "El tratamiento correcto"), " para tu piel.")
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      color: 'var(--text-muted)',
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Skin tightening isn't a single device \u2014 it's a category. What works for your neck may not be right for your jawline.",
    es: "La firmeza no es una sola m\xE1quina \u2014 es una categor\xEDa. Lo que funciona para tu cuello puede no ser lo correcto para tu \xF3valo facial."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      borderBottom: '1px solid var(--border-hairline)',
      paddingBottom: 24,
      marginBottom: 40,
      flexWrap: 'wrap'
    }
  }, tabBtn('ultherapy', 'Ultherapy'), tabBtn('rf', 'RF Microneedling'), tabBtn('agnes', 'Agnes RF')), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-brand-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 40,
      display: 'grid',
      gridTemplateColumns: '3fr 2fr',
      gap: 36,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 600,
      color: 'var(--olam-blue)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: t.kicker.en,
    es: t.kicker.es
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '2.25rem',
      margin: '10px 0 16px',
      color: 'var(--text-strong)'
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontWeight: 300,
      color: 'var(--text-muted)',
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: t.body.en,
    es: t.body.es
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, t.points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 'var(--text-sm)',
      fontWeight: 400,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--olam-blue)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(L, {
    en: p.en,
    es: p.es
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-linen)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-brand)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.7rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-strong)',
      margin: '0 0 16px',
      paddingBottom: 12,
      borderBottom: '1px solid var(--border-champagne)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Clinical overview",
    es: "Resumen cl\xEDnico"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, t.meta.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontSize: '0.625rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-subtle)'
    }
  }, k), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '0.8125rem',
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.875rem',
      lineHeight: 1.3,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Which one is right for you is decided in your 3D diagnostic consultation \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "not by Google, not by guessing, and never by upselling.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Cu\xE1l es la correcta se decide en tu consulta con diagn\xF3stico 3D \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "no por Google, no adivinando, y nunca vendi\xE9ndote de m\xE1s."))
  })))));
}
Object.assign(window, {
  Treat,
  Technologies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Middle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Top.jsx
try { (() => {
/* Olam Med Spa Website UI Kit — Top: Hero, Qualification, Medical Leadership */
const {
  Badge,
  Button: Btn
} = window.OLAMMedSpaDesignSystem_e5ad93;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #fff, var(--surface-linen))',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-12%',
      right: '-6%',
      width: '42%',
      height: '60%',
      background: 'var(--mist-5)',
      filter: 'blur(120px)',
      borderRadius: '50%',
      opacity: 0.9,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Non-invasive skin tightening & lifting",
    es: "Tensado y lifting no invasivo"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h1)',
      lineHeight: 1.02,
      letterSpacing: 'var(--ls-display)',
      margin: '0 0 22px',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Tighten and lift your skin, ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "naturally.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Tensa y levanta tu piel, ", /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "con naturalidad."))
  })), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: 470,
      margin: '0 0 24px'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Firmer, lifted skin in 60\u201390 days \u2014 guided by a personalized plan and 3D skin diagnosis. 35,000+ procedures performed. Featured in Forbes & Univisi\xF3n.",
    es: "Piel m\xE1s firme y levantada en 60 a 90 d\xEDas \u2014 guiada por un plan personalizado y diagn\xF3stico 3D. M\xE1s de 35,000 procedimientos. Destacadas en Forbes y Univisi\xF3n."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rating)',
      letterSpacing: 2
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "4.9"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--warm-grey-2)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      fontWeight: 300,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Google \u2014 400+ reviews",
    es: "Google \u2014 400+ rese\xF1as"
  }))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    href: "#reserve",
    arrow: true
  }, /*#__PURE__*/React.createElement(L, {
    en: "Book my 3D diagnostic consultation",
    es: "Agenda mi diagn\xF3stico 3D"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      fontSize: '0.6875rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(L, {
    en: "Non-invasive \xB7 no downtime",
    es: "No invasivo \xB7 sin downtime"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--champagne)'
    }
  }, "|"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(L, {
    en: "Financing from $45/mo",
    es: "Financiamiento desde $45/mes"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-2xl)',
      aspectRatio: '4 / 5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      width: '100%',
      height: '100%'
    }
  }, "Foto editorial \u2014 rostro real,", /*#__PURE__*/React.createElement("br", null), "luz natural suave"))));
}
function QualCard({
  tone,
  heading,
  items
}) {
  const isPos = tone === 'pos';
  const mark = isPos ? 'var(--olam-blue)' : 'var(--slate)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-linen)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-brand)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: isPos ? 'accent' : 'slate',
    dot: true,
    style: {
      marginBottom: 22,
      position: 'relative'
    }
  }, heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      position: 'relative'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 'var(--text-sm)',
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: mark,
      fontWeight: 600
    }
  }, isPos ? '✓' : '—'), /*#__PURE__*/React.createElement("span", null, it)))));
}
function Qualification() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Honest first",
    es: "Honestidad primero"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Is this", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "for you?")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "\xBFEsto es", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "para ti?"))
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      color: 'var(--text-muted)',
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "We care more about our patients than our sales. So here's the honest filter \u2014 before you book.",
    es: "Cuidamos m\xE1s a nuestros pacientes que a nuestras ventas. Por eso, el filtro honesto \u2014 antes de que agendes."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(QualCard, {
    tone: "pos",
    heading: /*#__PURE__*/React.createElement(L, {
      en: "A great fit if",
      es: "Ideal para ti si"
    }),
    items: [/*#__PURE__*/React.createElement(L, {
      en: "You notice early loss of firmness along your jawline, neck or cheeks.",
      es: "Notas p\xE9rdida temprana de firmeza en el \xF3valo facial, cuello o p\xF3mulos."
    }), /*#__PURE__*/React.createElement(L, {
      en: "You're 35\u201365 and want to act gradually, before anything surgical.",
      es: "Tienes entre 35 y 65 y quieres actuar de forma gradual, antes de una cirug\xEDa."
    }), /*#__PURE__*/React.createElement(L, {
      en: "You want natural results \u2014 to look like yourself, refreshed.",
      es: "Buscas un resultado natural \u2014 verte como t\xFA, renovada."
    })]
  }), /*#__PURE__*/React.createElement(QualCard, {
    tone: "neg",
    heading: /*#__PURE__*/React.createElement(L, {
      en: "Maybe not yet if",
      es: "Quiz\xE1 a\xFAn no si"
    }),
    items: [/*#__PURE__*/React.createElement(L, {
      en: "You're after a dramatic, filtered look rather than a natural one.",
      es: "Buscas un look dram\xE1tico y filtrado m\xE1s que uno natural."
    }), /*#__PURE__*/React.createElement(L, {
      en: "You expect a single session to change everything overnight.",
      es: "Esperas que una sola sesi\xF3n lo cambie todo de un d\xEDa para otro."
    })]
  }))));
}
function Leadership() {
  const row = txt => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 0',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--olam-blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      color: 'var(--text-strong)'
    }
  }, txt));
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      background: 'var(--surface-mist)',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: "Medical Leadership",
    es: "Liderazgo m\xE9dico"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h",
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Collective expertise. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "Not a personality.")),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Excelencia colectiva. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "em"
    }, "No una personalidad."))
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontWeight: 300,
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      fontSize: 'var(--text-lead)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "Every Olam treatment plan is personally reviewed and supervised by our ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)',
        fontWeight: 500
      }
    }, "medical director"), " \u2014 a team with ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)',
        fontWeight: 500
      }
    }, "30+ years of combined experience"), " in aesthetic medicine."),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Cada plan de tratamiento lo revisa y supervisa personalmente nuestro ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)',
        fontWeight: 500
      }
    }, "director m\xE9dico"), " \u2014 un equipo con ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)',
        fontWeight: 500
      }
    }, "m\xE1s de 30 a\xF1os de experiencia combinada"), ".")
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      fontSize: 'var(--text-lead)'
    }
  }, /*#__PURE__*/React.createElement(L, {
    en: /*#__PURE__*/React.createElement(React.Fragment, null, "We've performed ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)',
        fontWeight: 500
      }
    }, "35,000+ procedures"), ". This isn't a rotating-staff franchise \u2014 it's a medical institution that puts the person before the procedure."),
    es: /*#__PURE__*/React.createElement(React.Fragment, null, "Hemos realizado ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-body)',
        fontWeight: 500
      }
    }, "m\xE1s de 35,000 procedimientos"), ". No somos una franquicia de personal rotativo \u2014 somos una instituci\xF3n m\xE9dica: la persona antes que el procedimiento.")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      minHeight: 460,
      boxShadow: 'var(--shadow-2xl)',
      border: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, "Foto del equipo Olam"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, #fff 8%, rgba(255,255,255,0.82) 45%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 40px 32px'
    }
  }, row(/*#__PURE__*/React.createElement(L, {
    en: "Supervised.",
    es: "Supervisado."
  })), row(/*#__PURE__*/React.createElement(L, {
    en: "Licensed.",
    es: "Licenciado."
  })), row(/*#__PURE__*/React.createElement(L, {
    en: "Accountable.",
    es: "Responsable."
  }))))));
}
Object.assign(window, {
  Hero,
  Qualification,
  Leadership
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Top.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* OLAM Website UI Kit — app: assembles sections + language state */
function App() {
  const [lang, setLangState] = React.useState('en');
  const setLang = l => {
    document.documentElement.setAttribute('data-lang', l);
    setLangState(l);
  };
  React.useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);
  return /*#__PURE__*/React.createElement("div", {
    key: lang
  }, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Qualification, null), /*#__PURE__*/React.createElement(Leadership, null), /*#__PURE__*/React.createElement(Treat, null), /*#__PURE__*/React.createElement(Technologies, null), /*#__PURE__*/React.createElement(Results, null), /*#__PURE__*/React.createElement(Consult, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Reserve, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
/* Olam Med Spa Website UI Kit — self-contained component primitives.
   Brand Book v3. Mirrors the published design-system components
   (same API & namespace) so this kit renders standalone. */
(function () {
  const R = React;
  function Button({
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
      sm: {
        padding: '11px 22px',
        fontSize: '0.8125rem'
      },
      md: {
        padding: '15px 32px',
        fontSize: '0.9375rem'
      },
      lg: {
        padding: '19px 42px',
        fontSize: '1rem'
      }
    };
    const variants = {
      primary: {
        background: 'var(--action)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-button)'
      },
      accent: {
        background: 'var(--action)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-button)'
      },
      secondary: {
        background: 'transparent',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-strong)',
        boxShadow: 'none'
      },
      ondark: {
        background: '#fff',
        color: 'var(--charcoal)',
        border: '1px solid transparent',
        boxShadow: 'none'
      },
      ghost: {
        background: 'transparent',
        color: 'var(--text-accent)',
        border: '1px solid transparent',
        boxShadow: 'none'
      }
    };
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
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
      ...sizes[size],
      ...variants[variant],
      ...(variant === 'ghost' ? {
        padding: 0
      } : {}),
      ...style
    };
    const hoverIn = e => {
      if (disabled) return;
      const el = e.currentTarget;
      if (variant === 'primary' || variant === 'accent') el.style.background = 'var(--action-hover)';else if (variant === 'secondary') {
        el.style.background = 'var(--action-ink)';
        el.style.color = '#fff';
        el.style.borderColor = 'var(--action-ink)';
      } else if (variant === 'ondark') el.style.background = 'var(--linen)';else if (variant === 'ghost') el.style.color = 'var(--action-hover)';
    };
    const hoverOut = e => {
      if (disabled) return;
      const el = e.currentTarget;
      el.style.background = variants[variant].background;
      el.style.color = variants[variant].color;
      if (variant === 'secondary') el.style.borderColor = 'var(--border-strong)';
    };
    const content = R.createElement(R.Fragment, null, children, arrow && R.createElement('span', {
      'aria-hidden': 'true'
    }, '→'));
    const Tag = href ? 'a' : 'button';
    const tagProps = href ? {
      href
    } : {
      type,
      disabled
    };
    return R.createElement(Tag, {
      ...tagProps,
      onClick,
      onMouseEnter: hoverIn,
      onMouseLeave: hoverOut,
      style: base,
      ...rest
    }, content);
  }
  function IconButton({
    icon,
    variant = 'accent',
    size = 40,
    label,
    href,
    onClick,
    style = {},
    ...rest
  }) {
    const variants = {
      accent: {
        background: 'var(--action)',
        color: '#fff'
      },
      primary: {
        background: 'var(--action)',
        color: '#fff'
      },
      ink: {
        background: 'var(--charcoal)',
        color: '#fff'
      },
      slate: {
        background: 'var(--slate)',
        color: '#fff'
      },
      outline: {
        background: 'transparent',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-strong)'
      }
    };
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      cursor: 'pointer',
      flexShrink: 0,
      transition: 'all var(--dur-base) var(--ease-cushion)',
      ...variants[variant],
      ...style
    };
    const Tag = href ? 'a' : 'button';
    const tagProps = href ? {
      href
    } : {
      type: 'button'
    };
    return R.createElement(Tag, {
      ...tagProps,
      'aria-label': label,
      onClick,
      style: base,
      ...rest
    }, R.createElement('span', {
      className: 'material-symbols-outlined',
      style: {
        fontSize: size * 0.55,
        lineHeight: 1
      }
    }, icon));
  }
  function Badge({
    children,
    tone = 'accent',
    dot = false,
    style = {},
    ...rest
  }) {
    const tones = {
      accent: 'var(--text-accent)',
      slate: 'var(--slate)',
      champagne: 'var(--champagne)',
      muted: 'var(--text-subtle)'
    };
    const dotColors = {
      accent: 'var(--olam-blue)',
      slate: 'var(--slate)',
      champagne: 'var(--champagne)',
      muted: 'var(--warm-grey-2)'
    };
    return R.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-label)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-label)',
        color: tones[tone],
        ...style
      },
      ...rest
    }, dot && R.createElement('span', {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: dotColors[tone],
        flexShrink: 0
      }
    }), children);
  }
  function Tag({
    children,
    variant = 'soft',
    style = {},
    ...rest
  }) {
    const variants = {
      soft: {
        background: 'var(--action-tint)',
        color: 'var(--olam-blue)',
        border: '1px solid transparent'
      },
      linen: {
        background: 'var(--linen)',
        color: 'var(--text-body)',
        border: '1px solid transparent'
      },
      solid: {
        background: 'var(--action)',
        color: '#fff',
        border: '1px solid transparent'
      },
      slate: {
        background: 'var(--slate)',
        color: '#fff',
        border: '1px solid transparent'
      },
      outline: {
        background: 'transparent',
        color: 'var(--text-body)',
        border: '1px solid var(--border-strong)'
      },
      glass: {
        background: 'rgba(255,255,255,0.9)',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-hairline)',
        backdropFilter: 'blur(4px)'
      }
    };
    return R.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-body)',
        fontSize: '0.625rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        ...variants[variant],
        ...style
      },
      ...rest
    }, children);
  }
  function ServiceCard({
    index,
    title,
    children,
    accent = 'blue',
    style = {},
    ...rest
  }) {
    const [hover, setHover] = R.useState(false);
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
      ...style
    };
    return R.createElement('div', {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: cardStyle,
      ...rest
    }, R.createElement('span', {
      style: {
        position: 'absolute',
        top: 0,
        left: 'var(--card-pad)',
        right: 'var(--card-pad)',
        height: 1,
        background: 'var(--border-champagne)',
        opacity: hover ? 0.9 : 0,
        transition: 'opacity var(--dur-base) var(--ease-cushion)'
      }
    }), R.createElement('div', {
      style: {
        position: 'relative'
      }
    }, index != null && R.createElement('span', {
      style: {
        display: 'block',
        fontFamily: 'var(--font-body)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: '0.18em',
        color: accentColor,
        marginBottom: 16
      }
    }, index), R.createElement('h3', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'var(--text-h3)',
        lineHeight: 1.1,
        margin: '0 0 12px',
        color: hover ? accentColor : 'var(--text-strong)',
        transition: 'color var(--dur-base) var(--ease-cushion)'
      }
    }, title), children && R.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--text-sm)',
        lineHeight: 1.65,
        color: 'var(--text-muted)'
      }
    }, children)));
  }
  function TestimonialCard({
    quote,
    name,
    detail,
    rating = 5,
    style = {},
    ...rest
  }) {
    const [hover, setHover] = R.useState(false);
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
      ...style
    };
    return R.createElement('div', {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: cardStyle,
      ...rest
    }, R.createElement('div', {
      style: {
        color: 'var(--rating)',
        letterSpacing: 3,
        fontSize: '0.9rem'
      }
    }, '★'.repeat(rating) + '☆'.repeat(5 - rating)), R.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontStyle: 'italic',
        fontSize: '1.5rem',
        lineHeight: 1.35,
        color: 'var(--text-strong)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, '“' + quote + '”'), R.createElement('div', {
      style: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, R.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: '0.875rem',
        color: 'var(--text-strong)'
      }
    }, name), detail && R.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: '0.75rem',
        color: 'var(--text-subtle)'
      }
    }, detail)));
  }
  function ResultCard({
    image,
    tag,
    title,
    caption,
    disclaimer,
    ratio = '3 / 4',
    style = {},
    ...rest
  }) {
    const [hover, setHover] = R.useState(false);
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
      ...style
    };
    const media = image ? R.createElement('img', {
      src: image,
      alt: title || '',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform var(--dur-slow) var(--ease-cushion)'
      }
    }) : R.createElement('div', {
      className: 'ph',
      style: {
        width: '100%',
        height: '100%'
      }
    }, 'Foto real de paciente');
    return R.createElement('div', {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: cardStyle,
      ...rest
    }, R.createElement('div', {
      style: {
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: ratio
      }
    }, media, tag && R.createElement('span', {
      style: {
        position: 'absolute',
        top: 16,
        left: 16,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(4px)',
        border: '1px solid var(--border-hairline)',
        color: 'var(--text-strong)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.5625rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)'
      }
    }, tag)), R.createElement('div', {
      style: {
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, R.createElement('h4', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.15,
        color: 'var(--text-strong)'
      }
    }, title), caption && R.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: '0.75rem',
        color: 'var(--text-subtle)'
      }
    }, caption), disclaimer && R.createElement('p', {
      style: {
        margin: '6px 0 0',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontStyle: 'italic',
        fontSize: '0.625rem',
        color: 'var(--warm-grey-2)'
      }
    }, disclaimer === true ? 'Los resultados varían según la persona.' : disclaimer)));
  }
  function Accordion({
    items = [],
    single = true,
    style = {},
    ...rest
  }) {
    const [open, setOpen] = R.useState(single ? -1 : []);
    const isOpen = i => single ? open === i : open.includes(i);
    const toggle = i => {
      if (single) setOpen(open === i ? -1 : i);else setOpen(open.includes(i) ? open.filter(x => x !== i) : [...open, i]);
    };
    return R.createElement('div', {
      style: {
        borderBottom: '1px solid var(--border-soft)',
        ...style
      },
      ...rest
    }, items.map((it, i) => R.createElement('div', {
      key: i,
      style: {
        borderTop: '1px solid var(--border-soft)'
      }
    }, R.createElement('button', {
      onClick: () => toggle(i),
      'aria-expanded': isOpen(i),
      style: {
        width: '100%',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '28px 0',
        textAlign: 'left'
      }
    }, R.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'var(--text-h3)',
        color: 'var(--text-strong)',
        lineHeight: 1.25
      }
    }, it.q), R.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: '1.6rem',
        color: 'var(--text-accent)',
        lineHeight: 1,
        flexShrink: 0,
        transform: isOpen(i) ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: 'transform var(--dur-base) var(--ease-cushion)'
      }
    }, '+')), R.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen(i) ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, R.createElement('div', {
      style: {
        overflow: 'hidden'
      }
    }, R.createElement('p', {
      style: {
        margin: 0,
        paddingBottom: 28,
        maxWidth: 640,
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--text-body)',
        lineHeight: 1.7,
        color: 'var(--text-muted)'
      }
    }, it.a))))));
  }
  const labelStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.6875rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'var(--text-subtle)'
  };
  function fieldBox(focused) {
    return {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: '0.9375rem',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: `1px solid ${focused ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '13px 16px',
      outline: 'none',
      boxShadow: focused ? '0 0 0 3px rgba(31,94,120,0.14)' : 'none',
      transition: 'border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease'
    };
  }
  function Labeled(label, required, id, control) {
    return R.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, label && R.createElement('label', {
      htmlFor: id,
      style: labelStyle
    }, label, required && R.createElement('span', {
      style: {
        color: 'var(--action)'
      }
    }, ' *')), control);
  }
  function Input({
    label,
    id,
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    disabled = false,
    style = {},
    ...rest
  }) {
    const [f, setF] = R.useState(false);
    return Labeled(label, required, id, R.createElement('input', {
      id,
      type,
      placeholder,
      value,
      onChange,
      required,
      disabled,
      onFocus: () => setF(true),
      onBlur: () => setF(false),
      style: {
        ...fieldBox(f),
        ...style
      },
      ...rest
    }));
  }
  function Textarea({
    label,
    id,
    placeholder,
    value,
    onChange,
    rows = 4,
    required = false,
    disabled = false,
    style = {},
    ...rest
  }) {
    const [f, setF] = R.useState(false);
    return Labeled(label, required, id, R.createElement('textarea', {
      id,
      rows,
      placeholder,
      value,
      onChange,
      required,
      disabled,
      onFocus: () => setF(true),
      onBlur: () => setF(false),
      style: {
        ...fieldBox(f),
        lineHeight: 1.5,
        resize: 'vertical',
        ...style
      },
      ...rest
    }));
  }
  function Select({
    label,
    id,
    options = [],
    value,
    onChange,
    placeholder,
    required = false,
    disabled = false,
    style = {},
    ...rest
  }) {
    const [f, setF] = R.useState(false);
    const opts = options.map(o => typeof o === 'string' ? {
      value: o,
      label: o
    } : o);
    const fieldStyle = {
      ...fieldBox(f),
      color: value ? 'var(--text-body)' : 'var(--text-subtle)',
      padding: '13px 40px 13px 16px',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer',
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236E7273' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center',
      ...style
    };
    return Labeled(label, required, id, R.createElement('select', {
      id,
      value,
      onChange,
      required,
      disabled,
      onFocus: () => setF(true),
      onBlur: () => setF(false),
      style: fieldStyle,
      ...rest
    }, placeholder && R.createElement('option', {
      value: '',
      disabled: true
    }, placeholder), opts.map(o => R.createElement('option', {
      key: o.value,
      value: o.value
    }, o.label))));
  }
  function PriceBlock({
    range = '$500 – $3,500',
    caption = 'Rango por zona de tratamiento',
    note,
    style = {},
    ...rest
  }) {
    return R.createElement('div', {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-brand)',
        boxShadow: 'var(--shadow-sm)',
        padding: 'var(--space-7)',
        minWidth: 300,
        ...style
      },
      ...rest
    }, R.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
        letterSpacing: 'var(--ls-tight)',
        color: 'var(--text-strong)'
      }
    }, range), R.createElement('p', {
      style: {
        margin: '10px 0 0',
        fontFamily: 'var(--font-body)',
        fontSize: '0.625rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--text-subtle)'
      }
    }, caption), note && R.createElement('p', {
      style: {
        margin: '22px 0 0',
        maxWidth: 320,
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, note));
  }
  const mine = {
    Button,
    IconButton,
    Badge,
    Tag,
    ServiceCard,
    TestimonialCard,
    ResultCard,
    Accordion,
    Input,
    Textarea,
    Select,
    PriceBlock
  };
  window.OLAMMedSpaDesignSystem_e5ad93 = Object.assign({}, mine, window.OLAMMedSpaDesignSystem_e5ad93 || {});
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ResultCard = __ds_scope.ResultCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.PriceBlock = __ds_scope.PriceBlock;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();

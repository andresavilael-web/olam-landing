/* Olam Med Spa Website UI Kit — Top: Hero, Qualification, Medical Leadership */
const { Badge, Button: Btn } = window.OLAMMedSpaDesignSystem_e5ad93;

function Hero() {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(to bottom, #fff, var(--surface-linen))', paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-10)' }}>
      <div style={{ position: 'absolute', top: '-12%', right: '-6%', width: '42%', height: '60%', background: 'var(--mist-5)', filter: 'blur(120px)', borderRadius: '50%', opacity: 0.9, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Badge tone="accent" style={{ marginBottom: 18 }}>
            <L en="Non-invasive skin tightening & lifting" es="Tensado y lifting no invasivo" />
          </Badge>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h1)', lineHeight: 1.02, letterSpacing: 'var(--ls-display)', margin: '0 0 22px', color: 'var(--text-strong)' }}>
            <L en={<>Tighten and lift your skin, <span className="em">naturally.</span></>}
               es={<>Tensa y levanta tu piel, <span className="em">con naturalidad.</span></>} />
          </h1>
          <p className="lead" style={{ maxWidth: 470, margin: '0 0 24px' }}>
            <L en="Firmer, lifted skin in 60–90 days — guided by a personalized plan and 3D skin diagnosis. 35,000+ procedures performed. Featured in Forbes & Univisión."
               es="Piel más firme y levantada en 60 a 90 días — guiada por un plan personalizado y diagnóstico 3D. Más de 35,000 procedimientos. Destacadas en Forbes y Univisión." />
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <span style={{ color: 'var(--rating)', letterSpacing: 2 }}>★★★★★</span>
            <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>4.9</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--warm-grey-2)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--text-muted)' }}><L en="Google — 400+ reviews" es="Google — 400+ reseñas" /></span>
          </div>
          <Btn variant="primary" size="lg" href="#reserve" arrow>
            <L en="Book my 3D diagnostic consultation" es="Agenda mi diagnóstico 3D" />
          </Btn>
          <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: '0.6875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-subtle)' }}>
            <span><L en="Non-invasive · no downtime" es="No invasivo · sin downtime" /></span>
            <span style={{ color: 'var(--champagne)' }}>|</span>
            <span><L en="Financing from $45/mo" es="Financiamiento desde $45/mes" /></span>
          </div>
        </div>
        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)', aspectRatio: '4 / 5' }}>
          <div className="ph" style={{ width: '100%', height: '100%' }}>Foto editorial — rostro real,<br/>luz natural suave</div>
        </div>
      </div>
    </section>
  );
}

function QualCard({ tone, heading, items }) {
  const isPos = tone === 'pos';
  const mark = isPos ? 'var(--olam-blue)' : 'var(--slate)';
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-linen)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-brand)', padding: 'var(--space-6)' }}>
      <Badge tone={isPos ? 'accent' : 'slate'} dot style={{ marginBottom: 22, position: 'relative' }}>{heading}</Badge>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 18, position: 'relative' }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, fontSize: 'var(--text-sm)', fontWeight: 300, lineHeight: 1.6, color: 'var(--text-body)' }}>
            <span style={{ color: mark, fontWeight: 600 }}>{isPos ? '✓' : '—'}</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Qualification() {
  return (
    <section className="band" style={{ background: '#fff' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56 }}>
        <div>
          <Badge tone="accent" style={{ marginBottom: 16 }}><L en="Honest first" es="Honestidad primero" /></Badge>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)', marginBottom: 18 }}><L en={<>Is this<br/><span className="em">for you?</span></>} es={<>¿Esto es<br/><span className="em">para ti?</span></>} /></h2>
          <p style={{ margin: 0, fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.65 }}>
            <L en="We care more about our patients than our sales. So here's the honest filter — before you book."
               es="Cuidamos más a nuestros pacientes que a nuestras ventas. Por eso, el filtro honesto — antes de que agendes." />
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <QualCard tone="pos" heading={<L en="A great fit if" es="Ideal para ti si" />} items={[
            <L en="You notice early loss of firmness along your jawline, neck or cheeks." es="Notas pérdida temprana de firmeza en el óvalo facial, cuello o pómulos." />,
            <L en="You're 35–65 and want to act gradually, before anything surgical." es="Tienes entre 35 y 65 y quieres actuar de forma gradual, antes de una cirugía." />,
            <L en="You want natural results — to look like yourself, refreshed." es="Buscas un resultado natural — verte como tú, renovada." />,
          ]} />
          <QualCard tone="neg" heading={<L en="Maybe not yet if" es="Quizá aún no si" />} items={[
            <L en="You're after a dramatic, filtered look rather than a natural one." es="Buscas un look dramático y filtrado más que uno natural." />,
            <L en="You expect a single session to change everything overnight." es="Esperas que una sola sesión lo cambie todo de un día para otro." />,
          ]} />
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const row = (txt) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 0', borderBottom: '1px solid var(--border-soft)' }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--olam-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-strong)' }}>{txt}</span>
    </div>
  );
  return (
    <section className="band" style={{ background: 'var(--surface-mist)', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Badge tone="accent" style={{ marginBottom: 16 }}><L en="Medical Leadership" es="Liderazgo médico" /></Badge>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)', marginBottom: 22 }}><L en={<>Collective expertise. <br/><span className="em">Not a personality.</span></>} es={<>Excelencia colectiva. <br/><span className="em">No una personalidad.</span></>} /></h2>
          <p style={{ margin: '0 0 16px', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.7, fontSize: 'var(--text-lead)' }}>
            <L en={<>Every Olam treatment plan is personally reviewed and supervised by our <strong style={{ color: 'var(--text-body)', fontWeight: 500 }}>medical director</strong> — a team with <strong style={{ color: 'var(--text-body)', fontWeight: 500 }}>30+ years of combined experience</strong> in aesthetic medicine.</>}
               es={<>Cada plan de tratamiento lo revisa y supervisa personalmente nuestro <strong style={{ color: 'var(--text-body)', fontWeight: 500 }}>director médico</strong> — un equipo con <strong style={{ color: 'var(--text-body)', fontWeight: 500 }}>más de 30 años de experiencia combinada</strong>.</>} />
          </p>
          <p style={{ margin: 0, fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.7, fontSize: 'var(--text-lead)' }}>
            <L en={<>We've performed <strong style={{ color: 'var(--text-body)', fontWeight: 500 }}>35,000+ procedures</strong>. This isn't a rotating-staff franchise — it's a medical institution that puts the person before the procedure.</>}
               es={<>Hemos realizado <strong style={{ color: 'var(--text-body)', fontWeight: 500 }}>más de 35,000 procedimientos</strong>. No somos una franquicia de personal rotativo — somos una institución médica: la persona antes que el procedimiento.</>} />
          </p>
        </div>
        <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', minHeight: 460, boxShadow: 'var(--shadow-2xl)', border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="ph" style={{ position: 'absolute', inset: 0 }}>Foto del equipo Olam</div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #fff 8%, rgba(255,255,255,0.82) 45%, transparent)' }} />
          <div style={{ position: 'relative', padding: '0 40px 32px' }}>
            {row(<L en="Supervised." es="Supervisado." />)}
            {row(<L en="Licensed." es="Licenciado." />)}
            {row(<L en="Accountable." es="Responsable." />)}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Qualification, Leadership });

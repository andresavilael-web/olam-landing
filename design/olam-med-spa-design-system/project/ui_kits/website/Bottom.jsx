/* Olam Med Spa Website UI Kit — Bottom: Results, 3D consult (dark), Pricing */
const { ResultCard, PriceBlock, Badge: Eb, Button: B2 } = window.OLAMMedSpaDesignSystem_e5ad93;

function Results() {
  return (
    <section className="band" style={{ background: '#fff' }}>
      <div className="wrap">
        <Eb tone="accent" style={{ marginBottom: 16 }}><L en="Realistic expectations" es="Expectativas reales" /></Eb>
        <h2 className="h" style={{ fontSize: 'var(--text-h2)', marginBottom: 32 }}><L en={<>What real results <span className="em">look like.</span></>} es={<>Cómo se ven <span className="em">los resultados reales.</span></>} /></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, marginBottom: 44 }}>
          {[['01', 'Visible firmness on the jaw and neck, often starting around week 4–6.', 'Firmeza visible en óvalo y cuello, a menudo desde la semana 4 a 6.'],
            ['02', 'Clearer definition that builds gradually over 2–6 months.', 'Definición más clara que se construye de forma gradual en 2 a 6 meses.'],
            ['03', 'Gradual collagen support — the kind of change friends notice quietly.', 'Soporte de colágeno gradual — el tipo de cambio que las amigas notan sin saber por qué.'],
            ['04', 'Natural-looking — never overdone, frozen or "filtered".', 'Aspecto natural — sin exceso, congelado ni "filtrado".']].map(([n, en, es]) => (
            <div key={n} style={{ display: 'flex', gap: 16 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.25rem', color: 'var(--olam-blue)', letterSpacing: '0.05em', marginTop: 2 }}>{n}</span>
              <p style={{ margin: 0, fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.65 }}><L en={en} es={es} /></p>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          <ResultCard tag="ÓVALO · SEM 12" title={<L en="Jawline contour" es="Contorno del óvalo" />} caption={<L en="Week 12 vs baseline" es="Semana 12 vs inicio" />} disclaimer={true} />
          <ResultCard tag="TERCIO MEDIO" title={<L en="Cheek elevation" es="Elevación del pómulo" />} caption={<L en="Clinical outcome" es="Resultado clínico" />} disclaimer={true} />
          <ResultCard tag="SESIÓN" title={<L en="Ultrasound session" es="Sesión de ultrasonido" />} caption={<L en="In clinic" es="En clínica" />} />
          <ResultCard tag="COLÁGENO" title={<L en="Natural contour" es="Contorno natural" />} caption={<L en="Serene radiance" es="Radiación serena" />} disclaimer={true} />
        </div>
      </div>
    </section>
  );
}

function Consult() {
  const item = (n, en, es, sen, ses) => (
    <div style={{ display: 'flex', gap: 22, paddingBottom: 28, borderBottom: '1px solid var(--border-on-dark)' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.6rem', color: 'var(--champagne)' }}>{n}</span>
      <div>
        <h4 style={{ margin: '0 0 6px', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.0625rem', color: '#fff' }}><L en={en} es={es} /></h4>
        <p style={{ margin: 0, fontWeight: 300, fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', lineHeight: 1.6 }}><L en={sen} es={ses} /></p>
      </div>
    </div>
  );
  return (
    <section className="band" style={{ background: 'var(--charcoal)', color: '#fff' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
        <div>
          <span style={{ fontSize: 'var(--text-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--ls-label)', color: 'var(--champagne)' }}><L en="The 3D diagnostic consultation" es="La consulta con diagnóstico 3D" /></span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h2)', lineHeight: 1.05, margin: '18px 0 28px' }}><L en={<>A medical session. <br/><span style={{ fontStyle: 'italic', color: 'var(--mist-blue)' }}>Not a sales pitch.</span></>} es={<>Una sesión médica. <br/><span style={{ fontStyle: 'italic', color: 'var(--mist-blue)' }}>No un pitch de ventas.</span></>} /></h2>
          <p style={{ margin: '0 0 16px', fontWeight: 300, fontSize: 'var(--text-lead)', lineHeight: 1.7, color: 'var(--text-on-dark-muted)' }}><L en="$100 is what it takes to do the work properly: a 3D skin analysis, a written plan reviewed by our medical director, exact pricing in writing, and a realistic view of what to expect." es="$100 es lo que cuesta hacer el trabajo bien: un análisis 3D de la piel, un plan escrito y revisado por nuestro director médico, precio exacto por escrito y una visión realista de qué esperar." /></p>
          <p style={{ margin: '0 0 36px', fontWeight: 300, fontSize: 'var(--text-lead)', lineHeight: 1.7, color: 'var(--text-on-dark-muted)' }}><L en="Move forward within 30 days and your $100 is credited to treatment. If it's not right for you, the plan is yours to keep." es="Si avanzas en 30 días, tus $100 se acreditan al tratamiento. Si no es para ti, el plan es tuyo." /></p>
          <B2 variant="ondark" size="lg" href="#reserve" arrow><L en="Book my consultation" es="Agenda mi consulta" /></B2>
        </div>
        <div style={{ paddingLeft: 72, borderLeft: '1px solid var(--border-on-dark)' }}>
          <span style={{ display: 'block', fontSize: 'var(--text-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--ls-label)', color: 'var(--champagne)', marginBottom: 36 }}><L en="What your consultation includes" es="Qué incluye tu consulta" /></span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {item('01', '3D skin analysis', 'Análisis 3D de la piel', 'An objective reading of your skin — laxity, texture and structure — not a visual guess.', 'Una lectura objetiva de tu piel — flacidez, textura y estructura — sin adivinanzas.')}
            {item('02', 'Personalized plan, in writing', 'Plan personalizado por escrito', 'Technology, area and sequence — reviewed and signed off by our medical director.', 'Tecnología, zona y secuencia — revisado y firmado por nuestro director médico.')}
            {item('03', 'Exact pricing, in writing', 'Precio exacto por escrito', 'Before any decision. No upselling on the day of treatment.', 'Antes de decidir. Sin ventas de más el día del tratamiento.')}
            {item('04', 'A realistic timeline', 'Una línea de tiempo realista', 'What to expect at months 2, 4 and 6 — results vary by person.', 'Qué esperar a los meses 2, 4 y 6 — los resultados varían según la persona.')}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="band" style={{ background: 'var(--surface-linen)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
        <div>
          <Eb tone="accent" style={{ marginBottom: 16 }}><L en="Price transparency" es="Transparencia de precios" /></Eb>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)' }}><L en={<>Real prices. <span className="em">No hidden estimates.</span></>} es={<>Precios reales. <span className="em">Sin estimados escondidos.</span></>} /></h2>
        </div>
        <PriceBlock range="$500 – $3,500" caption={<L en="Range per treatment area" es="Rango por zona de tratamiento" />}
          note={<L en={<>Financing from <strong style={{ fontWeight: 500 }}>$45/mo</strong>. Your exact price is confirmed in writing after your 3D diagnosis.</>} es={<>Financiamiento desde <strong style={{ fontWeight: 500 }}>$45/mes</strong>. Tu precio exacto se confirma por escrito tras tu diagnóstico 3D.</>} />} />
      </div>
    </section>
  );
}

Object.assign(window, { Results, Consult, Pricing });

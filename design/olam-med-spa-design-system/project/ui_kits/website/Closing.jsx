/* Olam Med Spa Website UI Kit — Closing: FAQ + Reservation form */
const { Accordion, Input, Select, Textarea, Button: B3, Badge: Eb3 } = window.OLAMMedSpaDesignSystem_e5ad93;

function FAQ() {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const items = [
    { en: ['Does it hurt?', 'For most treatments we apply topical numbing beforehand. Patients describe warmth or a quick tingling, not sharp pain — and you can return to your day as usual.'],
      es: ['¿Duele el tratamiento?', 'Para la mayoría de tratamientos aplicamos anestesia tópica antes. Las pacientes describen calor o un cosquilleo breve, no dolor agudo — y puedes volver a tu día con normalidad.'] },
    { en: ['When will I see results?', 'Initial firmness is often visible between weeks 4–6, and improvement builds gradually over 2–6 months. It\'s a natural process — which is part of why it looks like you. Results vary by person.'],
      es: ['¿Cuándo veré resultados?', 'La firmeza inicial suele notarse entre las semanas 4 y 6, y la mejora avanza de forma gradual durante 2 a 6 meses. Es un proceso natural — por eso se ve como tú. Los resultados varían según la persona.'] },
    { en: ['Why choose Olam over a chain med-spa?', 'Your plan is reviewed by our medical director, treatments are performed by licensed professionals who don\'t rotate every few months, and you receive a complete follow-up. You\'re choosing medical supervision and warmth — not a room with a machine.'],
      es: ['¿Por qué elegir Olam frente a una cadena?', 'Tu plan lo revisa nuestro director médico, los tratamientos los realizan profesionales licenciados que no rotan cada pocos meses, y recibes un seguimiento completo. Eliges supervisión médica y calidez — no un cuarto con una máquina.'] },
    { en: ['What if it isn\'t right for me?', 'Your 3D diagnostic consultation is designed to find that out before we recommend anything. If a treatment isn\'t right for you, we\'ll tell you clearly — and you keep the written analysis, with no pressure.'],
      es: ['¿Y si no es lo adecuado para mí?', 'Tu consulta con diagnóstico 3D está diseñada para averiguarlo antes de recomendar nada. Si un tratamiento no es para ti, te lo decimos con claridad — y te llevas el análisis por escrito, sin presión.'] },
    { en: ['It\'s my first time — is it safe?', 'Every plan is supervised by our medical director, using technology cleared for its use, with a complete follow-up protocol and direct contact if you have questions.'],
      es: ['Es mi primera vez — ¿es seguro?', 'Cada plan está supervisado por nuestro director médico, con tecnología autorizada para su uso, un protocolo de seguimiento completo y contacto directo si tienes dudas.'] },
  ].map((it) => ({ q: it[lang][0], a: it[lang][1] }));

  return (
    <section className="band" style={{ background: 'var(--surface-mist)' }} id="faq">
      <div className="wrap-narrow">
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <Eb3 tone="accent" style={{ marginBottom: 16 }}><L en="Common questions" es="Preguntas frecuentes" /></Eb3>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)' }}><L en={<>Questions <span className="em">real patients</span> ask us.</>} es={<>Preguntas que <span className="em">pacientes reales</span> nos hacen.</>} /></h2>
        </div>
        <Accordion items={items} />
      </div>
    </section>
  );
}

function Reserve() {
  const benefit = (en, es) => (
    <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start', fontWeight: 300, fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.85)' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
      <span><L en={en} es={es} /></span>
    </li>
  );
  return (
    <section className="band" style={{ background: 'var(--slate)' }} id="reserve">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 56, alignItems: 'start' }}>
        <div>
          <span style={{ fontSize: 'var(--text-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--ls-label)', color: 'rgba(255,255,255,0.85)' }}><L en="Reserve your consultation" es="Reserva tu consulta" /></span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-h2)', lineHeight: 1.05, color: '#fff', margin: '18px 0 24px' }}><L en={<>One honest conversation.<br/><span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>Then you decide.</span></>} es={<>Una conversación honesta.<br/><span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>Tú decides después.</span></>} /></h2>
          <p style={{ margin: '0 0 28px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}><L en="We'll reach out within 5 minutes during business hours to confirm a time that works for you." es="Te contactaremos en 5 minutos en horario laboral para confirmar un horario que te funcione." /></p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {benefit('$100 credited to your first treatment within 30 days', '$100 acreditables a tu primer tratamiento en 30 días')}
            {benefit('A written treatment plan you keep, regardless', 'Un plan de tratamiento por escrito, pase lo que pase')}
            {benefit('Financing options from $45/mo', 'Opciones de financiamiento desde $45/mes')}
            {benefit('Supervised by our medical director', 'Supervisado por nuestro director médico')}
          </ul>
        </div>
        <div style={{ background: '#fff', borderRadius: 'var(--radius-brand-lg)', padding: 36, boxShadow: 'var(--shadow-2xl)' }}>
          <form onSubmit={(e) => { e.preventDefault(); e.target.reset(); alert('Gracias — te contactaremos en 5 minutos en horario laboral.'); }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <Input label={<L en="First name" es="Nombre" />} id="fn" placeholder="Jane" required />
            <Input label={<L en="Last name" es="Apellido" />} id="ln" placeholder="Doe" required />
            <Input label={<L en="Phone" es="Teléfono" />} id="ph" type="tel" placeholder="+1 (555) 000-0000" required />
            <Input label="Email" id="em" type="email" placeholder="you@email.com" required />
            <div style={{ gridColumn: '1 / -1' }}>
              <Select label={<L en="What would you like to improve?" es="¿Qué te gustaría mejorar?" />} id="cn" placeholder={lang0()}
                options={['Jawline & neck', 'Cheeks & mid-face', 'Skin texture / chest', 'Brow & eye area', 'Post-weight-loss laxity', 'Not sure — help me decide']} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <Textarea label={<L en="Anything else we should know?" es="¿Algo más que debamos saber?" />} id="nt" rows={3} placeholder="" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <B3 variant="primary" size="lg" type="submit" arrow style={{ width: '100%', justifyContent: 'center' }}><L en="Book my 3D diagnostic consultation" es="Agenda mi diagnóstico 3D" /></B3>
            </div>
            <p style={{ gridColumn: '1 / -1', margin: 0, fontWeight: 300, fontSize: '0.6875rem', fontStyle: 'italic', color: 'var(--text-subtle)', textAlign: 'center' }}>
              <L en="Non-invasive treatments. Individual results may vary." es="Tratamientos no invasivos. Los resultados varían según la persona." />
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function lang0() {
  return (document.documentElement.getAttribute('data-lang') || 'en') === 'es' ? 'Elige una zona' : 'Select an area';
}

Object.assign(window, { FAQ, Reserve });

/* Olam Med Spa Website UI Kit — Middle: What we treat + Technologies tabs */
const { ServiceCard, Badge: Eyebrow } = window.OLAMMedSpaDesignSystem_e5ad93;

const CONCERNS = [
  { en: ['Jawline definition', 'The first place skin laxity tends to show. We address it with a personalized plan, not a single technique.'], es: ['Definición del óvalo facial', 'El primer lugar donde suele notarse la flacidez. Lo abordamos con un plan personalizado, no con una sola técnica.'] },
  { en: ['Neck firmness', 'Loss of tone in the neck and under the chin — often visible in photos before the mirror catches it.'], es: ['Firmeza del cuello', 'Pérdida de tono en el cuello y bajo el mentón — visible en fotos antes que en el espejo.'] },
  { en: ['Cheeks & mid-face', 'Gradual descent of the mid-face. We help restore a softer, lifted balance — naturally.'], es: ['Pómulos y tercio medio', 'Descenso gradual del tercio medio. Ayudamos a recuperar un equilibrio más suave y elevado — con naturalidad.'] },
  { en: ['Skin texture & crepiness', 'Surface texture and fine crepey skin on the neck and chest. A different protocol than facial laxity.'], es: ['Textura y piel crepé', 'Textura superficial y piel crepé fina en cuello y escote. Un protocolo distinto al de la flacidez facial.'] },
  { en: ['Post-weight-loss laxity', "Skin that didn't fully retract after a weight change. We plan deeper, gradual collagen support."], es: ['Flacidez post pérdida de peso', 'Piel que no se retrajo del todo tras un cambio de peso. Planeamos un soporte de colágeno gradual y profundo.'] },
  { en: ['Brow & eye area', 'A subtle heaviness around the brow and eyes over time. Often improvable without surgery.'], es: ['Cejas y mirada', 'Una ligera pesadez en cejas y ojos con el tiempo. A menudo mejorable sin cirugía.'] },
];

function Treat() {
  return (
    <section className="band" style={{ background: '#fff' }}>
      <div className="wrap">
        <div style={{ marginBottom: 44 }}>
          <Eyebrow tone="accent" style={{ marginBottom: 16 }}><L en="What we treat" es="Qué tratamos" /></Eyebrow>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)' }}><L en={<>Six concerns. <span className="em">One diagnostic path.</span></>} es={<>Seis inquietudes. <span className="em">Un camino diagnóstico.</span></>} /></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {CONCERNS.map((p, i) => (
            <ServiceCard key={i} index={String(i + 1).padStart(2, '0')} title={<L en={p.en[0]} es={p.es[0]} />}>
              <L en={p.en[1]} es={p.es[1]} />
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const TECH = {
  ultherapy: {
    name: 'Ultherapy®', kicker: { en: 'Deep ultrasound lifting', es: 'Lifting de ultrasonido profundo' },
    body: { en: "Micro-focused ultrasound reaches the deeper support layer to gently stimulate the skin's own collagen — without breaking the surface.", es: 'El ultrasonido microfocalizado llega a la capa de soporte profunda para estimular suavemente el colágeno propio de la piel — sin dañar la superficie.' },
    points: [{ en: 'Well-suited for jawline and brow areas', es: 'Indicado para óvalo facial y cejas' }, { en: 'Results build gradually over 2–6 months', es: 'Los resultados se construyen de forma gradual en 2 a 6 meses' }],
    meta: [['Target', 'Deep support layer'], ['Duration', '60–90 minutes'], ['Downtime', 'None'], ['Comfort', 'Topical numbing']],
  },
  rf: {
    name: 'RF Microneedling', kicker: { en: 'Radiofrequency & microneedling', es: 'Radiofrecuencia y microagujas' },
    body: { en: 'Microneedling paired with radiofrequency at precise depths to support the skin and improve texture and crepiness.', es: 'Microagujas combinadas con radiofrecuencia a profundidades precisas para apoyar la piel y mejorar textura y piel crepé.' },
    points: [{ en: 'Great for neck texture and fine lines', es: 'Ideal para textura del cuello y líneas finas' }, { en: 'Supports density in maturing skin', es: 'Apoya la densidad en piel madura' }],
    meta: [['Target', 'Dermis & surface'], ['Duration', '45–60 minutes'], ['Downtime', '1–2 days redness'], ['Comfort', 'Topical numbing']],
  },
  agnes: {
    name: 'Agnes RF™', kicker: { en: 'Targeted precision', es: 'Precisión dirigida' },
    body: { en: 'Precision radiofrequency to address targeted areas such as under-eye fullness and the jawline, with careful, gradual technique.', es: 'Radiofrecuencia de precisión para zonas específicas como bolsas bajo los ojos y el óvalo facial, con una técnica cuidadosa y gradual.' },
    points: [{ en: 'Pinpoint approach for small areas', es: 'Enfoque puntual para zonas pequeñas' }, { en: 'Tailored to your diagnosis', es: 'Ajustado a tu diagnóstico' }],
    meta: [['Target', 'Targeted zones'], ['Duration', '30–45 minutes'], ['Downtime', '2–3 days swelling'], ['Comfort', 'Local / topical']],
  },
};

function Technologies() {
  const [tab, setTab] = React.useState('ultherapy');
  const t = TECH[tab];
  const tabBtn = (id, label) => {
    const on = tab === id;
    return (
      <button key={id} onClick={() => setTab(id)} style={{
        padding: '12px 24px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
        border: `1px solid ${on ? 'var(--olam-blue)' : 'var(--border-strong)'}`,
        background: on ? 'var(--olam-blue)' : 'transparent', color: on ? '#fff' : 'var(--text-subtle)',
        fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase',
        letterSpacing: '0.1em', transition: 'all var(--dur-base) var(--ease-cushion)',
      }}>{label}</button>
    );
  };
  return (
    <section className="band" style={{ background: '#fff' }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, marginBottom: 40 }}>
          <Eyebrow tone="accent" style={{ marginBottom: 16 }}><L en="The category, not one machine" es="La categoría, no una sola máquina" /></Eyebrow>
          <h2 className="h" style={{ fontSize: 'var(--text-h2)', marginBottom: 18 }}><L en={<>Not one treatment. <span className="em">The right treatment</span> for your skin.</>} es={<>No un tratamiento. <span className="em">El tratamiento correcto</span> para tu piel.</>} /></h2>
          <p style={{ margin: 0, fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.65 }}><L en="Skin tightening isn't a single device — it's a category. What works for your neck may not be right for your jawline." es="La firmeza no es una sola máquina — es una categoría. Lo que funciona para tu cuello puede no ser lo correcto para tu óvalo facial." /></p>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', borderBottom: '1px solid var(--border-hairline)', paddingBottom: 24, marginBottom: 40, flexWrap: 'wrap' }}>
          {tabBtn('ultherapy', 'Ultherapy')}{tabBtn('rf', 'RF Microneedling')}{tabBtn('agnes', 'Agnes RF')}
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-brand-lg)', boxShadow: 'var(--shadow-card)', padding: 40, display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 36, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--olam-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}><L en={t.kicker.en} es={t.kicker.es} /></span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '2.25rem', margin: '10px 0 16px', color: 'var(--text-strong)' }}>{t.name}</h3>
            <p style={{ margin: '0 0 20px', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.65 }}><L en={t.body.en} es={t.body.es} /></p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {t.points.map((p, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 'var(--text-sm)', fontWeight: 400, color: 'var(--text-body)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--olam-blue)', flexShrink: 0 }} /><L en={p.en} es={p.es} />
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--surface-linen)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-brand)', padding: 28 }}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-strong)', margin: '0 0 16px', paddingBottom: 12, borderBottom: '1px solid var(--border-champagne)' }}><L en="Clinical overview" es="Resumen clínico" /></h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              {t.meta.map(([k, v]) => (
                <div key={k}>
                  <p style={{ margin: '0 0 4px', fontSize: '0.625rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-subtle)' }}>{k}</p>
                  <p style={{ margin: 0, fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-strong)' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 48, maxWidth: 780 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.875rem', lineHeight: 1.3, margin: 0, color: 'var(--text-strong)' }}>
            <L en={<>Which one is right for you is decided in your 3D diagnostic consultation — <span className="em">not by Google, not by guessing, and never by upselling.</span></>}
               es={<>Cuál es la correcta se decide en tu consulta con diagnóstico 3D — <span className="em">no por Google, no adivinando, y nunca vendiéndote de más.</span></>} />
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Treat, Technologies });

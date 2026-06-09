const steps = [
  ['01', 'Diagnóstico', 'Entendo seu negócio, público, serviços e o objetivo principal da página.'],
  ['02', 'Estrutura', 'Organizo as seções, chamadas, provas de confiança e caminho de contato.'],
  ['03', 'Design e código', 'Crio a interface responsiva em React com visual profissional e performance.'],
  ['04', 'Entrega', 'Reviso, ajusto detalhes e deixo o site pronto para publicação.'],
]

export default function Process() {
  return (
    <section id="processo" className="bg-emerald-950 py-24 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-lime-200">Processo</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Fluxo simples e direto, focado em resultado.
            </h2>
          </div>

          <div className="grid gap-4">
            {steps.map(([number, title, text]) => (
              <div key={number} className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:grid-cols-[auto_1fr]">
                <span className="text-3xl font-black text-lime-200">{number}</span>
                <div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-stone-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

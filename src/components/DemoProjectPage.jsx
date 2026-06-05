import { ArrowLeft, CheckCircle2, Mail, MessageCircle, Star } from 'lucide-react'
import { projects } from '../data/projects'

const accentStyles = {
  emerald: {
    badge: 'bg-emerald-400 text-zinc-950',
    text: 'text-emerald-300',
    button: 'bg-emerald-400 text-zinc-950 hover:bg-emerald-300',
    border: 'border-emerald-300/25',
    soft: 'bg-emerald-300/10',
  },
  pink: {
    badge: 'bg-pink-300 text-zinc-950',
    text: 'text-pink-200',
    button: 'bg-pink-300 text-zinc-950 hover:bg-pink-200',
    border: 'border-pink-200/25',
    soft: 'bg-pink-300/10',
  },
  indigo: {
    badge: 'bg-indigo-300 text-zinc-950',
    text: 'text-indigo-200',
    button: 'bg-indigo-300 text-zinc-950 hover:bg-indigo-200',
    border: 'border-indigo-200/25',
    soft: 'bg-indigo-300/10',
  },
  cyan: {
    badge: 'bg-cyan-300 text-zinc-950',
    text: 'text-cyan-200',
    button: 'bg-cyan-300 text-zinc-950 hover:bg-cyan-200',
    border: 'border-cyan-200/25',
    soft: 'bg-cyan-300/10',
  },
}

export default function DemoProjectPage({ slug }) {
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    window.history.replaceState(null, '', '/')
    return null
  }

  const styles = accentStyles[project.accent]

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 transition hover:text-white">
            <ArrowLeft size={18} />
            Voltar ao portfólio
          </a>
          <span className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${styles.badge}`}>
            Projeto fictício
          </span>
        </div>
      </header>

      <section className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className={`text-sm font-black uppercase tracking-[0.24em] ${styles.text}`}>
            {project.sector}
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {project.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {project.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/554733336608"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-black transition hover:-translate-y-0.5 ${styles.button}`}
            >
              <MessageCircle size={18} />
              {project.cta}
            </a>
            <a
              href="mailto:edudiasbianchini@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              <Mail size={18} />
              Enviar e-mail
            </a>
          </div>
        </div>

        <div className={`rounded-2xl border ${styles.border} ${styles.soft} p-5`}>
          <div className="rounded-xl border border-white/10 bg-zinc-950/80 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-zinc-400">Cliente demo</p>
                <h2 className="mt-2 text-3xl font-black text-white">{project.brand}</h2>
              </div>
              <Star className={styles.text} size={28} />
            </div>
            <p className="mt-6 leading-7 text-zinc-300">{project.audience}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className={styles.text} size={20} />
                  <p className="mt-3 text-sm font-bold text-white">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-900/35 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className={`text-sm font-black uppercase tracking-[0.24em] ${styles.text}`}>
              Estrutura da página
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Uma landing page completa para gerar confiança e ação.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.services.map((service) => (
              <div key={service} className="rounded-xl border border-white/10 bg-zinc-950/70 p-6">
                <CheckCircle2 className={styles.text} size={24} />
                <h3 className="mt-4 text-lg font-bold text-white">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Bloco comercial com copy clara, prova de valor e caminho direto para conversão.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="codigo" className="section-shell py-20">
        <div className="mb-8">
          <p className={`text-sm font-black uppercase tracking-[0.24em] ${styles.text}`}>
            Código e stack
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Implementação demonstrativa em React e Tailwind CSS.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {project.tags.map((tag) => (
            <div key={tag} className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
              <p className="text-sm font-bold text-zinc-500">Tecnologia</p>
              <h3 className="mt-3 text-xl font-black text-white">{tag}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Usada para criar uma interface rápida, responsiva e com manutenção simples.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className={`rounded-2xl border ${styles.border} bg-white/[0.03] p-8 text-center sm:p-10`}>
          <h2 className="text-3xl font-black text-white">Gostou desse modelo?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Esse é um projeto fictício criado para demonstrar como seu negócio poderia aparecer online
            com design profissional, performance e foco em contato.
          </p>
          <a
            href="https://wa.me/554733336608"
            target="_blank"
            rel="noreferrer"
            className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-black transition hover:-translate-y-0.5 ${styles.button}`}
          >
            <MessageCircle size={18} />
            Quero um site assim
          </a>
        </div>
      </section>
    </main>
  )
}

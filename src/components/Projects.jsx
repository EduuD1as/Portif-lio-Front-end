import { ArrowUpRight, Code, Eye } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projetos" className="section-shell py-24">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
            Projetos em destaque
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black text-white sm:text-4xl">
            Experiências digitais pensadas para segmentos reais de mercado.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-zinc-400">
          Cada card representa uma solução comercial: posicionamento profissional,
          performance e caminhos claros para contato.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-zinc-900"
          >
            <div className="h-44 border-b border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.22),rgba(79,70,229,0.2),rgba(255,255,255,0.04))] p-5">
              <div className="flex h-full flex-col justify-between">
                <span className="w-fit rounded-full bg-zinc-950/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                  Projeto 0{index + 1}
                </span>
                <ArrowUpRight
                  className="self-end text-white/70 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-200"
                  size={34}
                />
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-emerald-300">{project.sector}</p>
              <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-4 min-h-24 text-base leading-7 text-zinc-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`/projetos/${project.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-zinc-950 transition hover:bg-emerald-200"
                >
                  <Eye size={17} />
                  Ver Prévia
                </a>
                <a
                  href={`/projetos/${project.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-bold text-white transition hover:border-emerald-300/50 hover:bg-white/5"
                >
                  <Code size={17} />
                  Ver Código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

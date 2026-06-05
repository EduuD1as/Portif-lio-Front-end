import { ArrowUpRight, Eye } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projetos" className="section-shell py-24">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
            Mostruário
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black text-white sm:text-4xl">
            Experiências digitais pensadas para segmentos reais de mercado.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-zinc-400">
          Cada card representa um modelo de site, com foco em um segmento de mercado, destacando o design simples e moderno.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-lg border border-white/10 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-zinc-900"
          >
            <div className="h-32 border-b border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.22),rgba(79,70,229,0.2),rgba(255,255,255,0.04))] p-4">
              <div className="flex h-full flex-col justify-between">
                <span className="w-fit rounded-full bg-zinc-950/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-200">
                  Projeto 0{index + 1}
                </span>
                <ArrowUpRight
                  className="self-end text-white/70 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-200"
                  size={28}
                />
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-emerald-300">{project.sector}</p>
              <h3 className="mt-2 text-lg font-black text-white">{project.title}</h3>
              <p className="mt-2 min-h-16 text-sm leading-6 text-zinc-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-bold text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={`/projetos/${project.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-200"
                >
                  <Eye size={14} />
                  Ver Prévia
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

import { Code2, GraduationCap } from 'lucide-react'

const stack = ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'Node.js', 'SQL', 'APIs', 'Git/GitHub']

export default function About() {
  return (
    <section id="sobre" className="bg-[#f5f1e8] py-24 text-stone-950">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-800">Sobre</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Um desenvolvedor com olhar de negócio, não só de código.
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-700">
            Sou Eduardo Dias, desenvolvedor Front-end. Meu foco é criar presença digital
            para empresas locais, profissionais liberais e prestadores de serviço que
            precisam de um site claro, rápido e confiável para receber mais contatos.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="rounded-2xl bg-emerald-950 p-7 text-white">
            <GraduationCap className="text-lime-200" size={28} />
            <h3 className="mt-5 text-2xl font-black">Formação</h3>
            <p className="mt-4 leading-7 text-stone-300">
              Técnico em Desenvolvimento de Software pelo CEDUP de Timbó e graduando em
              Ciência da Computação pela UNISUL.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-7">
            <div className="flex items-center gap-3">
              <Code2 className="text-emerald-800" size={26} />
              <h3 className="text-2xl font-black">Stack principal</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span key={tech} className="rounded-full bg-[#f5f1e8] px-4 py-2 text-sm font-black text-stone-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

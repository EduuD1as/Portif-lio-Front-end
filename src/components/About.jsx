import { ExternalLink, GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="bg-[#f5f1e8] py-24 text-stone-950">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-800">Sobre</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Conheça um pouco sobre mim!
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-700">
            Sou Eduardo Dias, desenvolvedor Front-end. Crio sites para
            empresas e profissionais que precisam de uma presença digital forte para
            atrair mais clientes e visitas.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="rounded-2xl bg-emerald-950 p-7 text-white">
            <GraduationCap className="text-lime-200" size={28} />
            <h3 className="mt-5 text-2xl font-black">Formação</h3>
            <p className="mt-4 leading-7 text-stone-300">
              Técnico em Desenvolvimento de Software.
              <br /> Graduando em Ciência da Computação.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-7">
            <div className="flex items-center gap-3">
              <ExternalLink className="text-emerald-800" size={26} />
              <h3 className="text-2xl font-black">Veja meus trabalhos</h3>
            </div>
            <p className="mt-4 leading-7 text-stone-700">
              Confira sites e projetos que desenvolvi para diferentes clientes.
            </p>
            <a
              href="#projetos"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3 font-black text-white transition hover:bg-emerald-900"
            >
              Ver mostruário
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

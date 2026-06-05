import { BadgeCheck, LayoutTemplate, Megaphone, Smartphone } from 'lucide-react'

const services = [
  {
    icon: LayoutTemplate,
    title: 'Sites institucionais',
    text: 'Estrutura profissional para apresentar sua empresa, serviços, diferenciais e canais de contato.',
  },
  {
    icon: Megaphone,
    title: 'Landing pages',
    text: 'Páginas focadas em uma oferta clara, com copy, hierarquia visual e CTA para conversão.',
  },
  {
    icon: Smartphone,
    title: 'Experiência mobile',
    text: 'Layout pensado primeiro para celular, onde a maioria dos clientes decide entrar em contato.',
  },
  {
    icon: BadgeCheck,
    title: 'Performance e confiança',
    text: 'Código limpo, carregamento rápido e visual consistente para transmitir credibilidade.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="bg-[#f5f1e8] py-24 text-stone-950">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-800">Serviços</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            O que eu construo para o seu negócio aparecer melhor.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-2xl border border-stone-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-300/40">
                <div className="grid size-12 place-items-center rounded-md bg-emerald-950 text-lime-200">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-stone-600">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

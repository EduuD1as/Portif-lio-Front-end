import { ArrowRight, CheckCircle2, Gauge, MessageCircle, Sparkles, TrendingUp } from 'lucide-react'

const proof = ['Sites institucionais', 'Landing pages', 'Performance mobile']

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-18">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#07110f_0%,#10231d_46%,#f5f1e8_46%,#f5f1e8_100%)]" />
      <div className="section-shell grid min-h-screen items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-200/20 bg-white/8 px-4 py-2 text-sm font-bold text-lime-100">
            <Gauge size={16} />
            Solução para quem precisa de mais visibilidade!
          </div>
          <h1 className="text-4xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Seu site precisa parecer profissional e gerar contato.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            Eu crio sites institucionais e landing pages rápidas, responsivas e focadas
            em transformar visitantes em pedidos de orçamento, agendamentos e conversas no WhatsApp.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/554733336608"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-lime-300 px-6 py-4 text-sm font-black text-emerald-950 shadow-2xl shadow-lime-950/30 transition hover:-translate-y-0.5 hover:bg-lime-200"
            >
              <MessageCircle size={18} />
              Solicitar orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/8"
            >
              Ver como eu ajudo
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {proof.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-semibold text-stone-200">
                <CheckCircle2 size={16} className="text-lime-200" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-10 h-28 w-28 rounded-full bg-lime-300/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-emerald-900/10 bg-[#f9f6ef] p-3 shadow-2xl shadow-emerald-950/25">
            <div className="overflow-hidden rounded-[1.25rem] border border-stone-200 bg-white">
              <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-red-300" />
                  <span className="size-3 rounded-full bg-amber-300" />
                  <span className="size-3 rounded-full bg-lime-300" />
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-black text-stone-500">
                  site.local
                </span>
              </div>

              <div className="bg-[#f5f1e8] px-6 py-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm font-black text-emerald-950">Negócio Local</span>
                  <span className="rounded-full bg-emerald-950 px-3 py-1 text-xs font-black text-lime-200">
                    Online agora
                  </span>
                </div>

                <h2 className="mt-8 max-w-md text-4xl font-black leading-tight text-stone-950">
                  Página clara para transformar visitas em conversas.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-stone-600">
                  Proposta, confiança e botão de contato organizados para o cliente agir sem pensar demais.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <span className="inline-flex items-center justify-center rounded-md bg-lime-300 px-5 py-3 text-sm font-black text-emerald-950">
                    Pedir orçamento
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md border border-stone-300 px-5 py-3 text-sm font-black text-stone-700">
                    Ver serviços
                  </span>
                </div>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-xl bg-emerald-950 p-5 text-white">
                  <TrendingUp className="text-lime-200" size={24} />
                  <p className="mt-8 text-3xl font-black">+contatos</p>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    Estrutura pensada para WhatsApp, orçamento e agendamento.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-xl border border-stone-200 p-5">
                    <div className="flex items-center gap-3">
                      <Sparkles className="text-emerald-800" size={22} />
                      <p className="font-black text-stone-950">Primeira impressão forte</p>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-stone-100">
                      <div className="h-2 w-4/5 rounded-full bg-lime-300" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-stone-200 p-4">
                      <p className="text-2xl font-black text-emerald-950">3s</p>
                      <p className="mt-2 text-xs font-bold text-stone-500">para entender a oferta</p>
                    </div>
                    <div className="rounded-xl bg-[#f5f1e8] p-4">
                      <p className="text-2xl font-black text-emerald-950">100%</p>
                      <p className="mt-2 text-xs font-bold text-stone-500">responsivo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

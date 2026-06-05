import { ArrowLeft, Check, Mail, MapPin, MessageCircle, Sparkles, Utensils, Scale, Dumbbell, Wrench } from 'lucide-react'
import textileHero from '../assets/textile-hero.svg'
import beautyHero from '../assets/beauty-hero.svg'
import realestateHero from '../assets/realestate-hero.svg'
import clinicHero from '../assets/clinic-hero.svg'

function BackLink({ light = false }) {
  return (
    <a
      href="/#projetos"
      className={`inline-flex items-center gap-2 text-sm font-bold transition ${light ? 'text-white/80 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
        }`}
    >
      <ArrowLeft size={18} />
      Voltar ao portfólio
    </a>
  )
}

function TextilePage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="section-shell grid min-h-screen items-center gap-12 py-10 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <BackLink light />
          <p className="mt-14 text-sm font-black uppercase tracking-[0.3em] text-emerald-300">
            TexPrime Uniformes
          </p>
          <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl">
            Uniformes industriais com escala, padrão e presença corporativa.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Site B2B para uma confecção têxtil fictícia, construído para transmitir
            capacidade produtiva e transformar grandes empresas em pedidos de orçamento.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/554733336608" className="rounded-lg bg-emerald-400 px-6 py-4 text-center text-sm font-black text-slate-950">
              Solicitar orçamento
            </a>
            <a href="#linha" className="rounded-lg border border-white/15 px-6 py-4 text-center text-sm font-bold">
              Ver linha de produção
            </a>
          </div>
        </div>
        <img src={textileHero} alt="Ilustração de uma linha de produção têxtil" className="rounded-2xl border border-white/10 shadow-2xl shadow-emerald-950/40" />
      </section>
      <section id="linha" className="border-y border-emerald-300/20 bg-emerald-400 py-16 text-slate-950">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {['Produção sob medida', 'Uniformes profissionais', 'Atendimento nacional'].map((item) => (
            <div key={item} className="rounded-xl bg-white/70 p-6">
              <Check size={24} />
              <h2 className="mt-5 text-2xl font-black">{item}</h2>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-700">Bloco comercial focado em autoridade, volume e confiança para compradores corporativos.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function BeautyPage() {
  return (
    <main className="bg-rose-50 text-rose-950">
      <section className="section-shell py-8">
        <BackLink />
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <img src={beautyHero} alt="Ilustração delicada de um studio de beleza" className="order-2 rounded-[2rem] shadow-2xl shadow-pink-200 lg:order-1" />
          <div className="order-1 lg:order-2">
            <span className="rounded-full bg-pink-200 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-pink-950">
              Lume Beauty Studio
            </span>
            <h1 className="mt-7 text-5xl font-black leading-tight sm:text-6xl">
              Cílios, estética e autocuidado com agenda cheia pelo digital.
            </h1>
            <p className="mt-6 text-lg leading-8 text-rose-800">
              Landing page fictícia para beleza local, com visual instagramável,
              linguagem leve e chamada direta para agendamento rápido.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/554733336608" className="rounded-full bg-rose-950 px-7 py-4 text-center text-sm font-black text-white">
                Agendar horário
              </a>
              <a href="mailto:edudiasbianchini@gmail.com" className="rounded-full border border-rose-200 px-7 py-4 text-center text-sm font-black">
                Ver catálogo
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="section-shell grid gap-4 md:grid-cols-4">
          {['Extensão de cílios', 'Design de sobrancelhas', 'Limpeza de pele', 'Brow lamination'].map((item) => (
            <div key={item} className="rounded-2xl border border-pink-100 bg-rose-50 p-6">
              <Sparkles className="text-pink-500" />
              <h2 className="mt-5 text-xl font-black">{item}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function RealEstatePage() {
  return (
    <main className="bg-[#f7f3ea] text-slate-950">
      <section className="section-shell py-8">
        <BackLink />
        <div className="mt-10 overflow-hidden rounded-3xl bg-slate-950 text-white">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-300">
                Vértice Urbanismo
              </p>
              <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
                Empreendimentos para morar, investir e valorizar.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Projeto fictício para construtora e imobiliária, com vitrine de
                lançamentos, diferenciais do imóvel e captação de leads qualificados.
              </p>
              <a href="https://wa.me/554733336608" className="mt-8 inline-flex rounded-lg bg-amber-300 px-7 py-4 text-sm font-black text-slate-950">
                Falar com consultor
              </a>
            </div>
            <img src={realestateHero} alt="Ilustração de empreendimento imobiliário moderno" className="h-full min-h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="section-shell grid gap-5 py-16 md:grid-cols-3">
        {['12 empreendimentos', 'Tour de imóveis', 'Plantas inteligentes'].map((item) => (
          <div key={item} className="rounded-xl bg-white p-7 shadow-sm">
            <MapPin className="text-indigo-700" />
            <h2 className="mt-5 text-2xl font-black">{item}</h2>
            <p className="mt-3 text-slate-600">Conteúdo pensado para reduzir dúvidas e acelerar conversas com compradores.</p>
          </div>
        ))}
      </section>
    </main>
  )
}

function ClinicPage() {
  return (
    <main className="bg-cyan-50 text-slate-900">
      <section className="section-shell py-8">
        <BackLink />
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-700">
              Clínica Plena Saúde
            </p>
            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
              Atendimento médico e odontológico com confiança desde o primeiro clique.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Página fictícia para saúde com navegação calma, visual limpo,
              foco em credibilidade e agendamento de consultas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/554733336608" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-700 px-7 py-4 text-sm font-black text-white">
                <MessageCircle size={18} />
                Agendar consulta
              </a>
              <a href="mailto:edudiasbianchini@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-black shadow-sm">
                <Mail size={18} />
                Enviar e-mail
              </a>
            </div>
          </div>
          <img src={clinicHero} alt="Ilustração de uma clínica médica e odontológica" className="rounded-3xl shadow-2xl shadow-cyan-200" />
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="section-shell grid gap-5 md:grid-cols-4">
          {['Clínica geral', 'Odontologia', 'Check-ups', 'Prevenção'].map((item) => (
            <div key={item} className="rounded-xl border border-cyan-100 p-6">
              <Check className="text-cyan-700" />
              <h2 className="mt-5 text-xl font-black">{item}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function RestaurantPage() {
  return (
    <main className="bg-orange-50 text-orange-950">
      <section className="section-shell py-8">
        <BackLink />
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl bg-orange-100 p-8">
              <Utensils className="text-orange-600" size={64} />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="rounded-full bg-orange-200 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-950">
              Bella Trattoria
            </span>
            <h1 className="mt-7 text-5xl font-black leading-tight sm:text-6xl">
              Sabor autêntico italiano em cada prato, cada momento.
            </h1>
            <p className="mt-6 text-lg leading-8 text-orange-800">
              Site fictício para restaurante com cardápio digital, sistema de reservas
              e integração com WhatsApp para pedidos e delivery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/554733336608" className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-sm font-black text-white">
                <MessageCircle size={18} />
                Fazer pedido
              </a>
              <a href="#reservas" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-300 px-7 py-4 text-sm font-black">
                Fazer reserva
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="reservas" className="bg-white py-16">
        <div className="section-shell">
          <h2 className="text-3xl font-black text-center">Nossos Serviços</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {['Almoço executivo', 'Jantar à la carte', 'Eventos', 'Delivery'].map((item) => (
              <div key={item} className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
                <Utensils className="text-orange-600" />
                <h3 className="mt-5 text-xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function LawPage() {
  return (
    <main className="bg-slate-100 text-slate-900">
      <section className="section-shell py-8">
        <BackLink />
        <div className="mt-10 overflow-hidden rounded-3xl bg-slate-900 text-white">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-400">
                Dias & Associados
              </p>
              <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
                Excelência jurídica com compromisso e ética.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Site fictício para escritório de advocacia com apresentação de áreas
                de atuação, autoridade e formulário de contato inicial.
              </p>
              <a href="https://wa.me/554733336608" className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-700 px-7 py-4 text-sm font-black text-white">
                <MessageCircle size={18} />
                Agendar consulta
              </a>
            </div>
            <div className="flex items-center justify-center bg-slate-800 p-8">
              <Scale className="text-slate-400" size={120} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell grid gap-5 py-16 md:grid-cols-4">
        {['Direito civil', 'Direito trabalhista', 'Direito empresarial', 'Consultoria'].map((item) => (
          <div key={item} className="rounded-xl bg-white p-7 shadow-sm">
            <Check className="text-slate-700" />
            <h2 className="mt-5 text-xl font-black">{item}</h2>
          </div>
        ))}
      </section>
    </main>
  )
}

function GymPage() {
  return (
    <main className="bg-red-50 text-red-950">
      <section className="section-shell py-8">
        <BackLink />
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <span className="rounded-full bg-red-200 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-950">
              Iron Forge CrossFit
            </span>
            <h1 className="mt-7 text-5xl font-black leading-tight sm:text-6xl">
              Transforme seu corpo, supere seus limites.
            </h1>
            <p className="mt-6 text-lg leading-8 text-red-800">
              Landing page fictícia para academia com horários de aula, planos de
              treinamento e formulário de matrícula online.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/554733336608" className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-7 py-4 text-sm font-black text-white">
                <MessageCircle size={18} />
                Começar agora
              </a>
              <a href="#aulas" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-red-300 px-7 py-4 text-sm font-black">
                Ver horários
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-red-100 p-8">
            <Dumbbell className="text-red-600" size={120} />
          </div>
        </div>
      </section>
      <section id="aulas" className="bg-white py-16">
        <div className="section-shell">
          <h2 className="text-3xl font-black text-center">Nossos Serviços</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {['CrossFit', 'Treino funcional', 'Aulas em grupo', 'Personal trainer'].map((item) => (
              <div key={item} className="rounded-2xl border border-red-100 bg-red-50 p-6">
                <Dumbbell className="text-red-600" />
                <h3 className="mt-5 text-xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function AutoPage() {
  return (
    <main className="bg-blue-50 text-blue-950">
      <section className="section-shell py-8">
        <BackLink />
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl bg-blue-100 p-8">
              <Wrench className="text-blue-600" size={64} />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="rounded-full bg-blue-200 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-950">
              Mecânica Premium
            </span>
            <h1 className="mt-7 text-5xl font-black leading-tight sm:text-6xl">
              Seu carro em boas mãos, sempre.
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-800">
              Site fictício para oficina mecânica com apresentação de serviços,
              orçamento online e integração com WhatsApp para agendamento rápido.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/554733336608" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-4 text-sm font-black text-white">
                <MessageCircle size={18} />
                Solicitar orçamento
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-blue-300 px-7 py-4 text-sm font-black">
                Ver serviços
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="servicos" className="bg-white py-16">
        <div className="section-shell">
          <h2 className="text-3xl font-black text-center">Nossos Serviços</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {['Manutenção preventiva', 'Reparo geral', 'Troca de óleo', 'Alinhamento'].map((item) => (
              <div key={item} className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <Wrench className="text-blue-600" />
                <h3 className="mt-5 text-xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default function ProjectPages({ slug }) {
  if (slug === 'industria-textil') return <TextilePage />
  if (slug === 'studio-estetica') return <BeautyPage />
  if (slug === 'plataforma-imobiliaria') return <RealEstatePage />
  if (slug === 'clinica-medica') return <ClinicPage />
  if (slug === 'restaurante-gastronomia') return <RestaurantPage />
  if (slug === 'advocacia-consultorio') return <LawPage />
  if (slug === 'academia-fitness') return <GymPage />
  if (slug === 'auto-center-mecanica') return <AutoPage />
  return <TextilePage />
}

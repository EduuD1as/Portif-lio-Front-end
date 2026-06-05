import { Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contato" className="bg-[#07110f] py-24 text-white">
      <div className="section-shell">
        <div className="grid gap-10 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-lime-200">Contato</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
              Me chame no WhatsApp ou envie um e-mail. Respondo rápido para entender
              seu negócio, objetivo e o tipo de página ideal.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="https://wa.me/554733336608"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-lime-300 px-7 py-4 text-sm font-black text-emerald-950 transition hover:-translate-y-0.5 hover:bg-lime-200"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="mailto:edudiasbianchini@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/8"
            >
              <Mail size={18} />
              E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

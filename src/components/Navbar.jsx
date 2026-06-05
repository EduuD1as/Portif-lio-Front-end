import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07110f]/82 backdrop-blur-xl">
      <nav className="section-shell flex h-18 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Eduardo Dias">
          <span className="grid size-10 place-items-center rounded-md bg-lime-300 text-sm font-black text-emerald-950">
            EB
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Eduardo Dias
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header-link text-sm font-semibold text-stone-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/554733336608"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-black text-emerald-950 shadow-lg shadow-lime-300/20 ring-1 ring-lime-100/70 transition hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-lime-200 hover:shadow-xl hover:shadow-lime-300/30 md:inline-flex"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-md border border-white/10 text-white lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#07110f] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-stone-200 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { useScrollSpy, useScrolled } from '../../hooks/useScrollSpy'
import { navLinks, brand } from '../../data/siteContent'
import { openWhatsApp } from '../../utils/whatsapp'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(60)
  const activeId = useScrollSpy(sectionIds)

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-glass border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-pad">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex flex-col items-start focus:outline-none">
            <span className={`font-display font-bold text-xl md:text-2xl leading-none transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
              HYATT HOLIDAYS
            </span>
            <span className={`font-ui text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-secondary' : 'text-secondary-300'}`}>
              A UNIT OF ACE SQUARE
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative font-ui text-sm font-medium px-3 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30
                    ${scrolled
                      ? isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
                      : isActive ? 'text-secondary' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-secondary"
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${brand.phone}`}
              className={`flex items-center gap-2 font-ui text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'}`}
            >
              <Phone size={14} />
              {brand.phone}
            </a>
            <button
              onClick={() => openWhatsApp('Hello Hyatt Holidays, I would like to plan my trip. Please share details.')}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Plan Your Trip
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${scrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="container-pad py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left font-ui text-sm font-medium px-4 py-3 rounded-xl transition-colors ${
                    activeId === link.href.replace('#', '')
                      ? 'text-primary bg-primary/8 font-semibold'
                      : 'text-slate-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 pb-1 flex gap-3">
                <a href={`tel:${brand.phone}`} className="btn-secondary text-sm flex-1 justify-center">
                  <Phone size={14} />
                  Call Now
                </a>
                <button
                  onClick={() => { openWhatsApp(); setOpen(false) }}
                  className="btn-primary text-sm flex-1 justify-center"
                >
                  Plan Trip
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

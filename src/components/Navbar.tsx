import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button } from './ui/Button'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Nosotros', href: '#nosotros' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80], [0, 1])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav
        className={`
          mx-auto max-w-6xl flex items-center justify-between
          px-5 py-3 rounded-2xl transition-all duration-500
          ${scrolled ? 'glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent'}
        `}
      >
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-sm font-semibold text-indigo-300 relative z-10">T</span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-zinc-100">
            TeoNova
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[13px] text-zinc-400 hover:text-zinc-100 transition-colors duration-300 rounded-lg hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button href="#contacto" size="sm" variant="primary">
            Contactar
          </Button>
        </div>
      </nav>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
      />
    </motion.header>
  )
}

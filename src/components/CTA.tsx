import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'

export function CTA() {
  return (
    <section id="contacto" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />

            <div className="relative z-10">
              <p className="text-[13px] uppercase tracking-[0.2em] text-indigo-400/80 mb-4 font-medium">
                Hablemos
              </p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] leading-tight mb-5">
                Construyamos algo que
                <br />
                <span className="text-gradient-accent">tu negocio merezca.</span>
              </h2>
              <p className="text-zinc-400 text-lg font-light max-w-lg mx-auto mb-10">
                Cuéntanos tu idea. Respondemos rápido, sin compromiso, con propuestas claras.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="https://wa.me/521234567890"
                  size="lg"
                  icon
                  variant="primary"
                >
                  Iniciar conversación
                </Button>
                <Button href="mailto:hola@teonova.app" size="lg" variant="secondary">
                  hola@teonova.app
                </Button>
              </div>

              <p className="text-[12px] text-zinc-600 mt-8">
                Respuesta promedio · menos de 24 horas
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ContactFAB() {
  return (
    <motion.a
      href="#contacto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2.5
        px-5 py-3 rounded-full
        bg-zinc-900/90 backdrop-blur-xl
        border border-white/[0.1]
        text-[13px] font-medium text-zinc-200
        shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(99,102,241,0.1)]
        hover:border-indigo-500/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_30px_rgba(99,102,241,0.2)]
        hover:text-white
        transition-all duration-300
        group
      "
      aria-label="Contactar a TeoNova"
    >
      <MessageCircle
        size={16}
        className="text-zinc-400 group-hover:text-indigo-300 transition-colors duration-300"
      />
      <span className="hidden sm:inline">Agendar asesoría</span>
    </motion.a>
  )
}

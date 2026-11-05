import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { Button } from './ui/Button'

const TechSphere = lazy(() =>
  import('./TechSphere').then((m) => ({ default: m.TechSphere })),
)

const stats = [
  { value: '100%', label: 'A medida' },
  { value: '24/7', label: 'Soporte' },
  { value: '+10×', label: 'Productividad' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="glow-orb w-[600px] h-[600px] bg-indigo-600/20 -top-48 -right-48" />
      <div className="glow-orb w-[400px] h-[400px] bg-violet-600/10 bottom-0 -left-32" />

      <Suspense fallback={null}>
        <TechSphere />
      </Suspense>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[12px] text-zinc-400 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Aceptando nuevos proyectos · 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-6"
            >
              Software de alto nivel
              <br />
              <span className="text-gradient-accent">para negocios</span>
              <br />
              que avanzan.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-10 font-light"
            >
              Diseñamos y desarrollamos plataformas, automatizaciones y dashboards
              a medida — tecnología profesional, accesible y hecha para empresas reales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="#contacto" size="lg" icon variant="primary">
                Hablar con TeoNova
              </Button>
              <Button href="#servicios" size="lg" variant="secondary">
                Ver lo que hacemos
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative h-[480px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 pt-10 border-t border-white/[0.06] grid grid-cols-3 gap-8 max-w-lg"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-semibold text-zinc-100 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[13px] text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
        aria-label="Scroll hacia servicios"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  )
}

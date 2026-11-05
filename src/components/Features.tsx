import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'

const features = [
  'Reportes inteligentes',
  'Agenda integrada',
  'Control de inventario',
  'Dashboards en vivo',
  'Automatización',
  'Notificaciones',
  'Gestión de clientes',
  'Control administrativo',
]

const highlights = [
  { value: '10×', label: 'Operaciones más rápidas' },
  { value: '99.9%', label: 'Disponibilidad' },
  { value: '1 stack', label: 'Suite unificada' },
  { value: '4.9/5', label: 'Satisfacción' },
]

export function Features() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="shimmer-line absolute top-0 left-0 right-0 h-px" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-[13px] uppercase tracking-[0.2em] text-indigo-400/80 mb-4 font-medium">
            Funcionalidades
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] leading-tight mb-5">
            Todo lo que tu operación necesita,
            <br />
            <span className="text-zinc-500">en un solo lugar.</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light">
            Cada módulo se adapta a tu negocio. Sin plantillas. Sin sobrecarga.
          </p>
        </Reveal>

        <StaggerContainer className="flex flex-wrap justify-center gap-3 mb-24">
          {features.map((feature) => (
            <StaggerItem key={feature}>
              <div className="px-5 py-2.5 rounded-full glass text-[13px] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.12] transition-all duration-300 cursor-default">
                {feature}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="text-center p-8 rounded-2xl glass hover:border-white/[0.1] transition-all duration-500 group"
              >
                <div className="text-3xl font-semibold text-zinc-100 tracking-tight mb-2 group-hover:text-gradient-accent transition-all duration-500">
                  {h.value}
                </div>
                <div className="text-[13px] text-zinc-500">{h.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

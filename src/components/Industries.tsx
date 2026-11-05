import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'

const industries = [
  {
    name: 'Veterinarias',
    description: 'Agenda, historial clínico y recordatorios.',
    accent: 'from-violet-500/20 to-indigo-500/5',
  },
  {
    name: 'Negocios locales',
    description: 'Punto de venta, inventario y clientes.',
    accent: 'from-indigo-500/20 to-blue-500/5',
  },
  {
    name: 'Empresas pequeñas',
    description: 'Gestión interna, reportes y procesos.',
    accent: 'from-blue-500/20 to-cyan-500/5',
  },
  {
    name: 'Emprendimientos',
    description: 'Landing, branding y herramientas digitales.',
    accent: 'from-indigo-500/20 to-violet-500/5',
  },
  {
    name: 'PyMEs',
    description: 'Digitalización completa y escalable.',
    accent: 'from-violet-500/20 to-purple-500/5',
  },
  {
    name: 'Retail & servicios',
    description: 'Plataformas a medida para operar mejor.',
    accent: 'from-purple-500/20 to-indigo-500/5',
  },
]

export function Industries() {
  return (
    <section id="industrias" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal className="lg:sticky lg:top-32">
            <p className="text-[13px] uppercase tracking-[0.2em] text-indigo-400/80 mb-4 font-medium">
              Para quién trabajamos
            </p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] leading-tight mb-5">
              Construido para negocios
              <br />
              <span className="text-zinc-500">que quieren crecer.</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
              Trabajamos con equipos que valoran la calidad, la cercanía y la
              tecnología bien hecha.
            </p>
          </Reveal>

          <StaggerContainer className="space-y-4">
            {industries.map((industry, i) => (
              <StaggerItem key={industry.name}>
                <div
                  className={`
                    group relative overflow-hidden rounded-2xl border border-white/[0.06]
                    bg-gradient-to-r ${industry.accent}
                    p-6 transition-all duration-500
                    hover:border-white/[0.12] hover:-translate-x-1
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[17px] font-medium text-zinc-100 mb-1.5 tracking-tight">
                        {industry.name}
                      </h3>
                      <p className="text-[14px] text-zinc-500">{industry.description}</p>
                    </div>
                    <span className="text-[12px] text-zinc-700 font-mono mt-1">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-indigo-500/40 to-transparent transition-all duration-700" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

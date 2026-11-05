import { Check } from 'lucide-react'
import { Reveal } from './ui/Reveal'

const points = [
  'Atención cercana y personalizada en cada proyecto',
  'Tecnología moderna y escalable desde el día uno',
  'Soluciones accesibles, sin costos imposibles',
  'Desarrollo a medida, sin plantillas genéricas',
]

const pillars = [
  { label: 'Proyectos entregados', value: 'Calidad sobre cantidad' },
  { label: 'Modelo de trabajo', value: 'Iterativo + feedback continuo' },
  { label: 'Promesa', value: 'Tecnología que se siente humana' },
]

export function About() {
  return (
    <section id="nosotros" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.2em] text-indigo-400/80 mb-4 font-medium">
              Sobre TeoNova
            </p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] leading-tight mb-6">
              Tecnología profesional,
              <br />
              <span className="text-gradient-accent">hecha cerca</span> de tu negocio.
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
              En TeoNova diseñamos y desarrollamos software moderno con un enfoque
              humano. Creemos que la tecnología debe sentirse cercana, ser entendible
              y resolver problemas reales — sin complicaciones ni costos imposibles.
            </p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[14px] text-zinc-400">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-indigo-400" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} direction="left">
            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.label}
                  className="glass rounded-2xl p-6 hover:border-white/[0.1] transition-all duration-500"
                  style={{ marginLeft: i * 16 }}
                >
                  <div className="text-[12px] uppercase tracking-wider text-zinc-600 mb-2">
                    {pillar.label}
                  </div>
                  <div className="text-lg font-medium text-zinc-200 tracking-tight">
                    {pillar.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

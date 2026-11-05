import {
  BarChart3,
  Boxes,
  Globe,
  Layers,
  MessageSquare,
  Workflow,
} from 'lucide-react'
import { GlassCard } from './ui/GlassCard'
import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web a Medida',
    description:
      'Sitios y plataformas rápidas, optimizadas y diseñadas con identidad propia.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Reportes',
    description:
      'Visualiza tu negocio en tiempo real con paneles inteligentes y claros.',
  },
  {
    icon: Workflow,
    title: 'Automatización de Procesos',
    description:
      'Conectamos tus herramientas y eliminamos tareas repetitivas con flujos automáticos.',
  },
  {
    icon: Boxes,
    title: 'Sistemas Administrativos',
    description:
      'Inventario, ventas, clientes y operación bajo un solo sistema escalable.',
  },
  {
    icon: Layers,
    title: 'Software Empresarial',
    description:
      'Soluciones internas a la medida de tu equipo, procesos y crecimiento.',
  },
  {
    icon: MessageSquare,
    title: 'Integraciones & Notificaciones',
    description:
      'WhatsApp, correo, pagos y APIs externas integradas a tu operación.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mb-20">
          <p className="text-[13px] uppercase tracking-[0.2em] text-indigo-400/80 mb-4 font-medium">
            Qué hacemos
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] leading-tight mb-5">
            Tecnología hecha para resolver
            <br />
            <span className="text-zinc-500">problemas reales.</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            Desde una landing hasta un ERP interno: construimos la herramienta exacta
            que tu negocio necesita.
          </p>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <GlassCard glow className="h-full group">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:bg-indigo-500/15 transition-colors duration-300">
                  <service.icon size={18} className="text-indigo-300" />
                </div>
                <h3 className="text-[17px] font-medium text-zinc-100 mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[14px] text-zinc-500 leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

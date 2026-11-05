import { motion } from 'framer-motion'
import { Activity, Bell, TrendingUp, Users } from 'lucide-react'
import { Reveal } from './ui/Reveal'

const sidebarItems = ['Overview', 'Inventario', 'POS', 'Reportes', 'Automatizaciones', 'Equipo']

const metrics = [
  { label: 'MRR', value: '$184,920', change: '+12.4%', icon: TrendingUp },
  { label: 'Tiendas activas', value: '428', change: '+3.1%', icon: Users },
  { label: 'Ticket promedio', value: '$48.20', change: '+5.7%', icon: Activity },
]

const activity = [
  { text: 'Nueva orden #4821', time: '2m', type: 'order' },
  { text: 'Alerta stock · Café', time: '2m', type: 'alert' },
  { text: 'Lead WhatsApp · María', time: '2m', type: 'lead' },
]

function MiniChart() {
  const bars = [40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100]
  return (
    <div className="flex items-end gap-[3px] h-16">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 rounded-sm bg-gradient-to-t from-indigo-600/40 to-indigo-400/60"
        />
      ))}
    </div>
  )
}

export function DashboardShowcase() {
  return (
    <section id="plataforma" className="relative py-32 px-6 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-indigo-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto max-w-6xl relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[13px] uppercase tracking-[0.2em] text-indigo-400/80 mb-4 font-medium">
            Plataforma
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] leading-tight mb-5">
            Un dashboard que se siente
            <span className="text-gradient-accent"> vivo.</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light">
            Cinematográfico, rápido y obsesivamente diseñado — hasta el último píxel.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent rounded-3xl blur-2xl opacity-60" />

            <div className="relative glass-strong rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)] border border-white/[0.08]">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white/[0.04] text-[11px] text-zinc-500 font-mono">
                    teonova.app / dashboard
                  </div>
                </div>
              </div>

              <div className="flex min-h-[420px]">
                <aside className="hidden md:block w-48 border-r border-white/[0.06] p-4 bg-white/[0.01]">
                  <div className="text-[11px] text-zinc-600 uppercase tracking-wider mb-4 px-2">
                    Navegación
                  </div>
                  {sidebarItems.map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-[13px] mb-0.5 transition-colors ${
                        i === 0
                          ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </aside>

                <main className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-[13px] text-zinc-500">Tienda · Av. Reforma</div>
                      <div className="text-lg font-medium text-zinc-100 mt-0.5">
                        Operaciones en vivo
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] text-emerald-400 font-medium">Streaming</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {metrics.map((m) => (
                      <div
                        key={m.label}
                        className="glass rounded-xl p-4 hover:border-white/[0.1] transition-colors duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[12px] text-zinc-500">{m.label}</span>
                          <m.icon size={14} className="text-zinc-600" />
                        </div>
                        <div className="text-xl font-semibold text-zinc-100 tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[12px] text-emerald-400/80 mt-1">{m.change}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-[1.4fr_1fr] gap-4">
                    <div className="glass rounded-xl p-5">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[13px] text-zinc-400">Ingresos · últimos 30 días</span>
                        <div className="flex gap-1">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                            30d
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] text-zinc-600">90d</span>
                        </div>
                      </div>
                      <MiniChart />
                      <div className="mt-3 text-[13px] text-emerald-400/80">+ 38.2% vs mes anterior</div>
                    </div>

                    <div className="glass rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <Bell size={14} className="text-zinc-500" />
                        <span className="text-[13px] text-zinc-400">Actividad reciente</span>
                      </div>
                      <div className="space-y-3">
                        {activity.map((a) => (
                          <div
                            key={a.text}
                            className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0"
                          >
                            <span className="text-[13px] text-zinc-400">{a.text}</span>
                            <span className="text-[11px] text-zinc-600">{a.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 flex flex-wrap justify-center gap-8 opacity-40">
          {['NORTHWIND', 'ACME', 'COLUMEN', 'WORKS', 'VERTEX', 'AURIGA'].map((name) => (
            <span key={name} className="text-[12px] font-medium tracking-[0.15em] text-zinc-500">
              {name}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

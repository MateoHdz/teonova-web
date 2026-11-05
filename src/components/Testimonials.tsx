import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'

const testimonials = [
  {
    quote:
      'TeoNova reemplazó cuatro herramientas que estábamos conectando manualmente. Los dashboards solos pagaron el año.',
    author: 'Alejandra Ruiz',
    role: 'COO · Café Sur',
  },
  {
    quote:
      'El módulo veterinario es increíble. La implementación tomó una tarde y nuestro equipo no miró atrás.',
    author: 'Dr. Marco Velasco',
    role: 'Fundador · VetPro Clinics',
  },
  {
    quote:
      'Su POS es el más rápido que hemos usado — y las automatizaciones cierran tratos mientras dormimos.',
    author: 'Pamela Ortega',
    role: 'Head of Retail · Lumen',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-16">
          <p className="text-[13px] uppercase tracking-[0.2em] text-indigo-400/80 mb-4 font-medium">
            Testimonios
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em]">
            La plataforma detrás de operadores ambiciosos.
          </h2>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <blockquote className="glass rounded-2xl p-7 h-full flex flex-col hover:border-white/[0.1] transition-all duration-500">
                <p className="text-[15px] text-zinc-400 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <div className="text-[14px] font-medium text-zinc-200">{t.author}</div>
                  <div className="text-[12px] text-zinc-600 mt-0.5">{t.role}</div>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

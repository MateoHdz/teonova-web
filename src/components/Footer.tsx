export function Footer() {
  const links = {
    Servicios: [
      { label: 'Desarrollo Web', href: '#servicios' },
      { label: 'Dashboards', href: '#servicios' },
      { label: 'Automatización', href: '#servicios' },
      { label: 'Sistemas', href: '#servicios' },
    ],
    Empresa: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Industrias', href: '#industrias' },
      { label: 'Plataforma', href: '#plataforma' },
      { label: 'Contacto', href: '#contacto' },
    ],
  }

  return (
    <footer className="relative border-t border-white/[0.06] py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                <span className="text-sm font-semibold text-indigo-300">T</span>
              </div>
              <span className="text-[15px] font-semibold tracking-tight">TeoNova</span>
            </div>
            <p className="text-[14px] text-zinc-500 leading-relaxed max-w-xs">
              Software moderno, hecho cerca de ti. Tecnología profesional para
              negocios que avanzan.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[13px] font-medium text-zinc-300 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-zinc-600">
            © {new Date().getFullYear()} TeoNova. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {['Privacidad', 'Términos'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

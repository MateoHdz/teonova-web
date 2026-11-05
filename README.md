# TeoNova — sitio web

Landing page de **TeoNova**, mi marca de desarrollo de software a medida para negocios: sistemas administrativos, POS, dashboards, automatizaciones e integraciones para veterinarias, comercios locales y pymes.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS 4** para estilos
- **Three.js** (`@react-three/fiber`) para la esfera 3D del hero, cargada de forma diferida
- **GSAP** y **Framer Motion** para animaciones de scroll y entrada

## Secciones

| Sección | Componente |
| --- | --- |
| Hero con esfera 3D interactiva | `Hero.tsx`, `TechSphere.tsx` |
| Servicios | `Services.tsx` |
| Maqueta de dashboard (inventario, POS, reportes) | `DashboardShowcase.tsx` |
| Industrias | `Industries.tsx` |
| Diferenciales | `Features.tsx` |
| Quiénes somos | `About.tsx` |
| Llamado a la acción y botón flotante de contacto | `CTA.tsx` |

## Correr en local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # compila a dist/
npm run lint
```

## Estado

Diseño y maquetación completos; compila sin errores ni advertencias de lint. Pendiente antes de publicarla:

- [ ] Poner el número real de WhatsApp en `src/components/CTA.tsx` (hoy es un número de ejemplo).
- [ ] Agregar testimonios reales; la sección `Testimonials.tsx` existe pero está desactivada en `App.tsx` hasta tenerlos.
- [ ] Páginas de Privacidad y Términos (enlaces del footer).
- [ ] Desplegar (Vercel o Netlify) y conectar el dominio.

## Proyectos de TeoNova

- [TeoNova-Vet](https://github.com/MateoHdz/TeoNova-Vet) — POS y gestión para veterinarias.

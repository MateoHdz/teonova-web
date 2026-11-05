import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { About } from './components/About'
import { ContactFAB, CTA } from './components/CTA'
import { DashboardShowcase } from './components/DashboardShowcase'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Industries } from './components/Industries'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.parallax-glow').forEach((el) => {
        gsap.to(el, {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DashboardShowcase />
        <Industries />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
      <ContactFAB />
    </>
  )
}

export default App

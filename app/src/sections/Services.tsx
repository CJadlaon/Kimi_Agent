import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const headerEls = section.querySelectorAll('.srv-header')
      gsap.fromTo(
        headerEls,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%' },
        }
      )

      const cards = section.querySelectorAll('.srv-card')
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cards[0]?.parentElement, start: 'top 80%' },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="bg-white py-[120px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="srv-header block font-body font-medium text-[11px] uppercase tracking-[2px] text-accent mb-4">
            CAPABILITIES
          </span>
          <h2 className="srv-header font-display font-semibold text-[64px] text-black uppercase" style={{ letterSpacing: '-1px' }}>
            WHAT WE DO
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="srv-card border-t-2 border-black hover:border-accent pt-10 pb-6 transition-colors duration-300"
            >
              <span className="font-display font-bold text-[14px] text-accent">{service.number}</span>
              <h3 className="font-display font-semibold text-[28px] text-black mt-4">{service.title}</h3>
              <p className="font-body text-[15px] text-slate leading-[1.6] mt-4">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#services"
            className="inline-flex items-center gap-2 font-body font-medium text-[13px] uppercase tracking-[1px] text-black group"
            data-cursor-hover
          >
            Explore Our Services
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

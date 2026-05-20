import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '22', label: 'Projects Delivered' },
  { number: '8', label: 'Years of Practice' },
  { number: '14', label: 'Industry Awards' },
]

export function Studio() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const image = section.querySelector('.studio-image')
      const textEls = section.querySelectorAll('.studio-text')

      gsap.fromTo(
        image,
        { x: -80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%' },
        }
      )

      gsap.fromTo(
        textEls,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%' },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="bg-black min-h-screen flex items-center px-[5vw] py-[120px]"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Image */}
        <div className="lg:w-[40%] w-full">
          <div className="studio-image relative">
            <div className="absolute -top-2 -left-2 w-full h-full border-l-2 border-t-2 border-accent" />
            <img
              src="/images/project-6.jpg"
              alt="Auru Studio"
              className="w-full max-w-[480px] aspect-[3/4] object-cover grayscale"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="lg:w-[60%] w-full lg:pl-20">
          <span className="studio-text block font-body font-medium text-[11px] uppercase tracking-[2px] text-accent mb-6">
            THE STUDIO
          </span>
          <h2 className="studio-text font-display font-bold text-[72px] lg:text-[96px] text-white uppercase leading-none" style={{ letterSpacing: '-2px' }}>
            WE BUILD
          </h2>
          <h2 className="studio-text font-serif italic text-[72px] lg:text-[96px] text-accent leading-none" style={{ letterSpacing: '-1px' }}>
            brands
          </h2>
          <p className="studio-text font-body text-[17px] text-white/85 leading-[1.7] max-w-[520px] mt-8">
            Auru Studio is a vanguard digital design practice specializing in brand systems, digital platforms, and visual campaigns. We partner with ambitious organizations to create work that commands attention and earns loyalty.
          </p>

          {/* Stats */}
          <div className="studio-text flex gap-12 mt-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display font-bold text-[48px] text-accent block">{stat.number}</span>
                <span className="font-body text-[11px] uppercase tracking-[2px] text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="studio-text inline-flex items-center gap-2 font-body font-medium text-[13px] uppercase tracking-[1px] text-white mt-10 group"
            data-cursor-hover
          >
            About the Studio
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

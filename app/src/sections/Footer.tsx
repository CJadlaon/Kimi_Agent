import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    const text = textRef.current
    if (!footer || !text) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        text,
        { rotateX: -15, y: 100, opacity: 0 },
        {
          rotateX: 0, y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: footer, start: 'top 90%' },
        }
      )
    }, footer)

    return () => ctx.revert()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer ref={footerRef} className="bg-black text-white" style={{ perspective: '2000px' }}>
      {/* Row 1: Massive Typography */}
      <div className="overflow-hidden pt-20 pb-12 px-[5vw]">
        <div
          ref={textRef}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h2 className="font-display font-bold text-[80px] sm:text-[120px] lg:text-[200px] text-white uppercase leading-none" style={{ letterSpacing: '-4px' }}>
            AURU
          </h2>
          <h2 className="font-display font-bold text-[80px] sm:text-[120px] lg:text-[200px] text-white uppercase leading-none" style={{ letterSpacing: '-4px' }}>
            STUDIO©
          </h2>
        </div>
      </div>

      {/* Row 2: Contact */}
      <div className="px-[5vw] py-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="mailto:hello@auru.studio"
            className="font-body text-[16px] text-white/80 hover:text-accent transition-colors duration-300"
            data-cursor-hover
          >
            hello@auru.studio
          </a>

          <div className="flex gap-6">
            {['Instagram', 'Behance', 'Dribbble', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-[13px] uppercase tracking-[1px] text-white/60 hover:text-white transition-colors duration-300"
                data-cursor-hover
              >
                {social}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="font-body text-[12px] uppercase text-white/50 hover:text-accent transition-colors duration-300"
            data-cursor-hover
          >
            Back to Top ↑
          </button>
        </div>
      </div>

      {/* Row 3: Copyright */}
      <div className="px-[5vw] py-5 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-body text-[11px] text-white/40">
            © 2025 Auru Studio. All rights reserved.
          </span>
          <span className="font-body text-[11px] text-white/40">
            New York / London / Remote
          </span>
        </div>
      </div>
    </footer>
  )
}

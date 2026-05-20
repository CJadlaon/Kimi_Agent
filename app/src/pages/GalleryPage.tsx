import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/data/projects'
import { Link } from 'react-router-dom'
import { Footer } from '@/sections/Footer'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Brand Identity', 'Digital Design', 'Campaign']

export function GalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  useEffect(() => {
    // Hero entrance
    if (heroRef.current) {
      const title = heroRef.current.querySelector('.gl-title')
      const subtitle = heroRef.current.querySelector('.gl-subtitle')
      const filters = heroRef.current.querySelector('.gl-filters')
      if (title) {
        gsap.fromTo(title, { skewY: 8, y: 60, opacity: 0 }, { skewY: 0, y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      }
      if (subtitle && filters) {
        gsap.fromTo([subtitle, filters], { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.3 })
      }
    }
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    const track = trackRef.current
    const progress = progressRef.current
    if (!container || !track || !progress) return

    const totalWidth = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            gsap.set(progress, { scaleX: self.progress })
          },
        },
      })

      // Parallax depth on cards
      const cards = track.querySelectorAll('.gallery-card')
      const centerIndex = Math.floor(cards.length / 2)
      cards.forEach((card, i) => {
        const offset = (i - centerIndex) * 2
        gsap.to(card.querySelector('img'), {
          y: offset,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: `+=${totalWidth}`,
            scrub: 1,
          },
        })
      })
    }, container)

    return () => ctx.revert()
  }, [filtered])

  return (
    <main>
      {/* Gallery Hero */}
      <section
        ref={heroRef}
        className="bg-black min-h-screen flex flex-col items-center justify-center relative px-[5vw]"
      >
        <h1
          className="gl-title font-display font-bold text-[80px] sm:text-[100px] lg:text-[140px] text-white uppercase text-center leading-none opacity-0"
          style={{ letterSpacing: '-2px' }}
        >
          THE WORK
        </h1>
        <p className="gl-subtitle font-body text-[16px] text-white/60 mt-6 text-center max-w-[500px] opacity-0">
          22 projects across brand identity, digital design, and creative campaigns.
        </p>

        {/* Filter tabs */}
        <div className="gl-filters flex gap-6 mt-10 opacity-0 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-body font-medium text-[13px] uppercase tracking-[1px] transition-colors duration-300 ${
                activeFilter === cat ? 'text-accent' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-[60px] bg-accent animate-pulse" />
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section ref={scrollContainerRef} className="bg-white relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-6 py-20"
          style={{ paddingLeft: '5vw', paddingRight: '5vw' }}
        >
          {filtered.map((project, i) => (
            <Link
              to={`/project/${project.slug}`}
              key={`${project.id}-${i}`}
              className="gallery-card group flex-shrink-0"
              style={{ width: '420px' }}
              data-cursor-hover
            >
              <div className="relative overflow-hidden rounded-[4px] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-display font-semibold text-[18px] text-black">{project.title}</h3>
                <span className="font-body font-medium text-[11px] uppercase tracking-[2px] text-slate group-hover:text-accent transition-colors duration-300">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Progress bar */}
        <div className="fixed bottom-0 left-0 right-0 h-[3px] bg-gray-100 z-50">
          <div
            ref={progressRef}
            className="h-full bg-accent origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </section>

      <div className="bg-white pt-20">
        <Footer />
      </div>
    </main>
  )
}

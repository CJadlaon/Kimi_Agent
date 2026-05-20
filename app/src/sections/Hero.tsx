import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GrainOverlay } from '@/components/GrainOverlay'
import { featuredProject } from '@/data/projects'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)

  const noiseRef = useRef(0.25)
  const tintRef = useRef(0)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const panel = panelRef.current
    const title = titleRef.current
    const tags = tagsRef.current
    if (!section || !image || !panel || !title || !tags) return

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        image,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.2 }
      )

      gsap.fromTo(
        [title, tags],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.6 }
      )

      // Pinned scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress
            // Grain intensifies mid-scroll then fades
            noiseRef.current = p < 0.5 ? 0.2 + p * 0.4 : 0.4 - (p - 0.5) * 0.5
            tintRef.current = p < 0.4 ? p * 0.75 : p > 0.6 ? 0.3 - (p - 0.6) * 0.75 : 0.3
          },
        },
      })

      tl.to(image, {
        scale: 0.85,
        x: '-15%',
        duration: 1,
        ease: 'power2.inOut',
      }, 0)

      tl.fromTo(
        panel,
        { clipPath: 'inset(0 0 0 100%)' },
        { clipPath: 'inset(0 0 0 0%)', duration: 1, ease: 'power3.inOut' },
        0.2
      )
    }, section)

    // Grain uniform update loop
    let raf: number
    const updateGrain = () => {
      // grain ref will re-read from the refs
      raf = requestAnimationFrame(updateGrain)
    }
    raf = requestAnimationFrame(updateGrain)

    return () => {
      ctx.revert()
      cancelAnimationFrame(raf)
    }
  }, [])

  const project = featuredProject

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Image Container */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full opacity-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <GrainOverlay
          noiseIntensity={noiseRef.current}
          tintStrength={tintRef.current}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Metadata (bottom-left) */}
      <div className="absolute bottom-12 left-[5vw] z-10">
        <div ref={tagsRef} className="opacity-0">
          <span className="font-body font-medium text-[11px] uppercase tracking-[2px] text-white/70">
            {project.category}
          </span>
          <span className="font-body font-medium text-[11px] uppercase tracking-[2px] text-white/70 mx-3">
            /
          </span>
          <span className="font-body font-medium text-[11px] uppercase tracking-[2px] text-white/70">
            {project.year}
          </span>
        </div>
        <h1
          ref={titleRef}
          className="font-display font-bold text-[64px] text-white uppercase mt-3 opacity-0"
          style={{ letterSpacing: '-1px' }}
        >
          {project.title}
        </h1>
        <Link
          to={`/project/${project.slug}`}
          className="inline-block font-body font-medium text-[13px] uppercase text-accent mt-4 hover:underline"
        >
          View Project →
        </Link>
      </div>

      {/* Right Panel (revealed on scroll) */}
      <div
        ref={panelRef}
        className="absolute top-0 right-0 w-[40%] h-full bg-white flex flex-col justify-center px-12"
        style={{ clipPath: 'inset(0 0 0 100%)' }}
      >
        <span className="font-body font-medium text-[11px] uppercase tracking-[2px] text-slate/60">
          Featured Project
        </span>
        <h2 className="font-display font-bold text-[48px] text-black uppercase mt-4" style={{ letterSpacing: '-1px' }}>
          {project.title}
        </h2>
        <p className="font-body text-[15px] text-slate mt-4 leading-relaxed max-w-[320px]">
          {project.client} — A comprehensive {project.category.toLowerCase()} project that redefined the brand's visual presence.
        </p>
        <div className="flex gap-6 mt-8">
          <div>
            <span className="font-body font-medium text-[11px] uppercase tracking-[2px] text-slate/50 block">Client</span>
            <span className="font-display font-semibold text-[18px] text-black mt-1 block">{project.client}</span>
          </div>
          <div>
            <span className="font-body font-medium text-[11px] uppercase tracking-[2px] text-slate/50 block">Year</span>
            <span className="font-display font-semibold text-[18px] text-black mt-1 block">{project.year}</span>
          </div>
        </div>
        <Link
          to={`/project/${project.slug}`}
          className="inline-flex items-center gap-2 font-body font-medium text-[13px] uppercase tracking-[1px] text-black mt-10 group"
        >
          View Case Study
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  )
}

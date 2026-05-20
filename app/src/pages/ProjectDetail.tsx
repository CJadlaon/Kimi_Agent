import { useParams, Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import { Footer } from '@/sections/Footer'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (heroRef.current) {
      const overlay = heroRef.current.querySelector('.pd-overlay')
      if (overlay) {
        gsap.fromTo(overlay, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 })
      }
    }
  }, [slug])

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-[48px] text-black">Project Not Found</h1>
          <Link to="/" className="font-body text-accent mt-4 inline-block">← Back to Home</Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Project Header */}
      <section ref={heroRef} className="relative w-full h-[70vh]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="pd-overlay absolute bottom-12 left-[5vw] max-w-[1400px] opacity-0">
          <div className="flex gap-3 mb-4">
            <span className="font-body font-medium text-[11px] uppercase tracking-[2px] text-white/70">
              {project.category}
            </span>
          </div>
          <h1 className="font-display font-bold text-[48px] sm:text-[72px] text-white uppercase" style={{ letterSpacing: '-1px' }}>
            {project.title}
          </h1>
          <p className="font-body text-[14px] text-white/80 mt-2">
            {project.client} — {project.year}
          </p>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-white py-20 px-[5vw]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block font-body font-medium text-[11px] uppercase tracking-[2px] text-slate/60 mb-2">CLIENT</span>
            <span className="font-display font-medium text-[18px] text-black">{project.client}</span>
          </div>
          <div>
            <span className="block font-body font-medium text-[11px] uppercase tracking-[2px] text-slate/60 mb-2">YEAR</span>
            <span className="font-display font-medium text-[18px] text-black">{project.year}</span>
          </div>
          <div>
            <span className="block font-body font-medium text-[11px] uppercase tracking-[2px] text-slate/60 mb-2">ROLE</span>
            <span className="font-display font-medium text-[18px] text-black">{project.category}</span>
          </div>
          <div>
            <span className="block font-body font-medium text-[11px] uppercase tracking-[2px] text-slate/60 mb-2">LIVE SITE</span>
            <a href="#" className="font-display font-medium text-[18px] text-accent hover:underline" data-cursor-hover>
              Visit →
            </a>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="bg-white pb-20 px-[5vw]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
          <img src={project.image} alt={`${project.title} showcase 1`} className="w-full rounded-[4px]" />
          <img
            src={projects[(projectIndex + 1) % projects.length].image}
            alt={`${project.title} showcase 2`}
            className="w-full rounded-[4px]"
          />
          <img
            src={projects[(projectIndex + 2) % projects.length].image}
            alt={`${project.title} showcase 3`}
            className="w-full rounded-[4px]"
          />
        </div>
      </section>

      {/* Next Project */}
      <section className="bg-black min-h-[40vh] flex flex-col items-center justify-center">
        <Link
          to={`/project/${nextProject.slug}`}
          className="group text-center"
          data-cursor-hover
        >
          <span className="font-body font-medium text-[13px] uppercase tracking-[2px] text-white/60 group-hover:text-accent transition-colors duration-300">
            Next Project →
          </span>
          <h2 className="font-display font-semibold text-[32px] text-white mt-2 group-hover:text-accent transition-colors duration-300">
            {nextProject.title}
          </h2>
        </Link>
      </section>

      <Footer />
    </main>
  )
}

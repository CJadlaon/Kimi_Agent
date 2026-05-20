import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/data/projects'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Brand Identity', 'Digital Design', 'Campaign']

export function SelectedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects.slice(0, 6)
    : projects.filter((p) => p.category === activeFilter).slice(0, 6)

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current
    if (!section || !cards) return

    const ctx = gsap.context(() => {
      const headerEls = section.querySelectorAll('.sp-header')
      gsap.fromTo(
        headerEls,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%' },
        }
      )

      const cardEls = cards.querySelectorAll('.project-card')
      gsap.fromTo(
        cardEls,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: cards, start: 'top 85%' },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [filtered])

  return (
    <section ref={sectionRef} className="bg-white py-[120px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="sp-header block font-body font-medium text-[11px] uppercase tracking-[2px] text-accent mb-4">
            SELECTED WORK
          </span>
          <h2 className="sp-header font-display font-semibold text-[48px] text-black uppercase" style={{ letterSpacing: '-1px' }}>
            Selected Work
          </h2>
          <p className="sp-header font-body text-[16px] text-slate mt-4 max-w-[600px]">
            Brand identity, digital platforms, and visual campaigns for forward-thinking clients.
          </p>

          {/* Filter tabs */}
          <div className="sp-header flex gap-6 mt-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-body font-medium text-[13px] uppercase tracking-[1px] pb-1 transition-all duration-300 ${
                  activeFilter === cat
                    ? 'text-black border-b-2 border-accent'
                    : 'text-black/50 hover:text-black/80 border-b-2 border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              to={`/project/${project.slug}`}
              key={project.id}
              className="project-card group block"
              data-cursor-hover
            >
              <div className="relative overflow-hidden rounded-[4px] aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="font-body font-medium text-[11px] uppercase tracking-[2px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-display font-semibold text-[20px] text-black">{project.title}</h3>
                <span className="font-body text-[13px] text-slate">{project.client}</span>
                <span className="font-body text-[12px] text-slate/60 ml-2">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 font-body font-medium text-[13px] uppercase tracking-[1px] text-black group"
            data-cursor-hover
          >
            View All Projects
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

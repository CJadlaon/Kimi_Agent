import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { awards } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

export function Recognition() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const headerEls = section.querySelectorAll('.rec-header')
      gsap.fromTo(
        headerEls,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%' },
        }
      )

      const entries = section.querySelectorAll('.award-entry')
      gsap.fromTo(
        entries,
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: entries[0]?.parentElement, start: 'top 80%' },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F8F9FA] py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="rec-header block font-body font-medium text-[11px] uppercase tracking-[2px] text-accent mb-4">
            AWARDS & PRESS
          </span>
          <h2 className="rec-header font-display font-semibold text-[48px] text-black uppercase" style={{ letterSpacing: '-1px' }}>
            RECOGNITION
          </h2>
        </div>

        {/* Award List */}
        <div className="border-t border-gray-200">
          {awards.map((award, i) => (
            <div
              key={i}
              className="award-entry flex items-center justify-between py-5 border-b border-gray-200 px-0 hover:pl-2 hover:bg-accent transition-all duration-300 cursor-default group"
            >
              <span className="font-display font-medium text-[18px] text-black group-hover:text-black w-[35%]">
                {award.name}
              </span>
              <span className="font-body text-[14px] text-slate group-hover:text-black w-[40%] text-center">
                {award.project}
              </span>
              <span className="font-body text-[13px] text-slate/50 group-hover:text-black/50 w-[15%] text-right">
                {award.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

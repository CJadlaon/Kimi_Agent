import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Footer } from '@/sections/Footer'

export function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (heroRef.current) {
      const title = heroRef.current.querySelector('.ct-title')
      const subtitle = heroRef.current.querySelector('.ct-subtitle')
      if (title) {
        gsap.fromTo(title, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      }
      if (subtitle) {
        gsap.fromTo(subtitle, { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.3 })
      }
    }
  }, [])

  useEffect(() => {
    const form = formRef.current
    if (!form) return
    const ctx = gsap.context(() => {
      const els = form.querySelectorAll('.form-el')
      gsap.fromTo(
        els,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      )
    }, form)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section
        ref={heroRef}
        className="bg-black min-h-[60vh] flex flex-col items-center justify-center px-[5vw]"
      >
        <h1
          className="ct-title font-display font-bold text-[80px] sm:text-[100px] lg:text-[120px] text-white uppercase text-center leading-none opacity-0"
          style={{ letterSpacing: '-2px' }}
        >
          LET'S TALK
        </h1>
        <p className="ct-subtitle font-body text-[18px] text-white/70 mt-6 text-center max-w-[500px] opacity-0">
          Got a project in mind? We'd love to hear about it.
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-[120px] px-[5vw]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <div className="lg:w-[40%]">
            <h2 className="font-display font-semibold text-[36px] text-black">
              Start a conversation.
            </h2>
            <p className="font-body text-[16px] text-slate leading-[1.6] mt-4">
              We're always interested in hearing about new projects and opportunities. Whether you have a clear brief or just an idea, we'd love to explore the possibilities together.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hello@auru.studio"
                className="font-body font-medium text-[18px] text-accent block"
                data-cursor-hover
              >
                hello@auru.studio
              </a>
              <span className="font-body text-[14px] text-slate mt-2 block">+1 (212) 555-0147</span>
            </div>
            <div className="flex gap-6 mt-8">
              {['Instagram', 'Behance', 'Dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-body font-medium text-[12px] uppercase tracking-[1px] text-black hover:text-accent transition-colors duration-300"
                  data-cursor-hover
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-[60%]">
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <h3 className="font-display font-semibold text-[32px] text-black text-center">
                  Thank you. We'll be in touch within 48 hours.
                </h3>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="form-el">
                  <label className="block font-body text-[12px] uppercase tracking-[1px] text-slate mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-[56px] border-b-2 border-gray-200 bg-transparent font-body text-[16px] text-black focus:border-black focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="form-el">
                  <label className="block font-body text-[12px] uppercase tracking-[1px] text-slate mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full h-[56px] border-b-2 border-gray-200 bg-transparent font-body text-[16px] text-black focus:border-black focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="form-el">
                  <label className="block font-body text-[12px] uppercase tracking-[1px] text-slate mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    className="w-full h-[56px] border-b-2 border-gray-200 bg-transparent font-body text-[16px] text-black focus:border-black focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="form-el">
                  <label className="block font-body text-[12px] uppercase tracking-[1px] text-slate mb-2">
                    Project Budget
                  </label>
                  <select
                    className="w-full h-[56px] border-b-2 border-gray-200 bg-transparent font-body text-[16px] text-black focus:border-black focus:outline-none transition-colors duration-300 cursor-pointer"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under25k">Under $25k</option>
                    <option value="25k-50k">$25k – $50k</option>
                    <option value="50k-100k">$50k – $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>

                <div className="form-el">
                  <label className="block font-body text-[12px] uppercase tracking-[1px] text-slate mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border-b-2 border-gray-200 bg-transparent font-body text-[16px] text-black focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="form-el w-full h-[64px] bg-black text-white font-display font-semibold text-[16px] uppercase tracking-[2px] hover:bg-accent hover:text-black transition-all duration-300 mt-4"
                  data-cursor-hover
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'

const navLinks = [
  { label: 'Work', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Services', path: '/#services' },
  { label: 'Studio', path: '/#studio' },
  { label: 'Contact', path: '/contact' },
]

export function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return
    const items = navRef.current.querySelectorAll('.nav-item')
    gsap.fromTo(
      items,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      const id = path.slice(2)
      if (location.pathname === '/') {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-white/85' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-[5vw] py-5">
        <Link to="/" className="nav-item font-display font-bold text-xl tracking-[4px] text-black opacity-0">
          AURU
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className="nav-item font-body font-medium text-[13px] uppercase tracking-[1px] text-black/80 hover:text-accent transition-colors duration-300 opacity-0"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="nav-item hidden md:inline-flex font-body font-medium text-xs uppercase tracking-[1px] bg-accent text-black rounded-full px-6 py-3 hover:scale-105 hover:shadow-lg transition-all duration-300 opacity-0"
        >
          Start a Project
        </Link>
      </div>
    </nav>
  )
}

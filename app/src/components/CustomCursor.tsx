import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseEnterInteractive = () => {
      isHoveringRef.current = true
    }
    const onMouseLeaveInteractive = () => {
      isHoveringRef.current = false
    }

    window.addEventListener('mousemove', onMouseMove)

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [data-cursor-hover]')
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
      })
      return interactives
    }

    let interactives = addHoverListeners()
    const observer = new MutationObserver(() => {
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
      interactives = addHoverListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    let raf: number
    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15

      if (dotRef.current) {
        const size = isHoveringRef.current ? 40 : 8
        const offset = size / 2
        dotRef.current.style.transform = `translate(${posRef.current.x - offset}px, ${posRef.current.y - offset}px)`
        dotRef.current.style.width = `${size}px`
        dotRef.current.style.height = `${size}px`
        dotRef.current.style.backdropFilter = isHoveringRef.current ? 'invert(1)' : 'none'
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-accent transition-[width,height,backdrop-filter] duration-300 ease-out hidden md:block"
      style={{ width: 8, height: 8, mixBlendMode: 'difference' }}
    />
  )
}

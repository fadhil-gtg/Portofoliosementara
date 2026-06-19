import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    if (prefersReducedMotion || isMobile) return

    const lenis = new Lenis({
      duration: 0.95,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    })

    window.portfolioLenis = lenis

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)
    ScrollTrigger.refresh()

    return () => {
      cancelAnimationFrame(rafId)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      window.portfolioLenis = undefined
    }
  }, [])

  return <>{children}</>
}

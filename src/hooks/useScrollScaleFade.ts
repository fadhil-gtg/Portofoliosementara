import { useEffect, useRef } from 'react'

export function useScrollScaleFade<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const elCenter = rect.top + rect.height / 2
      const viewCenter = vh / 2

      const dist = Math.abs(elCenter - viewCenter) / (vh * 0.65)
      const progress = Math.max(0, Math.min(1, 1 - dist))
      const eased = progress * progress * (3 - 2 * progress)

      el.style.opacity = String(eased)
      el.style.transform = `scale(${0.88 + 0.12 * eased})`

      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return ref
}

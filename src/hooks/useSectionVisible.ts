import { useEffect, useState } from 'react'

interface UseSectionVisibleOptions {
  /**
   * Fraction of the viewport (from the top) that must be crossed by the
   * target section's top edge before it is considered visible.
   * 0 = section top must reach the very top of the viewport.
   * 0.5 = section top must reach the middle of the viewport.
   * @default 0.15
   */
  thresholdRatio?: number
}

/**
 * Returns `true` once the element identified by `targetId` has been
 * scrolled into view past `thresholdRatio` of the viewport height.
 *
 * Designed for triggering a sticky Navbar reveal when the user reaches
 * the About section. Uses scroll listener with rAF for performance.
 */
export const useSectionVisible = (
  targetId: string,
  { thresholdRatio = 0.15 }: UseSectionVisibleOptions = {}
): boolean => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ticking = false

    const evaluate = () => {
      const el = document.getElementById(targetId)
      if (!el) {
        ticking = false
        return
      }

      const rect = el.getBoundingClientRect()
      const trigger = window.innerHeight * (1 - thresholdRatio)
      // Section has entered view when its top is above the trigger line.
      setVisible(rect.top <= trigger)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(evaluate)
    }

    // Initial check (in case the user reloads mid-page).
    evaluate()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [targetId, thresholdRatio])

  return visible
}

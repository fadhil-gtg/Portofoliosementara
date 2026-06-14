import { useEffect, useRef, useState } from 'react'

export type ScrollDirection = 'up' | 'down'

interface UseScrollDirectionOptions {
  /**
   * Minimum scroll delta (in px) before a direction change is registered.
   * Prevents jittery flicker on small wheel/touch movements.
   * @default 8
   */
  threshold?: number
  /**
   * Initial direction returned before any scroll movement.
   * @default 'up'
   */
  initialDirection?: ScrollDirection
}

/**
 * Tracks the current vertical scroll direction with a small threshold
 * to avoid flicker on micro-movements. Uses passive listeners and
 * requestAnimationFrame for smooth, performant updates.
 */
export const useScrollDirection = ({
  threshold = 8,
  initialDirection = 'up',
}: UseScrollDirectionOptions = {}): ScrollDirection => {
  const [direction, setDirection] = useState<ScrollDirection>(initialDirection)
  const lastYRef = useRef<number>(
    typeof window !== 'undefined' ? window.scrollY : 0
  )
  const tickingRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const update = () => {
      const currentY = window.scrollY
      const delta = currentY - lastYRef.current

      if (Math.abs(delta) >= threshold) {
        setDirection(delta > 0 ? 'down' : 'up')
        lastYRef.current = currentY
      }

      tickingRef.current = false
    }

    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return direction
}

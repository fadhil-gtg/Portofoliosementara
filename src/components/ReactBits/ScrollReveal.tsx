import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  baseRotation?: number
  className?: string
  textClassName?: string
}

export function ScrollReveal({
  children,
  baseRotation = 3,
  className = '',
  textClassName = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const words = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    return text.split(/(\s+)/)
  }, [children])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false

    const update = () => {
      const rect = el.getBoundingClientRect()
      const start = window.innerHeight * 0.9
      const end = window.innerHeight * 0.28
      const next = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
      setProgress(next)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `rotate(${baseRotation * (1 - progress)}deg)`,
        transformOrigin: '0% 50%',
      }}
    >
      <p className={textClassName}>
        {words.map((word, index) => {
          if (/^\s+$/.test(word)) return word
          const revealOffset = index / Math.max(words.length, 1) * 0.28
          const wordProgress = Math.min(1, Math.max(0.18, progress * 1.45 - revealOffset))

          return (
            <span
              key={`${word}-${index}`}
            className="inline-block transition-[opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,filter]"
              style={{
                opacity: wordProgress,
                filter: `blur(${(1 - wordProgress) * 5}px)`,
              }}
            >
              {word}
            </span>
          )
        })}
      </p>
    </div>
  )
}

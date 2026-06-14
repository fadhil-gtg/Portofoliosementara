import { useEffect, useRef, useState } from 'react'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  animateBy?: 'words' | 'letters'
}

export function BlurText({
  text,
  className = '',
  delay = 45,
  animateBy = 'words',
}: BlurTextProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [visible, setVisible] = useState(false)
  const parts = animateBy === 'letters' ? text.split('') : text.split(' ')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <h2 ref={ref} className={`flex flex-wrap ${className}`.trim()}>
      {parts.map((part, index) => (
        <span
          key={`${part}-${index}`}
          className="inline-block transition-[opacity,filter,transform] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{
            opacity: visible ? 1 : 0,
            filter: visible ? 'blur(0px)' : 'blur(14px)',
            transform: visible ? 'translateY(0px)' : 'translateY(24px)',
            transitionDelay: `${index * delay}ms`,
          }}
        >
          {part === ' ' ? '\u00A0' : part}
          {animateBy === 'words' && index < parts.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </h2>
  )
}

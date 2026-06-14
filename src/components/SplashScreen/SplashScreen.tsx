import { useEffect, useState } from 'react'
import gsap from 'gsap'

interface SplashScreenProps {
  duration?: number
  onComplete?: () => void
}

export function SplashScreen({ duration = 2.5, onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Prevent scrolling while splash is visible
    document.body.style.overflow = 'hidden'

    // Timeline for splash animation
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        setIsVisible(false)
        onComplete?.()
      }
    })

    // Initial animation: fade in logo/text
    tl.to('.splash-logo', {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    })
    // Hold for a moment
    .to('.splash-logo', {
      duration: duration - 1.5,
    })
    // Fade out everything
    .to('.splash-screen', {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut'
    })

    return () => {
      document.body.style.overflow = ''
    }
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <div className="splash-screen fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]">
      <div className="splash-logo flex flex-col items-center gap-6 opacity-0 scale-95">
        {/* Logo/Initials */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm md:h-32 md:w-32">
          <span className="text-4xl font-display font-bold text-white md:text-5xl">
            AF
          </span>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xl font-display font-semibold text-white/90 md:text-2xl">
            Adhika Fadhil
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 animate-pulse rounded-full bg-white/60" style={{ animationDelay: '0ms' }} />
            <div className="h-1 w-1 animate-pulse rounded-full bg-white/60" style={{ animationDelay: '150ms' }} />
            <div className="h-1 w-1 animate-pulse rounded-full bg-white/60" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

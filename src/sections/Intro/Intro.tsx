import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { DURATION, EASING, MOVEMENT } from '../../animations'

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null)
  const greetingRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    // Smooth scroll to ScrollSequence when Intro is clicked
    const scrollSequence = document.querySelector('#scroll-sequence')
    if (scrollSequence) {
      const portfolioLenis = (window as any).portfolioLenis
      if (portfolioLenis) {
        portfolioLenis.scrollTo(scrollSequence, { duration: 1.5 })
      } else {
        scrollSequence.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASING.cinematic } })

      // Cinematic entrance animation
      tl.from(greetingRef.current, {
        opacity: 0,
        y: MOVEMENT.normal,
        duration: DURATION.slow,
        delay: 0.3,
      })
      .from(titleRef.current, {
        opacity: 0,
        y: MOVEMENT.normal,
        duration: DURATION.slow,
      }, '-=0.6')
      .from(subtitleRef.current, {
        opacity: 0,
        y: MOVEMENT.normal,
        duration: DURATION.slow,
      }, '-=0.7')

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      onClick={handleClick}
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden cursor-pointer transition-opacity hover:opacity-95"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Content Container */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-start justify-center max-w-5xl">
          
          {/* Greeting */}
          <div
            ref={greetingRef}
            className="mb-6 md:mb-8"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-sans text-gray-400 tracking-wide leading-relaxed">
              Hi, Saya Adhika <span className="inline-block">👋</span>
            </p>
          </div>

          {/* Main Title */}
          <div ref={titleRef} className="mb-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white leading-[0.95] tracking-tight">
              Web Designer
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef}>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white/30 leading-[0.95] tracking-tight">
              & Front-End Developer
            </h2>
          </div>

        </div>
      </div>
    </section>
  )
}

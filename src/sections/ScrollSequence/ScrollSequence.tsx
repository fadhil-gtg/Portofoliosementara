import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const frameIndexRef = useRef<number>(0)
  
  const wordDesignRef = useRef<HTMLDivElement>(null)
  const wordBuildRef = useRef<HTMLDivElement>(null)
  const wordAnimateRef = useRef<HTMLDivElement>(null)
  const wordDeveloperRef = useRef<HTMLDivElement>(null)
  
  const [imagesLoaded, setImagesLoaded] = useState(false)
  
  const frameCount = 217
  const currentFrame = (index: number) => 
    `/assets/frames/${String(index + 1).padStart(5, '0')}.png`

  const preloadImages = () => {
    const images: HTMLImageElement[] = []
    let loadedCount = 0

    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i)
      
      img.onload = () => {
        loadedCount++
        if (loadedCount === frameCount) {
          setImagesLoaded(true)
        }
      }
      
      img.onerror = () => {
        console.warn(`Failed to load frame ${i}`)
        loadedCount++
        if (loadedCount === frameCount) {
          setImagesLoaded(true)
        }
      }
      
      images[i] = img
    }
    
    imagesRef.current = images
  }

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return
    
    const img = imagesRef.current[index]
    
    if (img && img.complete) {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
  }

  const updateCanvasSize = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    renderFrame(frameIndexRef.current)
  }

  useEffect(() => {
    preloadImages()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (context) {
      contextRef.current = context
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [])

  useEffect(() => {
    if (!imagesLoaded) return

    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    renderFrame(0)

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=300%',
      scrub: 0.5,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(progress * frameCount)
        )
        
        if (frameIndexRef.current !== frameIndex) {
          frameIndexRef.current = frameIndex
          renderFrame(frameIndex)
        }

        // Animate words based on scroll progress
        // DESIGN: 0-0.25 (fade in 0-0.15, fade out 0.25-0.35)
        if (wordDesignRef.current) {
          const opacity = progress < 0.25 
            ? gsap.utils.mapRange(0, 0.15, 0, 1, progress) 
            : progress < 0.35 
            ? gsap.utils.mapRange(0.25, 0.35, 1, 0, progress) 
            : 0
          gsap.set(wordDesignRef.current, { opacity })
        }

        // BUILD: 0.25-0.5 (fade in 0.2-0.35, fade out 0.5-0.6)
        if (wordBuildRef.current) {
          const opacity = progress >= 0.2 && progress < 0.5 
            ? gsap.utils.mapRange(0.2, 0.35, 0, 1, progress) 
            : progress >= 0.5 && progress < 0.6 
            ? gsap.utils.mapRange(0.5, 0.6, 1, 0, progress) 
            : 0
          gsap.set(wordBuildRef.current, { opacity })
        }

        // ANIMATE: 0.5-0.75 (fade in 0.45-0.6, fade out 0.75-0.85)
        if (wordAnimateRef.current) {
          const opacity = progress >= 0.45 && progress < 0.75 
            ? gsap.utils.mapRange(0.45, 0.6, 0, 1, progress) 
            : progress >= 0.75 && progress < 0.85 
            ? gsap.utils.mapRange(0.75, 0.85, 1, 0, progress) 
            : 0
          gsap.set(wordAnimateRef.current, { opacity })
        }

        // DEVELOPER: 0.75-1.0 (fade in 0.7-0.85, stay visible)
        if (wordDeveloperRef.current) {
          const opacity = progress >= 0.7 
            ? gsap.utils.mapRange(0.7, 0.85, 0, 1, progress) 
            : 0
          gsap.set(wordDeveloperRef.current, { opacity })
        }
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [imagesLoaded])

  return (
    <section
      id="scroll-sequence"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#050507] via-[#0b0b0e] to-[#0b0b0e]"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Gradient transition to About section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-80 bg-gradient-to-b from-transparent via-[#0b0b0e]/50 to-[#0b0b0e]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48 bg-gradient-to-b from-transparent via-[rgba(200,169,110,0.025)] to-[rgba(200,169,110,0.04)]" />

      <div className="absolute inset-0 pointer-events-none">
        <div ref={wordDesignRef} className="word-design absolute top-[15%] left-[10%] opacity-0 font-display text-6xl font-normal italic tracking-tight text-[#c8a96e] [font-variation-settings:'WONK'_1] md:text-8xl lg:text-9xl">
          Design
        </div>

        <div ref={wordBuildRef} className="word-build absolute top-[30%] right-[10%] opacity-0 font-display text-6xl font-normal italic tracking-tight text-[#c8a96e] [font-variation-settings:'WONK'_1] md:text-8xl lg:text-9xl">
          Build
        </div>

        <div ref={wordAnimateRef} className="word-animate absolute bottom-[35%] left-[12%] opacity-0 font-display text-6xl font-normal italic tracking-tight text-[#c8a96e] [font-variation-settings:'WONK'_1] md:text-8xl lg:text-9xl">
          Animate
        </div>

        <div ref={wordDeveloperRef} className="word-developer absolute bottom-[20%] right-[8%] opacity-0 font-display text-6xl font-normal italic tracking-tight text-[#c8a96e] [font-variation-settings:'WONK'_1] md:text-8xl lg:text-9xl">
          Developer
        </div>
      </div>
    </section>
  )
}

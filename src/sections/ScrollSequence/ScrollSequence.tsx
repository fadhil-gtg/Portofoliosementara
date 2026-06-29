import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { frameManager, FRAME_COUNT } from '../../utils/framePreloader'

gsap.registerPlugin(ScrollTrigger)

export function ScrollSequence() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const wordDesignRef = useRef<HTMLDivElement>(null)
  const wordBuildRef = useRef<HTMLDivElement>(null)
  const bgTextRef = useRef<HTMLDivElement>(null)

  const currentFrameRef = useRef(-1)

  const [framesReady, setFramesReady] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Subscribe to frame manager updates and wait for ready
  useEffect(() => {
    // Check if already ready (preloaded in main.tsx)
    if (frameManager.isReady || isMobile) {
      setFramesReady(true)
      setLoadProgress(100)
      return
    }

    let localReady = false
    const unsubscribe = frameManager.subscribe(() => {
      const loaded = frameManager.getLoadedCount()
      setLoadProgress(Math.round((loaded / Math.min(FRAME_COUNT, 30)) * 100))
      if (frameManager.isReady && !localReady) {
        localReady = true
        setFramesReady(true)
        setLoadProgress(100)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [isMobile])

  // Destroy frame manager only on component unmount
  useEffect(() => {
    return () => {
      frameManager.destroy()
    }
  }, [])

  // Draw a specific frame to canvas using the windowed frame manager
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let clampedIndex = 0
    if (isMobile) {
      clampedIndex = frameIndex < (FRAME_COUNT / 2) ? 0 : (FRAME_COUNT - 1)
      frameManager.loadWindow(clampedIndex) // pastikan frame ujung termuat
    } else {
      clampedIndex = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex))
    }

    if (clampedIndex === currentFrameRef.current) return

    const img = frameManager.getFrame(clampedIndex)
    if (!img || !img.complete) return

    currentFrameRef.current = clampedIndex

    // Set canvas internal resolution to match container
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = Math.floor(rect.width * dpr)
    const h = Math.floor(rect.height * dpr)
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
    }

    ctx.clearRect(0, 0, w, h)

    // Cover-fit the frame into the canvas
    const imgRatio = img.naturalWidth / img.naturalHeight
    const canvasRatio = w / h

    let drawW: number, drawH: number, drawX: number, drawY: number
    if (imgRatio > canvasRatio) {
      drawH = h
      drawW = h * imgRatio
      drawX = (w - drawW) / 2
      drawY = 0
    } else {
      drawW = w
      drawH = w / imgRatio
      drawX = 0
      drawY = (h - drawH) / 2
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH)
  }, [isMobile])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (framesReady) {
        drawFrame(currentFrameRef.current >= 0 ? currentFrameRef.current : 0)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [framesReady, drawFrame])

  // GSAP ScrollTrigger
  useEffect(() => {
    if (!framesReady) return

    const section = sectionRef.current
    if (!section) return

    // Draw first frame
    drawFrame(0)

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: isMobile ? '+=100%' : '+=150%',
      scrub: 0.5,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress
        const frameIndex = Math.round(progress * (FRAME_COUNT - 1))
        // Load frames around the current scroll position (windowed loading)
        if (!isMobile) frameManager.loadWindow(frameIndex)
        drawFrame(frameIndex)

        // PORTFOLIO text: berakhir saat Build muncul penuh (progress 0.25-0.5)
        if (bgTextRef.current) {
          const yOffset = -(progress * 600)
          const bgOpacity = progress < 0.25
            ? 0.03
            : progress < 0.5
            ? 0.03 * (1 - gsap.utils.mapRange(0.25, 0.5, 0, 1, progress))
            : 0
          gsap.set(bgTextRef.current, { y: yOffset, opacity: bgOpacity })
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

        // BUILD: 0.25-0.5 (fade in 0.2-0.35, stay visible)
        if (wordBuildRef.current) {
          const opacity = progress >= 0.2
            ? gsap.utils.mapRange(0.2, 0.35, 0, 1, progress)
            : 0
          gsap.set(wordBuildRef.current, { opacity })
        }
      },
    })

    // Signal that ScrollTrigger pinning is done and layout is stable
    const emitReady = () => {
      ScrollTrigger.refresh()
      window.scrollSequenceReady = true
      console.log("ScrollSequence: Memancarkan event scrollSequenceReady")
      window.dispatchEvent(new CustomEvent('scrollSequenceReady'))
    }

    requestAnimationFrame(() => {
      emitReady()
      // Pancarkan sekali lagi setelah 100ms untuk memastikan App.tsx menangkapnya jika ada balapan render
      setTimeout(emitReady, 100)
    })

    return () => {
      window.scrollSequenceReady = false
      scrollTrigger.kill()
    }
  }, [framesReady, drawFrame, isMobile])

  return (
    <section
      id="scroll-sequence"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#050507] via-[#0b0b0e] to-[#0b0b0e]"
    >
      {/* Loading indicator */}
      {!framesReady && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0b0b0e]">
          <div className="text-center">
            <div className="mx-auto mb-3 h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#c8a96e] transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-sm tracking-widest text-white/30">
              LOADING {loadProgress}%
            </p>
          </div>
        </div>
      )}

      {/* Background massive PORTFOLIO text - di atas canvas (z-15) tapi di bawah kata-kata (z-30) */}
      <div 
        ref={bgTextRef}
        className="absolute inset-0 z-[15] flex items-center justify-center overflow-hidden pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      >
        <span className="font-display text-[12vw] font-black uppercase leading-none tracking-tighter text-white">
          PORTFOLIO
        </span>
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 h-full w-full"
      />

      {/* Gradient transition to About section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-80 bg-gradient-to-b from-transparent via-[#0b0b0e]/50 to-[#0b0b0e]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-48 bg-gradient-to-b from-transparent via-[rgba(200,169,110,0.025)] to-[rgba(200,169,110,0.04)]" />

      <div className="absolute inset-0 pointer-events-none z-30">
        <div ref={wordDesignRef} className="word-design absolute top-[25%] left-[10%] opacity-0 font-display text-4xl font-normal italic tracking-tight text-[#c8a96e] [font-variation-settings:'WONK'_1] md:text-5xl lg:text-6xl">
          Design
        </div>

        <div ref={wordBuildRef} className="word-build absolute top-[55%] right-[10%] opacity-0 font-display text-4xl font-normal italic tracking-tight text-[#c8a96e] [font-variation-settings:'WONK'_1] md:text-5xl lg:text-6xl">
          Build
        </div>


      </div>
    </section>
  )
}

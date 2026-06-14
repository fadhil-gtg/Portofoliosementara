import { ArrowUp } from 'lucide-react'
import { cn } from '../../utils/cn'
import { useSectionVisible } from '../../hooks/useSectionVisible'

interface BackToTopProps {
  revealAfterId?: string
  className?: string
}

export function BackToTop({ revealAfterId = 'skills', className }: BackToTopProps) {
  const visible = useSectionVisible(revealAfterId, { thresholdRatio: 0.2 })

  const scrollTop = () => {
    if (window.portfolioLenis) {
      window.portfolioLenis.scrollTo(0)
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full',
        'border border-white/12 bg-ink/72 text-paper backdrop-blur-md',
        'transition-[opacity,transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform',
        'hover:-translate-y-1 hover:border-white/24 hover:bg-ink/88 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/60',
        'md:bottom-8 md:right-8',
        visible
          ? 'translate-y-0 scale-100 opacity-100 pointer-events-auto'
          : 'translate-y-4 scale-95 opacity-0 pointer-events-none',
        className
      )}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
    </button>
  )
}

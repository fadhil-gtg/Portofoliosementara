import { useCallback } from 'react'
import { cn } from '../../utils/cn'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useSectionVisible } from '../../hooks/useSectionVisible'
import { Magnet, ShinyText } from '../ReactBits'

export interface NavItem {
  label: string
  href: string
}

export interface NavbarProps {
  /**
   * The id of the section that, once scrolled into view, reveals the Navbar.
   * @default 'about'
   */
  revealAtId?: string
  /**
   * Optional override for the navigation items.
   */
  items?: NavItem[]
  className?: string
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

/**
 * Minimalist, fixed Navbar.
 *
 * Visibility rules:
 *  - Hidden during Intro and ScrollSequence sections.
 *  - Revealed once the About section enters the viewport.
 *  - Hides on scroll down, re-appears on scroll up.
 */
export function Navbar({
  revealAtId = 'about',
  items = DEFAULT_ITEMS,
  className,
}: NavbarProps) {
  const aboutVisible = useSectionVisible(revealAtId, { thresholdRatio: 0.15 })
  const scrollDirection = useScrollDirection({ threshold: 10 })

  // Hidden until About is reached; once active, hide on scroll-down.
  const isVisible = aboutVisible && scrollDirection === 'up'

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith('#')) return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      if (window.portfolioLenis) {
        window.portfolioLenis.scrollTo(el, { offset: 0 })
        return
      }
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    []
  )

  return (
    <header
      role="banner"
      aria-hidden={!aboutVisible}
      className={cn(
        // Layout & positioning
        'fixed inset-x-0 top-4 z-50 px-4 md:top-6',
        // Reveal/hide animation — translate keeps it fully out of the way
        'transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform',
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none',
        className
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4',
          'rounded-full border border-white/10 bg-black/55 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl',
          'supports-[backdrop-filter]:bg-black/40 md:px-5'
        )}
      >
        {/* Brand mark */}
        <a
          href="#top"
          onClick={(e) => handleClick(e, '#top')}
          className={cn(
            'group inline-flex items-center gap-2',
            'whitespace-nowrap rounded-full px-2 py-2 font-display text-base font-semibold tracking-[-0.02em] text-white/76',
            'transition-colors duration-300 hover:text-white md:text-lg'
          )}
        >
          <ShinyText
            text="Adhika Fadhil"
            speed={2.4}
            delay={1.2}
            color="rgba(242,237,229,0.72)"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            pauseOnHover={false}
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  'relative inline-flex py-2',
                  'text-sm font-sans font-medium tracking-wide text-[#f2ede5]/62',
                  'transition duration-[600ms] hover:text-white',
                  'after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white',
                  'after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)]',
                  'hover:after:scale-x-100 focus-visible:after:scale-x-100',
                  'focus-visible:outline-none focus-visible:text-white'
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Magnet padding={48} magnetStrength={6} wrapperClassName="hidden md:inline-block">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className={cn(
              'inline-flex whitespace-nowrap rounded-full bg-white/90 px-5 py-3 font-sans text-sm font-semibold text-black shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition duration-[600ms] hover:-translate-y-0.5 hover:bg-white'
            )}
          >
            Contact Me
          </a>
        </Magnet>

        {/* Mobile nav — compact horizontal list, scrollable if needed */}
        <ul className="-mr-2 flex items-center gap-3 overflow-x-auto pr-2 no-scrollbar md:hidden">
          {items.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  'text-[11px] font-mono uppercase tracking-[0.18em]',
                  'text-white/70 transition-colors duration-300 hover:text-white'
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="shrink-0">
            <Magnet padding={28} magnetStrength={8}>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="inline-flex rounded-full bg-white/90 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.16em] text-black"
              >
                Contact Me
              </a>
            </Magnet>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import { ReactNode, memo, useEffect, useMemo, useRef, useState } from 'react'
import './LogoLoop.css'

export type LogoItem =
  | { node: ReactNode; title?: string; href?: string; ariaLabel?: string }
  | { src: string; alt?: string; title?: string; href?: string }

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  width?: number | string
  logoHeight?: number
  gap?: number
  hoverSpeed?: number
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  ariaLabel?: string
  className?: string
}

const toCssLength = (value?: number | string) =>
  typeof value === 'number' ? `${value}px` : value

function LogoLoopComponent({
  logos,
  speed = 120,
  direction = 'left',
  width = '100%',
  logoHeight = 28,
  gap = 32,
  hoverSpeed = 0,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  ariaLabel = 'Partner logos',
  className,
}: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const seqRef = useRef<HTMLUListElement>(null)
  const hoveredRef = useRef(false)
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)
  const [seqSize, setSeqSize] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const isVertical = direction === 'up' || direction === 'down'

  useEffect(() => {
    hoveredRef.current = isHovered
  }, [isHovered])

  useEffect(() => {
    const updateSize = () => {
      const rect = seqRef.current?.getBoundingClientRect()
      setSeqSize(Math.ceil(isVertical ? rect?.height ?? 0 : rect?.width ?? 0))
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [logos, gap, logoHeight, isVertical])

  useEffect(() => {
    const track = trackRef.current
    if (!track || seqSize === 0) return

    let raf = 0
    let last = 0
    let offset = offsetRef.current
    let velocity = velocityRef.current

    const directionMultiplier = isVertical
      ? direction === 'up' ? 1 : -1
      : direction === 'left' ? 1 : -1

    const animate = (time: number) => {
      if (!last) last = time
      const delta = Math.max(0, time - last) / 1000
      last = time

      if (hoveredRef.current && hoverSpeed === 0) {
        velocity = 0
        velocityRef.current = velocity
        offsetRef.current = offset
        raf = requestAnimationFrame(animate)
        return
      }

      const target = hoveredRef.current ? hoverSpeed : Math.abs(speed) * directionMultiplier
      velocity += (target - velocity) * (1 - Math.exp(-delta / 0.25))
      offset = ((offset + velocity * delta) % seqSize + seqSize) % seqSize
      velocityRef.current = velocity
      offsetRef.current = offset

      track.style.transform = isVertical
        ? `translate3d(0, ${-offset}px, 0)`
        : `translate3d(${-offset}px, 0, 0)`

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [direction, hoverSpeed, isVertical, seqSize, speed])

  const repeatedLogos = useMemo(() => [logos, logos, logos, logos], [logos])

  const rootClassName = [
    'logoloop',
    isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
    fadeOut && 'logoloop--fade',
    scaleOnHover && 'logoloop--scale-hover',
    className,
  ].filter(Boolean).join(' ')

  const style = {
    width: toCssLength(width) ?? '100%',
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor ? { '--logoloop-fadeColor': fadeOutColor } : {}),
  } as React.CSSProperties

  return (
    <div className={rootClassName} style={style} role="region" aria-label={ariaLabel}>
      <div
        className="logoloop__track"
        ref={trackRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {repeatedLogos.map((list, copyIndex) => (
          <ul
            className="logoloop__list"
            key={copyIndex}
            ref={copyIndex === 0 ? seqRef : undefined}
            aria-hidden={copyIndex > 0}
          >
            {list.map((item, itemIndex) => {
              const content = 'node' in item ? (
                <span className="logoloop__node" title={item.title}>{item.node}</span>
              ) : (
                <img src={item.src} alt={item.alt ?? item.title ?? ''} title={item.title} loading="lazy" />
              )

              return (
                <li className="logoloop__item" key={`${copyIndex}-${itemIndex}`}>
                  {item.href ? (
                    <a className="logoloop__link" href={item.href} target="_blank" rel="noreferrer noopener">
                      {content}
                    </a>
                  ) : content}
                </li>
              )
            })}
          </ul>
        ))}
      </div>
    </div>
  )
}

export const LogoLoop = memo(LogoLoopComponent)
export type LogoLoopItem = LogoItem

import { useEffect, useState } from 'react'
import SplashCursor from '../ReactBits/SplashCursor'

export function GlobalSplashCursor() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    const hasWebGL = (() => {
      const canvas = document.createElement('canvas')
      return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
    })()

    setEnabled(!reducedMotion && !coarsePointer && hasWebGL)
  }, [])

  if (!enabled) return null

  return (
    <SplashCursor
      VELOCITY_DISSIPATION={2.5}
      DENSITY_DISSIPATION={2.5}
      COLOR_UPDATE_SPEED={1}
      SPLAT_FORCE={5500}
      PRESSURE={0.15}
      COLOR="#F2D16B"
      RAINBOW_MODE={false}
      DYE_RESOLUTION={768}
      SIM_RESOLUTION={96}
      SPLAT_RADIUS={0.12}
    />
  )
}

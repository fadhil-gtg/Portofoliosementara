import { useEffect, useState } from 'react'
import { Ribbons } from '../ReactBits'

export function GlobalRibbons() {
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
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden opacity-95 mix-blend-screen">
      <Ribbons
        colors={['#c8a96e']}
        baseThickness={24}
        baseSpring={0.025}
        baseFriction={0.91}
        offsetFactor={0.025}
        maxAge={520}
        pointCount={48}
        speedMultiplier={0.52}
        enableFade
        enableShaderEffect
        effectAmplitude={1.4}
        backgroundColor={[0, 0, 0, 0]}
      />
    </div>
  )
}

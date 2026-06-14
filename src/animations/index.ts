// Animation System
// Unified motion design tokens for consistent timing, easing, and movement across the portfolio

// ======================
// DURATION CONSTANTS
// ======================

export const DURATION = {
  // Fast interactions (hover, focus states)
  fast: 0.6,
  
  // Standard animations (most UI transitions)
  normal: 0.8,
  
  // Cinematic entrances (hero sections, major reveals)
  slow: 1.0,
} as const

// ======================
// EASING CURVES
// ======================

// Premium GSAP easing curves
export const EASING = {
  // Standard smooth easing (most animations)
  smooth: 'power3.out',
  
  // Snappier feel (interactive elements)
  snappy: 'power2.out',
  
  // Dramatic cinematic (hero entrances)
  cinematic: 'power4.out',
} as const

// Premium CSS easing curves (for CSS transitions)
export const CSS_EASING = {
  // Standard smooth easing (most animations)
  smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
  
  // Snappier feel (interactive elements)
  snappy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  
  // Dramatic cinematic (hero entrances)
  cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const

// ======================
// MOVEMENT CONSTANTS
// ======================

export const MOVEMENT = {
  // Subtle vertical movement
  subtle: 20,
  
  // Standard vertical movement
  normal: 40,
  
  // Dramatic vertical movement
  dramatic: 60,
} as const

// ======================
// STAGGER DELAYS
// ======================

export const STAGGER = {
  // Tight stagger (character reveals, small lists)
  tight: 0.05,
  
  // Normal stagger (card grids, medium lists)
  normal: 0.08,
  
  // Relaxed stagger (large cards, hero elements)
  relaxed: 0.12,
} as const

// ======================
// SCALE CONSTANTS
// ======================

export const SCALE = {
  // Entrance scale (fade-in animations)
  entrance: 0.95,
  
  // Subtle hover (most interactive elements)
  hoverSubtle: 1.02,
  
  // Emphasis hover (cards, featured items)
  hoverEmphasis: 1.05,
} as const

// ======================
// ANIMATION PRESETS
// ======================

// GSAP Timeline Defaults
export const timelineDefaults = {
  ease: EASING.smooth,
  duration: DURATION.normal,
}

// Standard fade-up entrance
export const fadeUpConfig = {
  opacity: 0,
  y: MOVEMENT.normal,
  duration: DURATION.normal,
  ease: EASING.smooth,
}

// Subtle fade-up entrance
export const fadeUpSubtleConfig = {
  opacity: 0,
  y: MOVEMENT.subtle,
  duration: DURATION.fast,
  ease: EASING.smooth,
}

// Cinematic fade-up entrance
export const fadeUpCinematicConfig = {
  opacity: 0,
  y: MOVEMENT.dramatic,
  duration: DURATION.slow,
  ease: EASING.cinematic,
}

// Scale-in entrance
export const scaleInConfig = {
  opacity: 0,
  scale: SCALE.entrance,
  duration: DURATION.normal,
  ease: EASING.smooth,
}

// ======================
// CSS TRANSITION HELPERS
// ======================

// Generate CSS transition string
export const createTransition = (
  properties: string[],
  duration: keyof typeof DURATION = 'normal',
  easing: keyof typeof CSS_EASING = 'smooth'
): string => {
  const durationValue = DURATION[duration]
  const easingValue = CSS_EASING[easing]
  return properties
    .map(prop => `${prop} ${durationValue}s ${easingValue}`)
    .join(', ')
}

// Standard transition for most elements
export const standardTransition = createTransition(
  ['opacity', 'transform'],
  'normal',
  'smooth'
)

// Fast transition for interactive elements
export const fastTransition = createTransition(
  ['opacity', 'transform', 'background-color', 'border-color'],
  'fast',
  'smooth'
)

// ======================
// INTERSECTION OBSERVER CONFIG
// ======================

export const observerConfig = {
  threshold: 0.2,
  rootMargin: '0px 0px -10% 0px',
}

// ======================
// SCROLL TRIGGER DEFAULTS
// ======================

export const scrollTriggerDefaults = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none none',
}

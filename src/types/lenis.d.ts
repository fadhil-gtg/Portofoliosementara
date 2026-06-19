import type Lenis from 'lenis'

declare global {
  interface Window {
    portfolioLenis?: Lenis
    scrollSequenceReady?: boolean
  }
}

export {}

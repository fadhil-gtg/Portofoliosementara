const FRAME_COUNT = 217
const FRAME_PATH = (i: number) => `/assets/frames-mobile/${String(i).padStart(5, '0')}.png`
const PRIORITY_COUNT = 30

export const preloadedFrames: HTMLImageElement[] = []
let preloaded = false

/**
 * Start preloading all PNG frames as early as possible.
 * Priority frames (1-30) are loaded first for quick animation readiness.
 * Call this in main.tsx before React renders.
 */
export function preloadFrames() {
  if (preloaded) return
  preloaded = true

  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image()
    img.src = FRAME_PATH(i)
    preloadedFrames.push(img)
  }
}

export { PRIORITY_COUNT, FRAME_COUNT }

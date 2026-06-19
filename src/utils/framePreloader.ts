const FRAME_COUNT = 217
const FRAME_PATH = (i: number) => `/assets/frames-mobile/${String(i + 1).padStart(5, '0')}.png`

const WINDOW_SIZE = 30
const READY_THRESHOLD = 5

type Listener = () => void

class FrameWindowManager {
  private frames: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null)
  private windowStart = -1
  private windowEnd = -1
  private _ready = false
  private listeners: Set<Listener> = new Set()
  private loadedInWindow = 0

  get isReady() {
    return this._ready
  }

  getFrame(index: number): HTMLImageElement | null {
    return this.frames[index]
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  private notify() {
    this.listeners.forEach(l => l())
  }

  /**
   * Load a window of frames centered around targetIndex.
   * Unloads frames outside the window to free RAM.
   */
  loadWindow(targetIndex: number) {
    const half = Math.floor(WINDOW_SIZE / 2)
    const newStart = Math.max(0, targetIndex - half)
    const newEnd = Math.min(FRAME_COUNT - 1, newStart + WINDOW_SIZE - 1)

    // Skip if window hasn't changed
    if (newStart === this.windowStart && newEnd === this.windowEnd) return

    // Unload frames outside the new window
    for (let i = this.windowStart; i <= this.windowEnd; i++) {
      if (i >= 0 && (i < newStart || i > newEnd) && this.frames[i]) {
        this.frames[i] = null
      }
    }

    this.windowStart = newStart
    this.windowEnd = newEnd

    // Load frames within the new window
    let newLoads = 0
    for (let i = newStart; i <= newEnd; i++) {
      if (!this.frames[i]) {
        const img = new Image()
        img.onload = () => {
          this.loadedInWindow++
          if (!this._ready && this.loadedInWindow >= READY_THRESHOLD) {
            this._ready = true
          }
          this.notify()
        }
        img.src = FRAME_PATH(i)
        this.frames[i] = img
        newLoads++
      }
    }

    // If no new frames were loaded, notify anyway (window shift)
    if (newLoads === 0) this.notify()
  }

  /**
   * Preload the first window (frames 0..WINDOW_SIZE-1).
   * Call this early in main.tsx.
   */
  preloadFirstWindow() {
    this.loadWindow(0)
  }

  /**
   * Get the count of loaded frames in the current window.
   */
  getLoadedCount(): number {
    let count = 0
    for (let i = 0; i < FRAME_COUNT; i++) {
      if (this.frames[i]?.complete) count++
    }
    return count
  }

  destroy() {
    this.frames.fill(null)
    this.listeners.clear()
    this._ready = false
    this.loadedInWindow = 0
    this.windowStart = -1
    this.windowEnd = -1
  }
}

// Singleton
export const frameManager = new FrameWindowManager()
export { FRAME_COUNT, WINDOW_SIZE }

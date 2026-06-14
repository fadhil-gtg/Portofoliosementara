# Hooks Directory

Custom React hooks for reusable logic.

## Available Hooks

### useScrollTrigger
Wrapper for GSAP ScrollTrigger lifecycle management.

```typescript
const useScrollTrigger = (
  target: RefObject<HTMLElement>,
  animation: (gsap: typeof GSAP) => Timeline,
  options?: ScrollTrigger.Vars
) => void
```

### useScrollProgress
Get current scroll progress (0-1).

```typescript
const { progress } = useScrollProgress()
// progress: 0 (top) to 1 (bottom)
```

### useInView
Detect if element is in viewport.

```typescript
const { ref, isInView } = useInView(options)
```

### useWindowSize
Get and observe window dimensions.

```typescript
const { width, height } = useWindowSize()
```

### usePreferredMotion
Detect user's motion preference.

```typescript
const prefersReduced = usePreferredMotion()
// Returns true if user prefers reduced motion
```

## Hook Guidelines

1. **Naming:** Always use `use` prefix
2. **Dependencies:** Explicitly list all dependencies
3. **Cleanup:** Always clean up subscriptions/observers
4. **Documentation:** JSDoc with usage examples
5. **Testing:** Make pure, testable logic

## Adding Hooks

1. Create file: `hooks/useHookName.ts`
2. Export hook function with full types
3. Add cleanup/unmount logic
4. Document in this README
5. Export from `hooks/index.ts`

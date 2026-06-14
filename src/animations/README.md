# Animations Directory

GSAP configuration and animation orchestration.

## Structure

```
animations/
├── timelineConfigs.ts     # Reusable timeline configurations
├── scrollTriggerFactory.ts # ScrollTrigger factory functions
├── easingPresets.ts       # Custom easing functions
├── staggerDefaults.ts     # Stagger animation defaults
└── index.ts               # Export all animations
```

## Timeline Configuration

Create reusable animation patterns:

```typescript
// animations/timelineConfigs.ts
export const staggeredFadeUp = (targets: gsap.DOMTarget) => {
  return gsap.timeline()
    .to(targets, {
      duration: 0.6,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: 'power2.out',
    }, 0)
}
```

## ScrollTrigger Factory

Consistent ScrollTrigger setup:

```typescript
// animations/scrollTriggerFactory.ts
export const createScrollTrigger = (
  target: HTMLElement,
  onTrigger: () => void
) => {
  return ScrollTrigger.create({
    trigger: target,
    onEnter: onTrigger,
    once: true,
  })
}
```

## Easing Presets

Consistent easing across animations:

```typescript
// animations/easingPresets.ts
export const easing = {
  inOut: 'power2.inOut',
  out: 'power2.out',
  in: 'power2.in',
  bounce: 'back.out',
}
```

## Guidelines

1. **Composition:** Build complex animations from simple pieces
2. **Reusability:** Create factory functions for common patterns
3. **Performance:** Batch similar animations together
4. **Testing:** Extract pure animation logic from components
5. **Documentation:** Comment timing and easing choices

## Adding Animations

1. Create new configuration file
2. Export as factory function or timeline preset
3. Use in hooks or components
4. Add to animations/index.ts exports

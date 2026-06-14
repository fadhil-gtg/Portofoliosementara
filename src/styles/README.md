# Styles Directory

Global styling, design tokens, and CSS configuration.

## Structure

```
styles/
├── globals.css           # Global styles, animations, utilities
└── variables.css         # CSS custom properties (optional)
```

## Design Tokens

Defined as CSS custom properties in globals.css:

```css
:root {
  /* Colors */
  --color-paper: #FAFAF7;
  --color-ink: #1A1A17;
  
  /* Typography */
  --font-display: 'Fraunces', serif;
  --font-sans: 'Inter', sans-serif;
  
  /* Spacing (8px scale) */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  
  /* Animation */
  --duration-base: 300ms;
  --easing-out: cubic-bezier(0.0, 0, 0.2, 1);
}
```

## Using CSS Variables

In components:
```typescript
<div style={{ color: 'var(--color-ink)' }}>
  Text using CSS variable
</div>
```

Or in Tailwind:
```html
<div className="text-ink bg-paper">
  Uses Tailwind utilities backed by CSS variables
</div>
```

## Global Animations

Reusable keyframe animations:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn var(--duration-base) var(--easing-out);
}
```

## Guidelines

1. **Variables:** Use semantic naming (color-ink, not color-black)
2. **Consistency:** Maintain spacing scale (8px multiples)
3. **Animations:** Define keyframes, use CSS variables for timing
4. **Accessibility:** Respect prefers-reduced-motion
5. **Theming:** Use CSS variables for light/dark mode support

## Theme Implementation

Easy light/dark mode:

```css
:root {
  --color-paper: #FAFAF7;
  --color-ink: #1A1A17;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-paper: #1A1A17;
    --color-ink: #FAFAF7;
  }
}
```

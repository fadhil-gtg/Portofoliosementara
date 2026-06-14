# Assets Directory

Static files: images, fonts, and SVG icons.

## Structure

```
assets/
├── images/              # PNG, WebP, JPEG images
├── fonts/               # Custom font files
└── svgs/                # SVG icons and illustrations
```

## Images

Optimize images for web:

```
assets/images/
├── hero-bg.webp         # Modern format (smaller size)
├── hero-bg.jpg          # Fallback format
├── project-1.webp
├── project-1.jpg
└── ...
```

Import in components:
```typescript
import heroBg from '@/assets/images/hero-bg.webp'

export function Hero() {
  return <img src={heroBg} alt="Hero" />
}
```

## Fonts

Custom fonts should be:
1. Self-hosted (avoid external CDN latency)
2. Subset (only needed character ranges)
3. WOFF2 format (modern, compressed)

```
assets/fonts/
├── Fraunces-Regular.woff2
├── Fraunces-Bold.woff2
├── InterVar.woff2
└── SpaceMono-Regular.woff2
```

Usage in CSS:
```css
@font-face {
  font-family: 'Fraunces';
  src: url('/assets/fonts/Fraunces-Regular.woff2') format('woff2');
  font-weight: 400;
}
```

## SVG Icons

Use Lucide React for most icons:

```typescript
import { ArrowRight, Menu, X } from 'lucide-react'

export function Navigation() {
  return <Menu size={24} />
}
```

For custom SVGs, place in svgs/:

```
assets/svgs/
├── logo.svg
├── pattern.svg
└── illustration.svg
```

Import and use:
```typescript
import Logo from '@/assets/svgs/logo.svg?react'

export function Header() {
  return <Logo />
}
```

## Optimization Guidelines

1. **Images:** Use WebP with JPG fallbacks
2. **Size:** Optimize before adding (tools: TinyPNG, ImageOptim)
3. **Lazy load:** Use `loading="lazy"` on images
4. **Icons:** Prefer Lucide React over SVG files
5. **Fonts:** Subset only needed weights/styles

## Adding Assets

1. Optimize the asset file
2. Place in appropriate subfolder
3. Import using relative paths
4. Add alt text for images
5. Keep file naming consistent (kebab-case)

# Adhika Fadhil — Portfolio 2026

Premium portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Featuring cinematic animations with GSAP ScrollTrigger and smooth scrolling with Lenis.

## 🎨 Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first styling
- **GSAP 3.12+** - Animation library
- **ScrollTrigger** - Scroll-driven animations
- **Lenis** - Smooth scroll library
- **Lucide React** - Icon library

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components (Button, Card, etc)
├── sections/            # Full-page sections (Hero, About, Projects, etc)
├── hooks/               # Custom React hooks (useScrollTrigger, etc)
├── animations/          # GSAP timelines & animation config
├── styles/              # Global CSS & design tokens
├── utils/               # Helper functions & constants
└── assets/              # Images, fonts, SVG icons
```

### Component Organization

**`components/`** — Atomic UI Building Blocks
- Reusable across sections
- Pure presentational components
- Props-driven configuration
- Full TypeScript types

**`sections/`** — Full-Page Sections
- Major page areas (Hero, About, Skills, Projects, Contact)
- Own animation orchestration
- Manage internal state
- Can be lazy-loaded

**`hooks/`** — Custom React Hooks
- Animation logic extraction
- Reusable scroll/event handlers
- Type-safe custom hooks
- Performance optimization

**`animations/`** — GSAP Configuration
- Centralized timeline configs
- ScrollTrigger factory functions
- Easing presets & defaults
- Batch animation orchestration

**`styles/`** — Global Styling
- Design tokens (colors, spacing, fonts)
- CSS custom properties
- Animation keyframes
- Utility classes

**`utils/`** — Helper Functions
- Classname utilities (clsx, tailwind-merge wrapper)
- Format functions (dates, text, etc)
- Constants (animation delays, breakpoints)
- Type definitions

**`assets/`** — Static Files
- `images/` — PNG, WebP, JPEG
- `fonts/` — Custom typography
- `svgs/` — SVG icons & illustrations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:5173`

## 🏗️ Architecture

### Design Principles

- **Clean** — Minimal visual noise, elegant simplicity
- **Premium** — High-quality interactions and polish
- **Futuristic** — Modern aesthetics, forward-thinking design
- **Visual Storytelling** — Animations that enhance narrative
- **High Performance** — 60 FPS animations, optimized bundle
- **Smooth Interactions** — Fluid scroll, seamless transitions

### Animation Strategy

Animations are orchestrated via:

1. **Custom Hooks** — `useScrollTrigger`, `useInView`, etc.
2. **GSAP Timelines** — Reusable animation patterns
3. **Composition** — Build complex animations from simple pieces
4. **Batching** — Optimize multiple animations

### Performance Targets

- Bundle size: < 150KB gzipped
- Lighthouse: 90+ on all metrics
- Animations: 60 FPS smooth
- Time to Interactive: < 2s

## 📖 Detailed Documentation

See `ARCHITECTURE.md` for comprehensive architecture guide including:
- Detailed folder structure rationale
- Component design patterns
- Animation orchestration strategies
- Styling & design system
- Development workflow phases

## 🎯 Development Workflow

### Phase 1: Project Setup ✓
- [x] Vite + React + TypeScript setup
- [x] Tailwind CSS configuration
- [x] Folder structure
- [x] Base configurations

### Phase 2: Component Library (Next)
Build reusable atomic components:
- Button, Card, Badge components
- Form inputs & layouts
- Text reveal animations
- Icon wrappers

### Phase 3: Section Implementation
Implement page sections:
- Hero section with animations
- About & skills sections
- Projects showcase
- Contact form & footer

### Phase 4: Animation Integration
Orchestrate animations:
- GSAP ScrollTrigger setup
- Lenis smooth scroll integration
- Animation batching & optimization
- Performance tuning

### Phase 5: Polish & Deploy
Final touches:
- SEO optimization
- Accessibility audit
- Performance optimization
- Deploy to production

## 💻 Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality (if configured)
npm run lint         # Run linter
```

## 🎨 Styling Approach

### Tailwind CSS + Custom CSS Variables

Tailwind utilities for rapid development:
```html
<div className="p-6 rounded-lg bg-paper text-ink hover:bg-paper-1">
  Premium styling
</div>
```

CSS variables for dynamic theming:
```css
:root {
  --color-paper: #FAFAF7;
  --color-ink: #1A1A17;
  --font-display: 'Fraunces', serif;
}
```

Combine for power:
```css
.premium-card {
  @apply p-6 rounded-lg;
  background-color: var(--color-paper);
  color: var(--color-ink);
}
```

## 🔄 Component Example

```typescript
// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'font-sans font-semibold transition-colors',
        variant === 'primary' && 'bg-ink text-paper hover:bg-ink-1',
        variant === 'secondary' && 'bg-paper-2 text-ink hover:bg-paper-3',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
      )}
    >
      {children}
    </button>
  )
}
```

## 📝 Type Safety

All components are fully typed with TypeScript:
- Strict mode enabled
- No implicit `any`
- Full JSX type checking
- Exhaustive prop validation

## 🚢 Deployment

Build creates optimized production bundle:

```bash
npm run build
# Outputs to: dist/
```

Deploy `dist/` folder to your hosting:
- Vercel
- Netlify
- GitHub Pages
- Your own server

## 📚 Resources

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Vite Guide](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP Docs](https://gsap.com/)
- [Lenis Docs](https://lenis.studiofreight.com/)

## 📄 License

Designed & built by Adhika Fadhil. © 2026

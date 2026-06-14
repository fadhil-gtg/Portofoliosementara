# Architecture Documentation — Adhika Portfolio 2026

## Project Overview

Premium portfolio built with React 18, TypeScript, Vite, and Tailwind CSS. Designed to showcase a developer's work with cinematic animations powered by GSAP ScrollTrigger and smooth scrolling via Lenis.

**Stack:**
- React 18 (UI framework)
- TypeScript (type safety)
- Vite (build tool)
- Tailwind CSS (styling)
- GSAP 3.12+ (animations)
- Lenis (smooth scroll)
- Lucide React (icons)

**Design Principles:**
- Clean, premium aesthetic
- Futuristic visual storytelling
- High performance (60fps animations)
- Smooth interactions with minimal visual noise
- Accessibility-first component design

---

## Folder Structure & Rationale

```
src/
├── components/          # Reusable UI components
├── sections/            # Full-page sections
├── hooks/               # Custom React hooks
├── animations/          # GSAP timelines & config
├── styles/              # Global styling
├── utils/               # Helper functions
└── assets/              # Static files
```

### `components/` — Reusable UI Building Blocks

**Purpose:** Encapsulated, reusable UI elements (atoms & molecules)

**Examples:**
- `Button.tsx` - CTA button with hover states
- `Card.tsx` - Content card container
- `TextReveal.tsx` - Animated text reveal on scroll
- `Badge.tsx` - Skill/tech badge
- `SectionHeader.tsx` - Section title + label

**Why separate:**
- Promotes component reusability across sections
- Easier testing and documentation
- Encourages atomic design methodology
- Maintains consistency across project

### `sections/` — Full-Page Sections

**Purpose:** Major page sections with own animation logic

**Examples:**
- `Hero.tsx` - Landing hero with canvas/animations
- `About.tsx` - About section with bio & profile
- `Skills.tsx` - Skills grid with staggered animations
- `Projects.tsx` - Portfolio projects showcase
- `Contact.tsx` - Contact form & CTA

**Why separate:**
- Clear section boundary and responsibility
- Each section manages own scroll triggers
- Easier to maintain and iterate on sections
- Can lazy-load sections for performance

### `hooks/` — Custom React Hooks

**Purpose:** Logic extraction and reusability

**Examples:**
- `useScrollTrigger.ts` - GSAP ScrollTrigger setup wrapper
- `useScrollProgress.ts` - Get scroll progress percentage
- `useInView.ts` - Detect element in viewport
- `useWindowSize.ts` - Window dimensions with resize observer
- `usePreferredMotion.ts` - Detect prefers-reduced-motion

**Why separate:**
- DRY principle — reuse animation logic
- Separation of concerns (logic vs presentation)
- Easier testing of animation logic
- Consistent animation patterns across sections

### `animations/` — GSAP Configuration

**Purpose:** Centralized animation orchestration

**Examples:**
- `timelineConfigs.ts` - Reusable timeline configurations
- `scrollTriggerFactory.ts` - Factory for creating ScrollTrigger instances
- `easingPresets.ts` - Custom easing functions
- `staggerDefaults.ts` - Stagger animation defaults

**Why separate:**
- Keeps animation logic out of components
- Reusable animation patterns
- Easier to tweak animation timings
- Performance optimization (batch animations)

### `styles/` — Global Styling

**Purpose:** Global CSS, design tokens, Tailwind config

**Files:**
- `globals.css` - Global styles, animations, utilities
- CSS variables for consistent theming
- Animation keyframes
- Utility classes

**Why separate:**
- Centralized design system
- CSS variable consistency
- Easier theme management
- Better CSS organization

### `utils/` — Helper Functions

**Purpose:** Pure utility functions and constants

**Examples:**
- `classNames.ts` - clsx wrapper for conditional classes
- `cn.ts` - tailwind-merge + classNames utility
- `constants.ts` - App-wide constants
- `formatters.ts` - Date, number formatting
- `delays.ts` - Animation delay configurations

**Why separate:**
- Reusable helper functions
- Keeps components clean
- Type-safe constants
- Better maintainability

### `assets/` — Static Files

**Structure:**
```
assets/
├── images/      # PNG, WebP, JPEG
├── fonts/       # Custom fonts (if any)
└── svgs/        # SVG icons (fallbacks)
```

**Why separate:**
- Organized media management
- Easy optimization with Vite
- Clear asset dependencies
- Optimized image handling

---

## Component Architecture

### Atomic Design Pattern

**Atoms (Basic Components)**
- Button
- Badge
- Label
- Icon wrapper

**Molecules (Composed Components)**
- Card with heading + description
- Form field (input + label + error)
- Navigation link with icon

**Organisms (Complex Sections)**
- Hero section
- Project card with image + info
- Contact form

### Component API Design

**Props Pattern:**
```typescript
interface ComponentProps {
  // Content
  children?: React.ReactNode
  className?: string
  
  // Behavior
  onClick?: () => void
  disabled?: boolean
  
  // Styling variants
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}
```

**Why this pattern:**
- Consistent API across components
- Flexible but type-safe
- Easy to maintain
- Supports composition

---

## Animation Architecture

### GSAP Integration Pattern

**useScrollTrigger Hook:**
```typescript
// Wraps GSAP ScrollTrigger setup
const useScrollTrigger = (
  target: RefObject<HTMLElement>,
  animation: (gsap: typeof GSAP) => gsap.core.Timeline,
  options?: ScrollTrigger.Vars
) => {
  // Setup ScrollTrigger on mount
  // Cleanup on unmount
}
```

**Why wrapper hook:**
- Handles lifecycle management (create/destroy)
- Consistent ScrollTrigger configuration
- Easier to batch animations
- Reduced boilerplate

### Animation Orchestration

**Principle: Composition over Configuration**

Instead of:
```typescript
// Complex single timeline
gsap.timeline()
  .to(...) // 100 lines
```

Use:
```typescript
// Composed animations
const staggeredCards = staggerAnimation(items)
const textReveals = textRevealAnimation(headings)
const parallax = parallaxAnimation(sections)
```

**Why composition:**
- Reusable animation patterns
- Easier to understand and maintain
- Performance optimization via batching
- Clean separation of concerns

### Performance Considerations

1. **Batch similar animations:**
   - Group stagger animations
   - Batch ScrollTrigger creations
   - Use GSAP's batch() method

2. **Lazy load animations:**
   - Only create animations for visible sections
   - Destroy animations on unmount
   - Use React Suspense for code-split sections

3. **Use efficient easing:**
   - Prefer GPU-accelerated properties (transform, opacity)
   - Avoid animating height/width
   - Use will-change CSS sparingly

---

## Styling & Design System

### CSS Variable Structure

```css
:root {
  /* Colors - semantic naming */
  --color-paper: #FAFAF7;      /* Background */
  --color-ink: #1A1A17;        /* Text */
  
  /* Typography - semantic stacks */
  --font-display: 'Fraunces', serif;
  --font-sans: 'Inter', sans-serif;
  
  /* Spacing - 8px scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  
  /* Animation - predictable */
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --easing-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Why semantic naming:**
- Self-documenting
- Easy to reason about
- Supports light/dark mode switching
- Consistent across design system

### Tailwind CSS Configuration

**Customization:**
```javascript
// tailwind.config.js
theme: {
  extend: {
    fontFamily: { display, sans, mono },
    colors: { paper, ink },
    spacing: { safe-top, safe-bottom },
  }
}
```

**Why extend instead of override:**
- Preserves Tailwind defaults
- Adds custom tokens on top
- Better for maintenance
- Flexibility for future updates

---

## Development Workflow

### Phase 1: Project Setup ✓
- Vite + React + TypeScript
- Tailwind CSS configuration
- Folder structure
- Base configurations

### Phase 2: Component Library (Next)
- Build atomic components
- Document component APIs
- Create Storybook (optional)
- Test components

### Phase 3: Section Implementation
- Implement Hero section
- Build About, Skills sections
- Add Projects showcase
- Create Contact section

### Phase 4: Animation Integration
- GSAP ScrollTrigger setup
- Lenis smooth scroll
- Animation orchestration
- Performance optimization

### Phase 5: Polish & Deploy
- SEO optimization
- Performance audits
- Accessibility testing
- Build & deploy

---

## Performance Targets

- **Bundle size:** < 150KB gzipped (excluding images)
- **Lighthouse:** 90+ on all metrics
- **Animation:** 60 FPS smooth scrolling
- **Time to Interactive:** < 2s

---

## File Naming Conventions

- Components: PascalCase (Button.tsx, TextReveal.tsx)
- Hooks: camelCase with 'use' prefix (useScrollTrigger.ts)
- Utilities: camelCase (classNames.ts, formatters.ts)
- Constants: UPPER_SNAKE_CASE (ANIMATION_DELAY.ts)
- Sections: PascalCase (Hero.tsx, About.tsx)

---

## Type Safety

**All components are fully typed:**
```typescript
interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
}

const Component: React.FC<Props> = ({ ... }) => {
  // TypeScript ensures prop usage
}
```

---

## Next Steps

1. Run `npm run dev` to start development server
2. Create reusable components in `src/components/`
3. Build sections in `src/sections/`
4. Implement animations via custom hooks
5. Test and iterate


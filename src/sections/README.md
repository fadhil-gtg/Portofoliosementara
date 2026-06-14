# Sections Directory

Full-page sections with scroll animations and internal state.

## Structure

```
sections/
├── Hero/
│   ├── Hero.tsx         # Hero section component
│   ├── Hero.animations.ts # Hero animations
│   └── Hero.types.ts    # Type definitions
├── About/
│   ├── About.tsx
│   └── About.animations.ts
├── Skills/
│   ├── Skills.tsx
│   └── Skills.animations.ts
├── Projects/
│   ├── Projects.tsx
│   └── Projects.animations.ts
├── Contact/
│   ├── Contact.tsx
│   └── Contact.animations.ts
└── index.ts             # Exports all sections
```

## Section Pattern

Each section follows this pattern:

```typescript
// sections/Hero/Hero.tsx
import { useScrollTrigger } from '@/hooks'
import { heroAnimation } from './Hero.animations'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  
  useScrollTrigger(ref, heroAnimation)
  
  return (
    <section ref={ref} className="min-h-screen">
      {/* Content */}
    </section>
  )
}
```

## Guidelines

1. **Organization:** Group section + animations + types in folder
2. **Animations:** Extract animation logic to separate .animations.ts file
3. **State:** Keep section state local, lift if needed
4. **Performance:** Use lazy loading for off-screen sections
5. **Naming:** Use PascalCase for components, camelCase for functions

## Adding Sections

1. Create folder: `sections/SectionName/`
2. Create `SectionName.tsx` with component
3. Create `SectionName.animations.ts` with animation logic
4. Create `SectionName.types.ts` if needed
5. Export from `sections/index.ts`

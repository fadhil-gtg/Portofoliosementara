<!-- src/components/README.md -->
# Components Directory

Reusable UI components following atomic design principles.

## Structure

```
components/
├── Button.tsx           # Primary CTA button
├── Card.tsx             # Content card container
├── Badge.tsx            # Skill/tech tag
├── TextReveal.tsx       # Animated text reveal
├── SectionHeader.tsx    # Section title + label
└── index.ts             # Exports all components
```

## Usage

All components are fully typed and export default.

```typescript
import { Button, Card, Badge } from '@/components'

export function Example() {
  return (
    <Card>
      <h3>Title</h3>
      <p>Description</p>
      <Badge>React</Badge>
      <Button onClick={() => {}}>Learn More</Button>
    </Card>
  )
}
```

## Component Guidelines

1. **Props:** Use TypeScript interfaces, make optional props explicit
2. **Styling:** Tailwind utility classes + cn() helper
3. **Naming:** PascalCase for component names
4. **Export:** Use named export + index.ts barrel export
5. **Documentation:** JSDoc comments for public APIs

## Adding Components

1. Create new file: `components/ComponentName.tsx`
2. Define TypeScript interface for props
3. Implement component with full type safety
4. Add to `index.ts` exports
5. Document usage in this README

# CSS & Styling Standards

## Organization
All global styles, including custom utilities like `glass`, should reside in `src/styles/global.css`.

## Tailwind Layers
Use `@layer` directives to avoid specificity issues:

```css
@layer components {
  .glass {
    background: rgba(248, 249, 250, 0.82);
    backdrop-filter: blur(32px);
    border-bottom: 1px solid rgba(195, 198, 213, 0.4);
  }
}
```

## Scoped Styles
Prefer scoped `<style>` blocks in `.astro` components for component-specific logic.

## Animations
Use CSS `@keyframes` for entrance animations in Astro components to maintain a "zero-JS" footprint. Reserve Framer Motion (`framer-motion`) only for complex React islands.

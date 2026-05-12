---
name: villa-development-standards
description: Standards and workflows for high-performance Astro development. Use when building or modifying components in the Villa Ramann project to ensure perfect SEO, performance, and Cloudflare compatibility.
---

# Villa Development Standards

This skill ensures that all development adheres to the high-performance "Islands Architecture" established in this project.

## Core Workflows

### 1. Component Selection (Astro vs. React)
- **Default to Astro (`.astro`)**: Use for all static content, headers, footers, and layouts. These components generate zero JavaScript by default.
- **Use React (`.jsx`) only for interactivity**: Use when a component requires state, effects, or complex client-side libraries (e.g., forms, interactive maps).
- **SEO Priority**: Critical content (H1s, descriptions, nav links) MUST be in Astro components for maximum crawlability.

### 2. Image Optimization for Production
Avoid using the Astro `<Image>` component for high-impact visual elements like Hero images or Logos if deploying to Cloudflare Pages. Instead, use standard `<img>` tags with Astro metadata to prevent optimization conflicts.
- See [image-optimization.md](references/image-optimization.md) for implementation details.

### 3. CSS & Tailwind Standards
- **Global Utilities**: Custom classes like `glass` must be defined in `@layer components` or `@layer utilities` within the global CSS.
- **Tailwind @apply**: If using `@apply` in an Astro `<style>` block for a global class, ensure the global class is discoverable by PostCSS.
- See [css-standards.md](references/css-standards.md).

## Reference Guides
- **Component Patterns**: [component-standards.md](references/component-standards.md)
- **Troubleshooting Cloudflare**: [cloudflare-pages.md](references/cloudflare-pages.md)

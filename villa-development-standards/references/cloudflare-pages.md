# Cloudflare Pages Troubleshooting

## 1. Images Not Showing
**Problem**: Images imported via `astro:assets` or using `<Image>` component fail to render.
**Fix**: Use standard `<img>` tags with explicit `.src` and dimensions.

## 2. "Class does not exist" Build Error
**Problem**: `[astro:build] The class does not exist. If it is a custom class, make sure it is defined within a @layer directive.`
**Cause**: Tailwind's `@apply` in an Astro `<style>` block cannot find a class defined in a separate CSS file.
**Fix**: 
1. Define the class in `src/styles/global.css` inside `@layer components`.
2. Or, define the class directly in the component's `<style>` block where it is being applied.

## 3. Environment Variables
Ensure all `VITE_` prefixed variables are mirrored in the Cloudflare Pages Dashboard under **Settings > Variables**.

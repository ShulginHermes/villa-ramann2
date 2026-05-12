# Image Optimization

## The Challenge
Cloudflare Pages' automatic optimization (Mirage/Rocket Loader) often conflicts with the Astro `<Image>` component's lazy-loading and dynamic resizing, leading to images not appearing in production.

## The Solution
For critical images (Hero, Logo), use standard `<img>` tags but leverage Astro's import metadata.

### Standard Pattern
```astro
---
import heroImage from '@/assets/hero.jpg';
---
<img 
  src={heroImage.src} 
  width={heroImage.width} 
  height={heroImage.height} 
  alt="Description"
  loading="eager" 
  class="w-full h-full object-cover"
/>
```

### Benefits
1. **Compatibility**: Works across all CDNs and browsers without JavaScript.
2. **SEO**: Crawlers easily identify and index standard `<img>` tags.
3. **Performance**: Provides intrinsic dimensions to prevent Layout Shift (CLS).

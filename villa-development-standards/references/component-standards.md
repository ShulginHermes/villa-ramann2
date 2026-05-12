# Component Standards

## Astro Components (`.astro`)
Use for structural and content-heavy parts of the page.

### Pattern: Static Header with CSS Animations
```astro
---
import Logo from '@/assets/logo.png';
---
<header class="opacity-0 animate-fade-in">
  <img src={Logo.src} width={Logo.width} height={Logo.height} alt="Logo" />
</header>

<style>
  @keyframes fadeIn { ... }
  .animate-fade-in { animation: fadeIn 0.8s forwards; }
</style>
```

## React Components (`.jsx`)
Use for "Islands" of interactivity.

### Pattern: Client-side Form
```jsx
export default function InquireForm() {
  const [status, setStatus] = useState('idle');
  return <form>...</form>;
}
```

### Directive Usage
- `client:load`: For high-priority interactive elements (e.g., global nav toggles).
- `client:visible`: For below-the-fold islands (e.g., maps, carousels).
- `client:idle`: For low-priority scripts (e.g., chat widgets).

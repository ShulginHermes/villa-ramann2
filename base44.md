vite.config.js
```
import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
  ]
});
```

tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F8F9FA',
        foreground: '#191C1D',
        card: { DEFAULT: '#ffffff', foreground: '#191C1D' },
        popover: { DEFAULT: '#ffffff', foreground: '#191C1D' },
        primary: {
          DEFAULT: '#0046A7',
          foreground: '#ffffff',
          container: '#2B5FC3',
          light: '#D9E2FF',
        },
        secondary: {
          DEFAULT: '#575F69',
          foreground: '#ffffff',
          container: '#DBE3EF',
        },
        muted: { DEFAULT: '#EDEEEF', foreground: '#737784' },
        accent: { DEFAULT: '#DBE3EF', foreground: '#0046A7' },
        destructive: { DEFAULT: '#BA1A1A', foreground: '#ffffff' },
        border: '#C3C6D5',
        input: '#C3C6D5',
        ring: '#0046A7',
        surface: {
          DEFAULT: '#F8F9FA',
          dim: '#D9DADB',
          low: '#F3F4F5',
          container: '#EDEEEF',
          high: '#E7E8E9',
        },
        outline: { DEFAULT: '#737784', variant: '#C3C6D5' },
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      letterSpacing: {
        label: '0.1em',
        'wide-label': '0.18em',
      },
      fontSize: {
        'hero': ['clamp(3rem, 7vw, 5.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'title': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'label-sm': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      spacing: {
        section: '10rem',
        'section-sm': '6rem',
        gutter: '2rem',
        18: '4.5rem',
        22: '5.5rem',
        120: '30rem',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

postcss.config.js:
```
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

package.json:
```
{
  "name": "base44-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --quiet",
    "lint:fix": "eslint . --fix",
    "typecheck": "tsc -p ./jsconfig.json",
    "preview": "vite preview"
  },
  "dependencies": {
    "@base44/sdk": "^0.8.27",
    "@base44/vite-plugin": "^1.0.13",
    "@hello-pangea/dnd": "^17.0.0",
    "@hookform/resolvers": "^4.1.2",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-aspect-ratio": "^1.1.2",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.3",
    "@radix-ui/react-context-menu": "^2.2.6",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-hover-card": "^1.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-navigation-menu": "^1.2.5",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.2",
    "@radix-ui/react-toggle": "^1.1.2",
    "@radix-ui/react-toggle-group": "^1.1.2",
    "@radix-ui/react-tooltip": "^1.1.8",
    "@stripe/react-stripe-js": "^3.0.0",
    "@stripe/stripe-js": "^5.2.0",
    "@tanstack/react-query": "^5.84.1",
    "canvas-confetti": "^1.9.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.5.2",
    "framer-motion": "^11.16.4",
    "html2canvas": "^1.4.1",
    "input-otp": "^1.4.2",
    "jspdf": "^4.0.0",
    "lodash": "^4.17.21",
    "lucide-react": "^0.475.0",
    "moment": "^2.30.1",
    "next-themes": "^0.4.4",
    "react": "^18.2.0",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.54.2",
    "react-hot-toast": "^2.6.0",
    "react-leaflet": "^4.2.1",
    "react-markdown": "^9.0.1",
    "react-quill": "^2.0.0",
    "react-resizable-panels": "^2.1.7",
    "react-router-dom": "^6.26.0",
    "recharts": "^2.15.4",
    "sonner": "^2.0.1",
    "tailwind-merge": "^3.0.2",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.171.0",
    "vaul": "^1.1.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.19.0",
    "@types/node": "^22.13.5",
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "baseline-browser-mapping": "^2.8.32",
    "eslint": "^9.19.0",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.18",
    "eslint-plugin-unused-imports": "^4.3.0",
    "globals": "^15.14.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.2",
    "vite": "^6.1.0"
  }
}
```

jsconfig.json:
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "bundler",
    "lib": ["esnext", "dom"],
    "target": "esnext",
    "checkJs": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "types": []
  },
  "include": ["src/components/**/*.js", "src/pages/**/*.jsx", "src/Layout.jsx"],
  "exclude": ["node_modules", "dist", "src/vite-plugins", "src/components/ui", "src/api", "src/lib"]
} 
```

eslint.config.js:
```
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginUnusedImports from "eslint-plugin-unused-imports";

export default [
  {
    files: [
      "src/components/**/*.{js,mjs,cjs,jsx}",
      "src/pages/**/*.{js,mjs,cjs,jsx}",
      "src/Layout.jsx",
    ],
    ignores: ["src/lib/**/*", "src/components/ui/**/*"],
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": [
        "error",
        { ignore: ["cmdk-input-wrapper", "toast-close"] },
      ],
      "react-hooks/rules-of-hooks": "error",
    },
  },
];
```

components.json:
```
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

src/main.jsx:
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

```

src/index.css:
```
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Manrope:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 248 249 250;
    --foreground: 25 28 29;
    --card: 255 255 255;
    --card-foreground: 25 28 29;
    --popover: 255 255 255;
    --popover-foreground: 25 28 29;
    --primary: 0 70 167;
    --primary-foreground: 255 255 255;
    --secondary: 219 227 239;
    --secondary-foreground: 67 70 83;
    --muted: 237 238 239;
    --muted-foreground: 115 119 132;
    --accent: 219 227 239;
    --accent-foreground: 0 70 167;
    --destructive: 186 26 26;
    --destructive-foreground: 255 255 255;
    --border: 195 198 213;
    --input: 195 198 213;
    --ring: 0 70 167;
    --radius: 0.25rem;

    /* Custom tokens */
    --color-primary: #0046A7;
    --color-primary-container: #2B5FC3;
    --color-on-primary: #ffffff;
    --color-surface: #F8F9FA;
    --color-surface-container: #EDEEEF;
    --color-surface-container-low: #F3F4F5;
    --color-on-surface: #191C1D;
    --color-on-surface-variant: #434653;
    --color-secondary: #575F69;
    --color-secondary-container: #DBE3EF;
    --color-outline: #737784;
    --color-outline-variant: #C3C6D5;

    --font-serif: 'Noto Serif', Georgia, serif;
    --font-sans: 'Manrope', system-ui, sans-serif;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    background-color: var(--color-surface);
    color: var(--color-on-surface);
    font-family: var(--font-sans);
    font-size: 18px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-serif);
    font-weight: 400;
    line-height: 1.2;
  }
}

@layer utilities {
  .font-serif { font-family: var(--font-serif); }
  .font-sans { font-family: var(--font-sans); }

  .tracking-widest-label {
    letter-spacing: 0.18em;
  }

  .glass {
    background: rgba(248, 249, 250, 0.82);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    border-bottom: 1px solid rgba(195, 198, 213, 0.4);
  }

  .glass-dark {
    background: rgba(0, 70, 167, 0.08);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(195, 198, 213, 0.35);
  }

  .text-primary-brand { color: var(--color-primary); }
  .bg-primary-brand { background-color: var(--color-primary); }
  .bg-secondary-brand { background-color: var(--color-secondary-container); }
  .border-brand { border-color: var(--color-outline-variant); }

  .ken-burns {
    animation: kenBurns 12s ease-in-out infinite alternate;
  }

  @keyframes kenBurns {
    from { transform: scale(1.0); }
    to   { transform: scale(1.06); }
  }

  .section-rule {
    border-top: 1px solid var(--color-outline-variant);
  }

  .img-zoom {
    overflow: hidden;
  }
  .img-zoom img {
    transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .img-zoom:hover img {
    transform: scale(1.04);
  }

  .magnetic-btn {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  }
  .magnetic-btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 16px 48px rgba(0, 70, 167, 0.28);
  }

  .parallax-text {
    will-change: transform;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-surface); }
::-webkit-scrollbar-thumb { background: var(--color-outline-variant); border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-primary); }

/* Focus visible */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 2px;
}
```

src/App.jsx:
```
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
// Add page imports here
import VillaLanding from './pages/VillaLanding';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<VillaLanding />} />
      {/* Add your page Route elements here */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
```

Collapse file tree


src/pages/VillaLanding.jsx:
```
import Navbar from '@/components/villa/Navbar';
import HeroSection from '@/components/villa/HeroSection';
import OverviewSection from '@/components/villa/OverviewSection';
import GallerySection from '@/components/villa/GallerySection';
import AmenitiesSection from '@/components/villa/AmenitiesSection';
import NearbySection from '@/components/villa/NearbySection';
import TestimonialsSection from '@/components/villa/TestimonialsSection';
import InquireSection from '@/components/villa/InquireSection';
import Footer from '@/components/villa/Footer';

export default function VillaLanding() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <GallerySection />
      <AmenitiesSection />
      <NearbySection />
      <TestimonialsSection />
      <InquireSection />
      <Footer />
    </div>
  );
}
```

src/lib/utils.js:
```
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 


export const isIframe = window.self !== window.top;
```

src/lib/query-client.js:
```
import { QueryClient } from '@tanstack/react-query';


export const queryClientInstance = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});
```

src/lib/PageNotFound.jsx:
```
import { useLocation } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';


export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await base44.auth.me();
                return { user, isAuthenticated: true };
            } catch (error) {
                return { user: null, isAuthenticated: false };
            }
        }
    });
    
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    {/* 404 Error Code */}
                    <div className="space-y-2">
                        <h1 className="text-7xl font-light text-slate-300">404</h1>
                        <div className="h-0.5 w-16 bg-slate-200 mx-auto"></div>
                    </div>
                    
                    {/* Main Message */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-medium text-slate-800">
                            Page Not Found
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            The page <span className="font-medium text-slate-700">"{pageName}"</span> could not be found in this application.
                        </p>
                    </div>
                    
                    {/* Admin Note */}
                    {isFetched && authData.isAuthenticated && authData.user?.role === 'admin' && (
                        <div className="mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                </div>
                                <div className="text-left space-y-1">
                                    <p className="text-sm font-medium text-slate-700">Admin Note</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Action Button */}
                    <div className="pt-6">
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Go Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
```

src/lib/AuthContext.jsx:
```
import React, { createContext, useState, useContext, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { appParams } from '@/lib/app-params';
import { createAxiosClient } from '@base44/sdk/dist/utils/axios-client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [appPublicSettings, setAppPublicSettings] = useState(null); // Contains only { id, public_settings }

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);
      
      // First, check app public settings (with token if available)
      // This will tell us if auth is required, user not registered, etc.
      const appClient = createAxiosClient({
        baseURL: `/api/apps/public`,
        headers: {
          'X-App-Id': appParams.appId
        },
        token: appParams.token, // Include token if available
        interceptResponses: true
      });
      
      try {
        const publicSettings = await appClient.get(`/prod/public-settings/by-id/${appParams.appId}`);
        setAppPublicSettings(publicSettings);
        
        // If we got the app public settings successfully, check if user is authenticated
        if (appParams.token) {
          await checkUserAuth();
        } else {
          setIsLoadingAuth(false);
          setIsAuthenticated(false);
          setAuthChecked(true);
        }
        setIsLoadingPublicSettings(false);
      } catch (appError) {
        console.error('App state check failed:', appError);
        
        // Handle app-level errors
        if (appError.status === 403 && appError.data?.extra_data?.reason) {
          const reason = appError.data.extra_data.reason;
          if (reason === 'auth_required') {
            setAuthError({
              type: 'auth_required',
              message: 'Authentication required'
            });
          } else if (reason === 'user_not_registered') {
            setAuthError({
              type: 'user_not_registered',
              message: 'User not registered for this app'
            });
          } else {
            setAuthError({
              type: reason,
              message: appError.message
            });
          }
        } else {
          setAuthError({
            type: 'unknown',
            message: appError.message || 'Failed to load app'
          });
        }
        setIsLoadingPublicSettings(false);
        setIsLoadingAuth(false);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setAuthError({
        type: 'unknown',
        message: error.message || 'An unexpected error occurred'
      });
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
    }
  };

  const checkUserAuth = async () => {
    try {
      // Now check if the user is authenticated
      setIsLoadingAuth(true);
      const currentUser = await base44.auth.me();
      setUser(currentUser);
      setIsAuthenticated(true);
      setIsLoadingAuth(false);
      setAuthChecked(true);
    } catch (error) {
      console.error('User auth check failed:', error);
      setIsLoadingAuth(false);
      setIsAuthenticated(false);
      setAuthChecked(true);
      
      // If user auth fails, it might be an expired token
      if (error.status === 401 || error.status === 403) {
        setAuthError({
          type: 'auth_required',
          message: 'Authentication required'
        });
      }
    }
  };

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    
    if (shouldRedirect) {
      // Use the SDK's logout method which handles token cleanup and redirect
      base44.auth.logout(window.location.href);
    } else {
      // Just remove the token without redirect
      base44.auth.logout();
    }
  };

  const navigateToLogin = () => {
    // Use the SDK's redirectToLogin method
    base44.auth.redirectToLogin(window.location.href);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      authChecked,
      logout,
      navigateToLogin,
      checkUserAuth,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

src/lib/app-params.js:
```
const isNode = typeof window === 'undefined';
const windowObj = isNode ? { localStorage: new Map() } : window;
const storage = windowObj.localStorage;

const toSnakeCase = (str) => {
	return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {}) => {
	if (isNode) {
		return defaultValue;
	}
	const storageKey = `base44_${toSnakeCase(paramName)}`;
	const urlParams = new URLSearchParams(window.location.search);
	const searchParam = urlParams.get(paramName);
	if (removeFromUrl) {
		urlParams.delete(paramName);
		const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""
			}${window.location.hash}`;
		window.history.replaceState({}, document.title, newUrl);
	}
	if (searchParam) {
		storage.setItem(storageKey, searchParam);
		return searchParam;
	}
	if (defaultValue) {
		storage.setItem(storageKey, defaultValue);
		return defaultValue;
	}
	const storedValue = storage.getItem(storageKey);
	if (storedValue) {
		return storedValue;
	}
	return null;
}

const getAppParams = () => {
	if (getAppParamValue("clear_access_token") === 'true') {
		storage.removeItem('base44_access_token');
		storage.removeItem('token');
	}
	return {
		appId: getAppParamValue("app_id", { defaultValue: import.meta.env.VITE_BASE44_APP_ID }),
		token: getAppParamValue("access_token", { removeFromUrl: true }),
		fromUrl: getAppParamValue("from_url", { defaultValue: window.location.href }),
		functionsVersion: getAppParamValue("functions_version", { defaultValue: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION }),
		appBaseUrl: getAppParamValue("app_base_url", { defaultValue: import.meta.env.VITE_BASE44_APP_BASE_URL }),
	}
}


export const appParams = {
	...getAppParams()
}

```

src/hooks/use-mobile.jsx:
```
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange);
  }, [])

  return !!isMobile
}

```

src/components/UserNotRegisteredError.jsx:
```
import React from 'react';

const UserNotRegisteredError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Access Restricted</h1>
          <p className="text-slate-600 mb-8">
            You are not registered to use this application. Please contact the app administrator to request access.
          </p>
          <div className="p-4 bg-slate-50 rounded-md text-sm text-slate-600">
            <p>If you believe this is an error, you can:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Verify you are logged in with the correct account</li>
              <li>Contact the app administrator for access</li>
              <li>Try logging out and back in again</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotRegisteredError;

```

src/components/ProtectedRoute.jsx:
```
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

const DefaultFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
  </div>
);

export default function ProtectedRoute({ fallback = <DefaultFallback />, unauthenticatedElement }) {
  const { isAuthenticated, isLoadingAuth, authChecked, authError, checkUserAuth } = useAuth();

  useEffect(() => {
    if (!authChecked && !isLoadingAuth) {
      checkUserAuth();
    }
  }, [authChecked, isLoadingAuth, checkUserAuth]);

  if (isLoadingAuth || !authChecked) {
    return fallback;
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    }
    return unauthenticatedElement;
  }

  if (!isAuthenticated) {
    return unauthenticatedElement;
  }

  return <Outlet />;
}
```

src/components/villa/AmenitiesSection.jsx:
```
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Waves, ChefHat, Car, Wifi, Dumbbell, Wind, Shield, Coffee } from 'lucide-react';

const amenities = [
  { icon: Waves, label: 'Infinity Pool', desc: '18-metre heated infinity pool aligned to the sunset horizon' },
  { icon: ChefHat, label: 'Private Chef', desc: 'In-residence culinary team serving Mediterranean & international cuisine' },
  { icon: Car, label: 'Chauffeured Transfer', desc: 'S-Class Mercedes fleet; airport, marina, and city transfers included' },
  { icon: Wifi, label: 'Fibre Connectivity', desc: '1Gbps symmetric fibre with mesh Wi-Fi throughout the estate' },
  { icon: Dumbbell, label: 'Wellness Studio', desc: 'Equipped gym, yoga deck, and private spa with hammam' },
  { icon: Wind, label: 'Climate Control', desc: 'Zoned HVAC with geothermal cooling for year-round comfort' },
  { icon: Shield, label: '24/7 Concierge', desc: 'Dedicated villa manager available around the clock' },
  { icon: Coffee, label: 'Daily Housekeeping', desc: 'Twice-daily housekeeping service with turn-down ritual' },
];

const tags = [
  'Private Pool', 'Sea View', 'Beachfront', 'Air Conditioning',
  'Pet Friendly', 'Private Parking', 'Helipad Access', 'Wine Cellar',
  'Home Cinema', 'Smart Home', 'BBQ Terrace', 'Outdoor Shower',
];

export default function AmenitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="amenities" className="py-section" style={{ backgroundColor: '#F3F4F5' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4"
        >
          Inclusions
        </motion.p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-title text-foreground max-w-md"
          >
            Every detail,<br />considered.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-sans text-body-md text-muted-foreground max-w-sm leading-relaxed"
          >
            From helipad to home cinema, every amenity is curated to eliminate every friction point of a luxury stay.
          </motion.p>
        </div>

        {/* Amenity Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/25 rounded-xl overflow-hidden border border-outline-variant/25 mb-16"
        >
          {amenities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.06 }}
              className="bg-surface-low p-8 flex flex-col gap-4 group hover:bg-white transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,70,167,0.08)' }}>
                <a.icon className="w-5 h-5" style={{ color: '#0046A7' }} />
              </div>
              <div>
                <p className="font-sans font-semibold text-foreground mb-2">{a.label}</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-[10px] font-sans font-semibold tracking-widest-label uppercase text-muted-foreground mb-5">
            Property Features
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-[12px] font-sans font-medium rounded-full"
                style={{
                  backgroundColor: '#DBE3EF',
                  color: '#0046A7',
                  border: '1px solid rgba(0,70,167,0.15)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

src/components/villa/Footer.jsx:
```
export default function Footer() {
  return (
    <footer className="py-16 border-t border-outline-variant/40 bg-surface">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-lg text-foreground tracking-wide mb-1">Azure Serenity</p>
            <p className="font-sans text-xs tracking-widest-label uppercase text-muted-foreground">Limassol, Cyprus — Private Estate</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            {['Privacy Policy', 'Terms of Stay', 'Contact'].map((link) => (
              <button key={link} className="font-sans text-xs tracking-label uppercase text-muted-foreground hover:text-primary transition-colors duration-300 text-left">
                {link}
              </button>
            ))}
          </div>
          <p className="font-sans text-xs text-muted-foreground">
            © 2024 Azure Serenity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

src/components/villa/GallerySection.jsx:
```
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85&auto=format&fit=crop',
    alt: 'Infinity pool at dusk',
    label: 'Infinity Pool — West Terrace',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=85&auto=format&fit=crop',
    alt: 'Master bedroom suite',
    label: 'Master Suite — Upper Level',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85&auto=format&fit=crop',
    alt: 'Living area with sea view',
    label: 'Grand Salon — Ground Floor',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=900&q=85&auto=format&fit=crop',
    alt: 'Private outdoor dining',
    label: 'Al Fresco Dining — East Veranda',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=85&auto=format&fit=crop',
    alt: 'Bathroom with sea view',
    label: 'En-Suite — Guest Room 3',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&q=85&auto=format&fit=crop',
    alt: 'Villa aerial view',
    label: 'Estate — Aerial Perspective',
    span: 'col-span-2 row-span-1',
  },
];

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-foreground/90 backdrop-blur-xl" />

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl w-full mx-6"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full max-h-[80vh] object-contain rounded-lg"
          />
          <p className="text-center mt-4 text-white/60 text-[11px] font-sans font-semibold tracking-widest-label uppercase">
            {images[index].label}
          </p>
        </motion.div>

        {/* Controls */}
        <button onClick={onClose} className="absolute top-6 right-6 z-20 text-white/70 hover:text-white transition-colors p-2">
          <X className="w-6 h-6" />
        </button>
        {index > 0 && (
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors p-3 glass-card rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {index < images.length - 1 && (
          <button onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors p-3 glass-card rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <div key={i} className={`h-0.5 transition-all duration-300 rounded-full ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/30'}`} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="gallery" className="py-section bg-surface section-rule">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4"
            >
              Visual Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-title text-foreground"
            >
              The Villa in Light
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block font-sans text-sm text-muted-foreground text-right max-w-[220px] leading-relaxed"
          >
            Click any image to explore the full gallery
          </motion.p>
        </div>

        {/* Staggered Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} img-zoom rounded-lg overflow-hidden cursor-pointer relative group`}
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <p className="text-white text-[11px] font-sans font-semibold tracking-widest-label uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((p) => Math.max(0, p - 1))}
          onNext={() => setLightboxIndex((p) => Math.min(images.length - 1, p + 1))}
        />
      )}
    </section>
  );
}
```

src/components/villa/HeroSection.jsx:
```
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToOverview = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=90&auto=format&fit=crop"
          alt="Azure Serenity Villa — Cyprus"
          className="w-full h-full object-cover ken-burns"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/70 text-[11px] font-sans font-semibold tracking-widest-label uppercase mb-8 lg:mb-10"
        >
          Limassol, Cyprus — Mediterranean Private Estate
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-white text-hero mb-6 max-w-4xl"
          style={{ fontWeight: 300 }}
        >
          Azure Serenity
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 font-sans font-light text-lg lg:text-xl max-w-xl leading-relaxed mb-12"
        >
          A private sanctuary where the Levantine sky meets the sea — designed for those who collect extraordinary moments.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={() => document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-primary text-white text-[13px] font-sans font-semibold tracking-label uppercase rounded magnetic-btn min-w-[180px]"
          >
            Inquire Now
          </button>
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-white/60 text-white text-[13px] font-sans font-semibold tracking-label uppercase rounded hover:bg-white/10 transition-colors duration-300 min-w-[180px]"
          >
            View Gallery
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1.0 }}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-12 sm:gap-20"
        >
          {[
            { value: '6', label: 'Bedrooms' },
            { value: '850m²', label: 'Living Area' },
            { value: '∞', label: 'Pool & Sea' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-white text-2xl lg:text-3xl" style={{ fontWeight: 300 }}>{s.value}</p>
              <p className="text-white/60 text-[11px] font-sans font-semibold tracking-widest-label uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        onClick={scrollToOverview}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 hover:text-white/90 transition-colors duration-300"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
```

src/components/villa/InquireSection.jsx:
```
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function InquireSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', arrival: '', departure: '', guests: '', email: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = `
    bg-transparent border-0 border-b border-outline-variant/60 focus:border-primary 
    text-foreground font-serif text-xl lg:text-2xl placeholder:text-muted-foreground/50 
    placeholder:font-serif outline-none transition-all duration-300 pb-2 w-full
    focus:ring-0
  `;

  return (
    <section id="inquire" className="min-h-screen py-section bg-surface section-rule flex items-center">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full" ref={ref}>
        <div className="grid lg:grid-cols-[1fr,420px] gap-24 items-start">
          {/* Left: form */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-6"
            >
              Begin Your Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-foreground mb-14"
            >
              Reserve your<br /><em>private sanctuary.</em>
            </motion.h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start gap-6"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0046A7' }}>
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">Thank you, {form.name || 'Dear Guest'}.</h3>
                  <p className="font-sans text-body-lg text-foreground/70 max-w-md leading-relaxed">
                    Your enquiry has been received. Our villa manager will be in touch within 4 hours to confirm availability and discuss your bespoke itinerary.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.25 }}
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {/* Sentence-style inputs */}
                <div>
                  <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Victoria Hamilton"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Arrival Date</label>
                    <input
                      type="date"
                      value={form.arrival}
                      onChange={(e) => setForm({ ...form, arrival: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Departure Date</label>
                    <input
                      type="date"
                      value={form.departure}
                      onChange={(e) => setForm({ ...form, departure: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Number of Guests</label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                    required
                  >
                    <option value="" disabled>Select number of guests</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="font-sans text-[11px] font-semibold tracking-widest-label uppercase text-muted-foreground block mb-3">Special Requests (Optional)</label>
                  <textarea
                    placeholder="Chef preferences, occasion, transfer needs…"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-sans font-semibold text-[13px] tracking-label uppercase rounded magnetic-btn"
                  >
                    Send Enquiry
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="mt-4 font-sans text-xs text-muted-foreground">
                    We respond within 4 hours. No payment required at this stage.
                  </p>
                </div>
              </motion.form>
            )}
          </div>

          {/* Right: info panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-24 space-y-6"
          >
            {/* Hero image */}
            <div className="img-zoom rounded-xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=700&q=85&auto=format&fit=crop"
                alt="Villa at golden hour"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick info */}
            <div className="glass-card rounded-xl p-6 space-y-4">
              {[
                { label: 'Nightly Rate', value: 'From €4,800' },
                { label: 'Minimum Stay', value: '3 nights (peak: 7)' },
                { label: 'Security Deposit', value: '€5,000 (refundable)' },
                { label: 'Included', value: 'Concierge, Housekeeper' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center text-sm border-b border-outline-variant/30 pb-3 last:border-0 last:pb-0">
                  <span className="font-sans text-muted-foreground">{item.label}</span>
                  <span className="font-sans font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

src/components/villa/Navbar.jsx:
```
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = ['Overview', 'Gallery', 'Amenities', 'Location', 'Testimonials'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-start gap-0.5 group">
          <span className="font-serif text-lg tracking-wide text-white group-hover:text-primary-light transition-colors duration-300"
            style={{ color: scrolled ? '#0046A7' : 'white' }}>
            Azure Serenity
          </span>
          <span className="text-[10px] tracking-widest-label uppercase font-sans font-semibold"
            style={{ color: scrolled ? '#737784' : 'rgba(255,255,255,0.7)' }}>
            Cyprus · Private Villa
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-[13px] font-sans font-medium tracking-label uppercase transition-colors duration-300"
              style={{ color: scrolled ? '#434653' : 'rgba(255,255,255,0.85)' }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('inquire')}
          className={`hidden md:block px-6 py-2.5 text-[13px] font-sans font-semibold tracking-label uppercase rounded transition-all duration-300 magnetic-btn ${
            scrolled
              ? 'bg-primary text-white border border-primary/80'
              : 'border border-white/70 text-white hover:bg-white/10'
          }`}
        >
          Inquire
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          style={{ color: scrolled ? '#0046A7' : 'white' }}
        >
          <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            style={{ backgroundColor: scrolled ? '#0046A7' : 'white' }} />
          <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            style={{ backgroundColor: scrolled ? '#0046A7' : 'white' }} />
          <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            style={{ backgroundColor: scrolled ? '#0046A7' : 'white' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-outline-variant/30 px-8 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              className="text-[13px] font-sans font-medium tracking-label uppercase text-left text-foreground/80 hover:text-primary transition-colors">
              {link}
            </button>
          ))}
          <button onClick={() => scrollTo('inquire')}
            className="mt-2 px-6 py-3 text-[13px] font-sans font-semibold tracking-label uppercase bg-primary text-white rounded magnetic-btn w-full">
            Inquire Now
          </button>
        </div>
      )}
    </motion.nav>
  );
}
```

src/components/villa/NearbySection.jsx:
```
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Plane, Anchor, ShoppingBag, UtensilsCrossed } from 'lucide-react';

const places = [
  { icon: Anchor, name: 'Limassol Marina', dist: '8 min drive', cat: 'Waterfront' },
  { icon: UtensilsCrossed, name: 'Nobu Limassol', dist: '12 min', cat: 'Fine Dining' },
  { icon: ShoppingBag, name: 'My Mall Limassol', dist: '15 min', cat: 'Retail' },
  { icon: Plane, name: 'Larnaca International', dist: '45 min', cat: 'Airport' },
  { icon: MapPin, name: 'Old Town Limassol', dist: '10 min', cat: 'Culture' },
  { icon: Anchor, name: 'Aphrodite Hills Resort', dist: '35 min', cat: 'Golf & Spa' },
];

const experienceImages = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop',
    label: 'Limassol Marina',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop',
    label: 'Local Cuisine',
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80&auto=format&fit=crop',
    label: 'Mediterranean Sea',
  },
];

export default function NearbySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="location" className="py-section bg-surface section-rule">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4"
            >
              Location
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-title text-foreground mb-6"
            >
              At the heart of<br /><em>Cyprus' riviéra.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-body-lg text-foreground/70 leading-relaxed mb-12 max-w-md"
            >
              Positioned on Limassol's exclusive coastal strip — minutes from the marina, world-class restaurants, and Cyprus' most celebrated vineyards — with the island's archaeological treasures within reach.
            </motion.p>

            {/* Places list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-px"
            >
              {places.map((p, i) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between py-4 border-b border-outline-variant/40 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: 'rgba(0,70,167,0.07)' }}>
                      <p.icon className="w-4 h-4" style={{ color: '#0046A7' }} />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-foreground text-sm">{p.name}</p>
                      <p className="font-sans text-xs text-muted-foreground tracking-label uppercase">{p.cat}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-sans text-sm">{p.dist}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: imagery */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {/* Map placeholder — styled to brand */}
            <div
              className="col-span-2 rounded-xl overflow-hidden h-56 relative flex items-center justify-center mb-0"
              style={{ backgroundColor: '#DBE3EF' }}
            >
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=80&auto=format&fit=crop&sat=-60"
                alt="Aerial view of Limassol coast"
                className="w-full h-full object-cover opacity-60"
                style={{ filter: 'saturate(0.4) brightness(1.05)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card rounded-xl px-5 py-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: '#0046A7' }} />
                  <span className="font-sans text-sm font-medium text-foreground">Limassol, Cyprus</span>
                </div>
              </div>
            </div>

            {experienceImages.map((img, i) => (
              <div key={i} className={`img-zoom rounded-lg overflow-hidden ${i === 0 ? 'col-span-2' : 'col-span-1'} ${i === 0 ? 'h-40' : 'h-36'}`}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

src/components/villa/OverviewSection.jsx:
```
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  { label: 'Arrival', value: '3 PM' },
  { label: 'Departure', value: '12 PM' },
  { label: 'Guests', value: 'Up to 12' },
  { label: 'From', value: '€4,800 / night' },
];

const highlights = [
  'Private infinity pool overlooking the sea',
  'Dedicated concierge & personal chef available',
  'Direct beach access via private pathway',
  'Helipad & private marina berth on request',
  'Smart home automation throughout',
  '850m² of indoor-outdoor living',
];

export default function OverviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="overview" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-6"
        >
          The Estate
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: narrative */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-foreground mb-8"
            >
              Where the sea
              <br />
              <em>becomes home.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-body-lg text-foreground/70 leading-relaxed mb-6 max-w-lg"
            >
              Perched on the sun-bleached cliffs of Limassol, Azure Serenity is a masterwork of contemporary Mediterranean architecture. Conceived by Nicosia-based studio Atelier Blanc, the estate dissolves the boundary between its limestone interiors and the Levantine horizon.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-body-lg text-foreground/70 leading-relaxed mb-12 max-w-lg"
            >
              Six bedroom suites, each with an unobstructed sea panorama. An 18-metre infinity pool aligned to the summer solstice sunset. A dedicated team of staff, invisible yet ever-present.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-sans text-body-md text-foreground/80">{h}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: image + stat cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="img-zoom rounded-lg overflow-hidden mb-8 aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85&auto=format&fit=crop"
                alt="Villa exterior with infinity pool"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Quick facts grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-px bg-outline-variant/30 rounded-lg overflow-hidden border border-outline-variant/30"
            >
              {features.map((f) => (
                <div key={f.label} className="bg-surface-container/60 px-5 py-5 flex flex-col gap-1">
                  <p className="text-[10px] font-sans font-semibold tracking-widest-label uppercase text-muted-foreground">
                    {f.label}
                  </p>
                  <p className="font-serif text-lg text-foreground">{f.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

src/components/villa/TestimonialsSection.jsx:
```
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The most transcendent week of our lives. Azure Serenity doesn't just offer a holiday — it offers a complete recalibration of what luxury means. We've stayed in properties across Mykonos, Ibiza, and St Barths. Nothing compares.",
    author: 'Victoria H.',
    origin: 'London, UK',
    stay: 'July 2024 — 7 nights',
    rating: 5,
  },
  {
    quote: "We chose Azure Serenity for our anniversary and it surpassed every expectation. The private chef's tasting menu on the terrace, watching the sun dissolve into the Levantine horizon — that image will stay with us forever.",
    author: 'Marc & Élise D.',
    origin: 'Paris, France',
    stay: 'September 2024 — 5 nights',
    rating: 5,
  },
  {
    quote: "As a hospitality architect, I am rarely impressed by design. Azure Serenity's interplay of indoor and outdoor — the materiality, the proportions, the stillness — is a genuine architectural achievement. And the team is extraordinary.",
    author: 'Kenji T.',
    origin: 'Tokyo, Japan',
    stay: 'August 2024 — 10 nights',
    rating: 5,
  },
  {
    quote: "We hosted a private board retreat here for eight colleagues. The villa handled everything: transfers, catering, presentation setup. The result was our most productive — and most beautiful — offsite in twelve years.",
    author: 'Sarah M.',
    origin: 'Dubai, UAE',
    stay: 'October 2024 — 4 nights',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const prev = () => setActive((p) => Math.max(0, p - 1));
  const next = () => setActive((p) => Math.min(testimonials.length - 1, p + 1));

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-section section-rule overflow-hidden" style={{ backgroundColor: '#F3F4F5' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        {/* Header */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[11px] font-sans font-semibold tracking-widest-label uppercase text-primary mb-4"
            >
              Guest Voices
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-title text-foreground"
            >
              Words that remain.
            </motion.h2>
          </div>

          {/* Nav arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex gap-3"
          >
            <button
              onClick={prev}
              disabled={active === 0}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={active === testimonials.length - 1}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-[1fr,320px] gap-16 items-start"
          >
            {/* Quote */}
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#0046A7' }} />
                ))}
              </div>
              <blockquote className="font-serif text-2xl lg:text-3xl text-foreground leading-relaxed mb-10" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-sans font-semibold" style={{ backgroundColor: '#0046A7' }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">{t.author}</p>
                  <p className="font-sans text-sm text-muted-foreground">{t.origin} · {t.stay}</p>
                </div>
              </div>
            </div>

            {/* Side card */}
            <div className="glass-card rounded-xl p-8 flex flex-col gap-6">
              <p className="font-sans text-[10px] font-semibold tracking-widest-label uppercase text-muted-foreground">Our Guests Say</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Overall Experience', val: 98 },
                  { label: 'Staff & Service', val: 100 },
                  { label: 'Location & Views', val: 100 },
                  { label: 'Cleanliness', val: 99 },
                ].map((r) => (
                  <div key={r.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-sans text-xs text-foreground/70">{r.label}</span>
                      <span className="font-sans text-xs font-semibold text-primary">{r.val}%</span>
                    </div>
                    <div className="h-0.5 rounded-full bg-outline-variant/50">
                      <div className="h-full rounded-full" style={{ width: `${r.val}%`, backgroundColor: '#0046A7' }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-muted-foreground pt-2 border-t border-outline-variant/40">
                Based on 47 verified stays, 2022–2024
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile nav */}
        <div className="flex gap-3 mt-12 md:hidden">
          <button onClick={prev} disabled={active === 0}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center disabled:opacity-30">
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button onClick={next} disabled={active === testimonials.length - 1}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center disabled:opacity-30">
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="h-0.5 rounded-full transition-all duration-400"
              style={{ width: i === active ? '24px' : '8px', backgroundColor: i === active ? '#0046A7' : '#C3C6D5' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

rm -rf generated/code/* var/cache/*
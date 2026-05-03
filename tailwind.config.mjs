import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
  plugins: [tailwindcssAnimate],
};

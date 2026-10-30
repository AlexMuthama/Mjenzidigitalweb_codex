/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: 'rgb(var(--mj-primary-green) / <alpha-value>)',
          100: 'rgb(var(--mj-primary-green) / <alpha-value>)',
          200: 'rgb(var(--mj-soft-sage) / <alpha-value>)',
          300: 'rgb(var(--mj-soft-sage) / <alpha-value>)',
          400: 'rgb(var(--mj-natural-green) / <alpha-value>)',
          500: 'rgb(var(--mj-natural-green) / <alpha-value>)',
          600: 'rgb(var(--mj-natural-green) / <alpha-value>)',
          700: 'rgb(var(--mj-deep-green) / <alpha-value>)',
          800: 'rgb(var(--mj-forest-green) / <alpha-value>)',
          900: 'rgb(var(--mj-forest-green) / <alpha-value>)',
          950: 'rgb(var(--mj-forest-green) / <alpha-value>)',
        },
        ivory: {
          50: '#FFFFFF',
          100: 'rgb(var(--mj-primary-green) / <alpha-value>)',
          200: 'rgb(var(--mj-primary-green) / <alpha-value>)',
          300: 'rgb(var(--mj-warm-ivory) / <alpha-value>)',
          400: 'rgb(var(--mj-warm-ivory) / <alpha-value>)',
          500: 'rgb(var(--mj-warm-ivory) / <alpha-value>)',
          600: 'rgb(var(--mj-soft-sage) / <alpha-value>)',
        },
        lime: {
          300: 'rgb(var(--mj-lime) / <alpha-value>)',
          400: 'rgb(var(--mj-lime) / <alpha-value>)',
          500: 'rgb(var(--mj-lime) / <alpha-value>)',
          600: 'rgb(var(--mj-lime) / <alpha-value>)',
        },
        sage: {
          100: 'rgb(var(--mj-primary-green) / <alpha-value>)',
          200: 'rgb(var(--mj-soft-sage) / <alpha-value>)',
          300: 'rgb(var(--mj-soft-sage) / <alpha-value>)',
          400: 'rgb(var(--mj-natural-green) / <alpha-value>)',
          500: 'rgb(var(--mj-natural-green) / <alpha-value>)',
        },
        brand: {
          green: 'rgb(var(--mj-primary-green) / <alpha-value>)',
        },
        charcoal: {
          700: '#2E332F',
          800: '#252927',
          900: '#1F2421',
          950: '#161A18',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-xl': ['clamp(2rem, 5.5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-lg': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(1.4rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-in': 'slideIn 0.4s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgb(var(--mj-forest-green) / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--mj-forest-green) / 0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

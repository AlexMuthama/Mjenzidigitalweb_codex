/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#E8F0EB',
          100: '#C9DAD0',
          200: '#A0BFA8',
          300: '#7AA684',
          400: '#4A7D5C',
          500: '#2A6440',
          600: '#1F5233',
          700: '#164529',
          800: '#0F3D2E',
          900: '#0A2D22',
          950: '#061D17',
        },
        ivory: {
          50: '#FEFDF8',
          100: '#FDFBF0',
          200: '#FAF7E5',
          300: '#F7F3E8',
          400: '#F2EDD8',
          500: '#EBE5CC',
          600: '#D9D2B0',
        },
        lime: {
          300: '#D9F860',
          400: '#C6F432',
          500: '#AEE010',
          600: '#92BB05',
        },
        sage: {
          100: '#D4E0D8',
          200: '#B5C9BC',
          300: '#9DB5A0',
          400: '#7FA088',
          500: '#688871',
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
        'grid-pattern': "linear-gradient(to right, rgba(15,61,46,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,61,46,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

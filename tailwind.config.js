/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        display: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'token-xs': '14px',
        'token-sm': '16px',
        'token-md': '18px',
        'token-lg': '24px',
        'token-xl': '30px',
        'token-2xl': '36px',
        'token-3xl': '60px',
      },
      spacing: {
        'token-1': '8px',
        'token-2': '10px',
        'token-3': '12px',
        'token-4': '16px',
        'token-5': '24px',
        'token-6': '32px',
        'token-7': '40px',
        'token-8': '48px',
      },
      borderRadius: {
        'token-xs': '8px',
        'token-sm': '12px',
        'token-md': '16px',
      },
      transitionDuration: {
        'motion-instant': '150ms',
        'motion-fast': '300ms',
      },
      colors: {
        text: {
          primary: '#a2eede',
          secondary: '#e8e6e3',
          tertiary: '#a1d3db',
          inverse: '#d6d3cd',
        },
        surface: {
          base: '#000000',
          muted: '#10564b',
          raised: '#4e5558',
          strong: '#151718',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#a2eede',
          foreground: '#000000',
        },
        border: 'rgba(162, 238, 222, 0.2)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Helvetica', 'Arial', 'sans-serif'] },
      keyframes: {
        upfade: {
          '0%': { opacity: '0.4', transform: 'translate(var(--x,-50%), 8px)' },
          '100%': { opacity: '0.9', transform: 'translate(var(--x,-50%), 0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        upfade: 'upfade 1.6s ease-in-out infinite alternate',
        fadeIn: 'fadeIn 1500ms ease forwards',
      },
    },
  },
  plugins: [],
};
export default config;

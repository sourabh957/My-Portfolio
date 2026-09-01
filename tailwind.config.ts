import type { Config } from 'tailwindcss';

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'soft-fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'soft-fade-up': 'soft-fade-up 0.7s ease-out',
      },
    },
  },
} satisfies Config;

export default config;

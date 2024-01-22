import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        text: 'var(--font-text)',
      },
      colors: {
        light: '#fff',
        dark: '#1a1a1a',
        ghost: '#f7f7ff',
        accent: '#ff5100',
      },
      boxShadow: { blur: '0 4px 30px rgba(0, 0, 0, 0.1);' },
      animation: {
        'top-down': 'top-down 0.5s ease forwards',
        'top-up': 'top-up 0.5s ease forwards',
        'bottom-down': 'bottom-down 0.5s ease forwards',
        'bottom-up': 'bottom-up 0.5s ease forwards',
        scaled: 'scaled 0.5s ease forwards',
        'scaled-none': 'scaled-none 0.5s ease forwards',
      },
      keyframes: {
        'top-down': {
          '0%': { top: '0', transform: 'rotate(0)' },
          '50%': { top: '10px', transform: 'rotate(0)' },
          '100%': { top: '10px', transform: 'rotate(45deg)' },
        },
        'top-up': {
          '0%': { top: '10px', transform: 'rotate(45deg)' },
          '50%': { top: '10px', transform: 'rotate(0)' },
          '100%': { top: '0', transform: 'rotate(0)' },
        },
        'bottom-down': {
          '0%': { bottom: '10px', transform: 'rotate(135deg)' },
          '50%': { bottom: '10px', transform: 'rotate(0)' },
          '100%': { bottom: '0', transform: 'rotate(0)' },
        },
        'bottom-up': {
          '0%': { bottom: '0', transform: 'rotate(0)' },
          '50%': { bottom: '10px', transform: 'rotate(0)' },
          '100%': { bottom: '10px', transform: 'rotate(135deg)' },
        },
        scaled: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'scaled-none': {
          '50%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

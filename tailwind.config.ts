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
        gray: '#f5f5f5',
        accent: '#ff5100',
      },
    },
  },
  plugins: [],
}

export default config

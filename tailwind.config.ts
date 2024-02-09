import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      boxShadow: { blur: '0 4px 30px rgba(0, 0, 0, 0.1)' },
      colors: {
        accent: '#ff5100',
        'accent-light': '#ff621a',
        dark: '#1a1a1a',
        ghost: '#f7f7ff',
        light: '#fff',
      },
      fontFamily: {
        text: 'var(--font-text)',
      },
      padding: {
        header: 'var(--header-height)',
      },
      scrollPadding: {
        header: 'var(--header-height)',
      },
    },
  },
}

export default config

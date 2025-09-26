import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // ALL source files
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}' // ALL stories
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(29 78 216)',
        secondary: 'rgb(107 114 128)'
      },
      fontSize: {
        base: ['1rem', '1.5rem'],
        xl: ['1.25rem', '1.75rem'],
        '4xl': ['2.25rem', '2.5rem']
      },
      fontWeight: {
        bold: '700',
        medium: '500'
      },
      letterSpacing: {
        tight: '-0.015em'
      }
    }
  },
  plugins: []
}

export default config

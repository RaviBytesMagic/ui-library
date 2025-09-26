/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}', // your components
    './.storybook/**/*.{ts,tsx,js,jsx}' // your stories
  ],
  safelist: [
    {
      pattern: /(text|font|tracking|bg)-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|primary|secondary)/
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)'
      },
      spacing: {
        sm: '0.5rem 1rem',
        md: '0.75rem 1.5rem',
        lg: '1rem 2rem'
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem'
      }
    }
  },
  plugins: []
}

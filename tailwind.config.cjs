// tailwind.config.cjs
module.exports = {
  content: [
    '../src/**/*.{ts,tsx,js,jsx}',
    './*.ts', // Ensure Storybook stories are included
    './*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)'
      }
    }
  },
  safelist: [
    {
      pattern: /(text|font|tracking|bg|text-gray)-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|700|800)/
    }
  ],
  plugins: []
}

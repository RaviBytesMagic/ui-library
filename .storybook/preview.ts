import type { Preview } from '@storybook/react-vite'
import '../src/theme/theme.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      expanded: true
    }
  }
}

export default preview

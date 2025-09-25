import { Meta, StoryObj } from '@storybook/react'
import AppButton from './Button'

const meta: Meta<typeof AppButton> = {
  title: 'Atoms/Button',
  component: AppButton,
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

export const Primary: StoryObj<typeof AppButton> = {
  args: {
    label: 'Click Me',
    onClick: () => alert('Button clicked!')
  }
}

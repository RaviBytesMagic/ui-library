import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    onClick: { action: 'clicked' }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Variants: Story = {
  render: args => (
    <div className="flex gap-4">
      {['primary', 'secondary', 'outline', 'ghost'].map(variant => (
        <Button key={variant} {...args} variant={variant as any}>
          {variant}
        </Button>
      ))}
    </div>
  )
}

export const Sizes: Story = {
  render: args => (
    <div className="flex items-center gap-4">
      {['sm', 'md', 'lg'].map(size => (
        <Button key={size} {...args} size={size as any}>
          {size}
        </Button>
      ))}
    </div>
  )
}

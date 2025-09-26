import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Sample text',
    variant: 'body1'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption'
      ]
    },
    as: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = {}

export const AllVariants: Story = {
  render: args => (
    <div className="space-y-4">
      {[
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption'
      ].map(variant => (
        <Typography key={variant} {...args} variant={variant as any}>
          {variant} text
        </Typography>
      ))}
    </div>
  )
}

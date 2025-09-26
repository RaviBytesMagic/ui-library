import { render, screen } from '@testing-library/react'
import { Typography } from './Typography'

describe('Typography', () => {
  it('renders children', () => {
    render(<Typography>Test text</Typography>)
    expect(screen.getByText('Test text')).toBeInTheDocument()
  })

  it('applies correct variant classes', () => {
    render(<Typography variant="h1">Heading</Typography>)
    const el = screen.getByText('Heading')
    expect(el).toHaveClass('text-4xl') // class from h1 variant
  })

  it('renders with default element for variant', () => {
    render(<Typography variant="h2">Heading 2</Typography>)
    const el = screen.getByRole('heading', { level: 2 })
    expect(el.tagName).toBe('H2')
  })

  it('renders with custom element using `as`', () => {
    render(
      <Typography as="span" variant="body1">
        Inline text
      </Typography>
    )
    const el = screen.getByText('Inline text')
    expect(el.tagName).toBe('SPAN')
  })

  it('merges custom className', () => {
    render(
      <Typography variant="caption" className="text-red-500">
        Colored caption
      </Typography>
    )
    const el = screen.getByText('Colored caption')
    expect(el).toHaveClass('text-red-500')
  })
})

import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Press</Button>)
    expect(screen.getByText('Press')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders with correct variant classes', () => {
    render(<Button variant="primary">Primary</Button>)
    const btn = screen.getByText('Primary')
    expect(btn.className).toMatch(/bg-primary/) // example Tailwind class
  })

  it('renders with correct size classes', () => {
    render(<Button size="lg">Large</Button>)
    const btn = screen.getByText('Large')
    expect(btn.className).toMatch(/px-6/) // example Tailwind class from lg size
  })

  it('applies disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    const btn = screen.getByText('Disabled')
    expect(btn).toBeDisabled()
  })

  it('merges custom className', () => {
    render(<Button className="custom-class">Styled</Button>)
    const btn = screen.getByText('Styled')
    expect(btn).toHaveClass('custom-class')
  })
})

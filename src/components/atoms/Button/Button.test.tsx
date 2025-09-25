import { render, screen, fireEvent } from '@testing-library/react'
import AppButton from './Button'

test('renders button and triggers click', () => {
  const handleClick = jest.fn()
  render(<AppButton label="Test" onClick={handleClick} />)
  fireEvent.click(screen.getByText(/test/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

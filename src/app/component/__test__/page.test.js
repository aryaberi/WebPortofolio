// components/__tests__/Button.test.js
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../../page'

describe('Home Component', () => {
  it('renders Profil', () => {
    render(<Home />)
    const button = screen.getByText('Hello. My name is Arya Beri Argya Rasidi.')
    expect(button).toBeInTheDocument()
  })

  // it('calls onClick when clicked', () => {
  //   const handleClick = jest.fn()
  //   render(<Button text="Click me" onClick={handleClick} />)
  //   const button = screen.getByText('Click me')
  //   fireEvent.click(button)
  //   expect(handleClick).toHaveBeenCalledTimes(1)
  // })
})

import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Button } from '../Button/Button'
import { describe, expect, it } from 'vitest'

function renderedButton() {
  return render(
    <MemoryRouter>
      <Button />
    </MemoryRouter>,
  )
}

describe('Button', () => {
  it('should render the button', () => {
    const { getByTestId } = renderedButton()
    expect(getByTestId('main-button')).toBeDefined()
  })
})

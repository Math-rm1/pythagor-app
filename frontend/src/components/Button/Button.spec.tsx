import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Button } from '../Button/Button'
import { describe, expect, it } from 'vitest'

// Renderiza o componente Button com o MemoryRouter
function renderedButton() {
  return render(
    <MemoryRouter>
      <Button />
    </MemoryRouter>,
  )
}

// Descreve a suite de testes do componente Button
describe('Button', () => {
  // Testa se o componente Button renderiza corretamente
  it('should render the button', () => {
    const { getByTestId } = renderedButton()
    expect(getByTestId('main-button')).toBeDefined()
  })
})

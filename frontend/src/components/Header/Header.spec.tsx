import { render } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { Header } from './Header'
import { describe, expect, it } from 'vitest'

// Renderiza o componente Header com o MemoryRouter
function renderedHeader() {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  )
}

// Descreve a suite de testes do componente Header
describe('Header', () => {
  // Testa se o componente Header renderiza corretamente
  it('should render the header', () => {
    const { getByTestId } = renderedHeader()
    expect(getByTestId('header')).toBeDefined()
  })
})

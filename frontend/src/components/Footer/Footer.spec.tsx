import { render } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

// Renderiza o componente Footer com o MemoryRouter
function renderedFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  )
}

// Descreve a suite de testes do componente Footer
describe('Footer', () => {
  // Testa se o componente Footer renderiza corretamente
  it('should render the footer', () => {
    const { getByTestId } = renderedFooter()
    expect(getByTestId('footer')).toBeDefined()
  })
})

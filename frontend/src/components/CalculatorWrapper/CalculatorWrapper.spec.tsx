import { render } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { CalculatorWrapper } from './CalculatorWrapper'
import { describe, expect, it } from 'vitest'

// Renderiza o componente CalculatorWrapper com o MemoryRouter
function renderedCalculatorWrapper() {
  return render(
    <MemoryRouter>
      <CalculatorWrapper />
    </MemoryRouter>,
  )
}

// Descreve a suite de testes do componente CalculatorWrapper
describe('Calculator Wrapper', () => {
  // Testa se o componente CalculatorWrapper renderiza corretamente
  it('should render the calculator wrapper', () => {
    const { getByTestId } = renderedCalculatorWrapper()
    expect(getByTestId('calculator-wrapper')).toBeDefined()
  })
})

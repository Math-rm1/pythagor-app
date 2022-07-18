import { render } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { CalculatorForm } from './CalculatorForm'
import { describe, expect, it } from 'vitest'

// Renderiza o componente CalculatorForm com o MemoryRouter
function renderedCalculatorForm() {
  return render(
    <MemoryRouter>
      <CalculatorForm />
    </MemoryRouter>,
  )
}

// Descreve a suite de testes do componente CalculatorForm
describe('Calculator Form', () => {
  // Testa se o componente CalculatorForm renderiza corretamente
  it('should render the calculator form', () => {
    const { getByTestId } = renderedCalculatorForm()
    expect(getByTestId('calculator-form')).toBeDefined()
  })

  // Testa se o componente renderiza três labels
  it('should render three labels', () => {
    const { getAllByTestId } = renderedCalculatorForm()
    const labels = getAllByTestId('calculator-label')
    expect(labels).toHaveLength(3)
  })

  // Testa se o componente renderiza três inputs
  it('should render three inputs', () => {
    const { getAllByTestId } = renderedCalculatorForm()
    const inputs = getAllByTestId('calculator-input')
    expect(inputs).toHaveLength(3)
  })

  // Testa se o componente renderiza três placeholders
  it('should render the input placeholder', () => {
    const { getByPlaceholderText } = renderedCalculatorForm()
    expect(getByPlaceholderText('Exemplo: 4')).toBeDefined()
    expect(getByPlaceholderText('Exemplo: 3')).toBeDefined()
    expect(getByPlaceholderText('Exemplo: 5')).toBeDefined()
  })

  // Testa se o componente renderiza o botão de submit
  it('should render the submit button', () => {
    const { getByTitle } = renderedCalculatorForm()
    expect(getByTitle('Calcular')).toBeDefined()
  })

  // Testa se o componente renderiza o botão de reset
  it('should render the reset button', () => {
    const { getByTitle } = renderedCalculatorForm()
    expect(getByTitle('Limpar')).toBeDefined()
  })
})

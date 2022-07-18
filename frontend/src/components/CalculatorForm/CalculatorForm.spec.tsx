import { render } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { CalculatorForm } from './CalculatorForm'
import { describe, expect, it } from 'vitest'

function renderedCalculatorForm() {
  return render(
    <MemoryRouter>
      <CalculatorForm />
    </MemoryRouter>,
  )
}

describe('Calculator Form', () => {
  it('should render the calculator form', () => {
    const { getByTestId } = renderedCalculatorForm()
    expect(getByTestId('calculator-form')).toBeDefined()
  })
})

import { render } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { CalculatorWrapper } from './CalculatorWrapper'
import { describe, expect, it } from 'vitest'

function renderedCalculatorWrapper() {
  return render(
    <MemoryRouter>
      <CalculatorWrapper />
    </MemoryRouter>,
  )
}

describe('Calculator Wrapper', () => {
  it('should render the calculator wrapper', () => {
    const { getByTestId } = renderedCalculatorWrapper()
    expect(getByTestId('calculator-wrapper')).toBeDefined()
  })
})

import { render } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { Header } from './Header'
import { describe, expect, it } from 'vitest'

function renderedHeader() {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  )
}

describe('Header', () => {
  it('should render the header', () => {
    const { getByTestId } = renderedHeader()
    expect(getByTestId('header')).toBeDefined()
  })
})

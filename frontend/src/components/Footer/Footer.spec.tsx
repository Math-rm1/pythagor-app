import { render } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

function renderedFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  )
}

describe('Footer', () => {
  it('should render the footer', () => {
    const { getByTestId } = renderedFooter()
    expect(getByTestId('footer')).toBeDefined()
  })
})

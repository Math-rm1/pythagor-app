import { IntroductionWrapper } from './IntroductionWrapper'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

function renderedIntroductionWrapper() {
  return render(
    <MemoryRouter>
      <IntroductionWrapper />
    </MemoryRouter>,
  )
}

describe('Introduction Wrapper', () => {
  it('should render the introduction wrapper', () => {
    const { getByTestId } = renderedIntroductionWrapper()
    expect(getByTestId('introduction-wrapper')).toBeDefined()
  })

  it('should render the introduction title', () => {
    const { getByText } = renderedIntroductionWrapper()
    expect(getByText('Bem-vindo à calculadora de Pitágoras!')).toBeDefined()
  })

  it('should render two introduction paragraphs', () => {
    const { getAllByTestId } = renderedIntroductionWrapper()
    const paragraphs = getAllByTestId('introduction-paragraph')
    expect(paragraphs).toHaveLength(2)
  })

  it('should render the introduction access calculator button', () => {
    const { getByRole } = renderedIntroductionWrapper()
    expect(getByRole('button')).toBeDefined()
  })
})

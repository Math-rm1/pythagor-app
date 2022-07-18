import { IntroductionWrapper } from './IntroductionWrapper'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

// Renderiza o componente IntroductionWrapper com o MemoryRouter
function renderedIntroductionWrapper() {
  return render(
    <MemoryRouter>
      <IntroductionWrapper />
    </MemoryRouter>,
  )
}

// Descreve a suite de testes do componente IntroductionWrapper
describe('Introduction Wrapper', () => {
  // Testa se o componente IntroductionWrapper renderiza corretamente
  it('should render the introduction wrapper', () => {
    const { getByTestId } = renderedIntroductionWrapper()
    expect(getByTestId('introduction-wrapper')).toBeDefined()
  })

  // Testa se o componente IntroductionWrapper renderiza o título de introdução
  it('should render the introduction title', () => {
    const { getByText } = renderedIntroductionWrapper()
    expect(getByText('Bem-vindo à calculadora de Pitágoras!')).toBeDefined()
  })

  // Testa se o componente IntroductionWrapper renderiza os parágrafos de introdução
  it('should render two introduction paragraphs', () => {
    const { getAllByTestId } = renderedIntroductionWrapper()
    const paragraphs = getAllByTestId('introduction-paragraph')
    expect(paragraphs).toHaveLength(2)
  })

  // Testa se o componente IntroductionWrapper renderiza o botão de acesso à calculadora
  it('should render the introduction calculator access button', () => {
    const { getByRole } = renderedIntroductionWrapper()
    expect(getByRole('button')).toBeDefined()
  })
})

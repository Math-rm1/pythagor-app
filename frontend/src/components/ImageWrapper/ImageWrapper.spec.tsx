import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ImageWrapper } from './ImageWrapper'
import { describe, expect, it } from 'vitest'

// Renderiza o componente ImageWrapper com o MemoryRouter
function renderedImageWrapper() {
  return render(
    <MemoryRouter>
      <ImageWrapper />
    </MemoryRouter>,
  )
}

// Descreve a suite de testes do componente ImageWrapper
describe('Image Wrapper', () => {
  // Testa se o componente ImageWrapper renderiza corretamente
  it('should render the image wrapper', () => {
    const { getByTestId } = renderedImageWrapper()
    expect(getByTestId('image-wrapper')).toBeDefined()
  })

  // Testa se o componente ImageWrapper renderiza a imagem corretamente
  it('should render the image', () => {
    const { getByAltText } = renderedImageWrapper()
    expect(getByAltText('Triângulo Retângulo')).toBeDefined()
  })
})

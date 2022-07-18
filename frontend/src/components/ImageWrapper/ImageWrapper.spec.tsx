import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ImageWrapper } from './ImageWrapper'
import { describe, expect, it } from 'vitest'

function renderedImageWrapper() {
  return render(
    <MemoryRouter>
      <ImageWrapper />
    </MemoryRouter>,
  )
}

describe('Image Wrapper', () => {
  it('should render the image wrapper', () => {
    const { getByTestId } = renderedImageWrapper()
    expect(getByTestId('image-wrapper')).toBeDefined()
  })

  it('should render the image', () => {
    const { getByAltText } = renderedImageWrapper()
    expect(getByAltText('Triângulo Retângulo')).toBeDefined()
  })
})

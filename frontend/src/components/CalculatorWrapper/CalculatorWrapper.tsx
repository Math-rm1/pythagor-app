import { CalculatorForm } from '../CalculatorForm/CalculatorForm'
import { ImageWrapper } from '../ImageWrapper/ImageWrapper'
import { StyledCalculatorWrapper } from './CalculatorWrapper.styles'

export function CalculatorWrapper() {
  // Renderiza o elemento main que contém o formulário de cálculo e o logo animado com framer-motion
  return (
    <StyledCalculatorWrapper data-testid="calculator-wrapper">
      <ImageWrapper />
      <CalculatorForm />
    </StyledCalculatorWrapper>
  )
}

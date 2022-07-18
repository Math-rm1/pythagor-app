import { styled } from '@mui/system'
import CalculatorForm from './CalculatorForm'
import ImageBox from './ImageWrapper'

// Styled component do wrapper da calculadora
const StyledCalculatorWrapper = styled('main')({
  backgroundColor: '#F2EBFF',
  minWidth: '260px',
  padding: '2rem',
  minHeight: '35rem',
  maxWidth: '80rem',
  margin: '8rem auto 2rem auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.25)',
  gap: '2rem',

  // media queries
  [`@media (max-width: 1300px)`]: {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  [`@media (max-width: 938px)`]: {
    margin: '2rem 1rem 1rem 2rem',
    padding: '1.5rem',
    flexDirection: 'column',
    gap: '3rem',
  },
  [`@media (max-width: 400px)`]: {
    margin: '1rem 0.5rem 1rem 0.5rem',
    padding: '0.5rem',
  },
})

export function CalculatorWrapper() {
  // Renderiza o elemento main que contém o formulário de cálculo e o logo animado com framer-motion
  return (
    <StyledCalculatorWrapper>
      <ImageBox />
      <CalculatorForm />
    </StyledCalculatorWrapper>
  )
}

import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { StyledIntroductionWrapper } from './IntroductionWrapper.styles'

export function IntroductionWrapper() {
  return (
    <StyledIntroductionWrapper data-testid="introduction-wrapper">
      <Typography variant="h5" component="h2">
        Bem-vindo à calculadora de Pitágoras!
      </Typography>
      <Typography paragraph data-testid="introduction-paragraph">
        O Teorema de Pitágoras é uma simples fórmula matemática que afirma que o
        quadrado da hipotenusa de um triângulo retângulo é igual a soma dos
        quadrados dos outros dois lados. A fórmula é:{' '}
        <strong>a² + b² = c²</strong> onde <strong>a</strong> é o tamanho do
        primeiro lado, <strong>b</strong> é o tamanho do segundo lado, e{' '}
        <strong>c</strong> é o tamanho da hipotenusa.
      </Typography>

      <Typography paragraph data-testid="introduction-paragraph">
        Para saber o resultado de um dos lados, basta preencher dois dos três
        lados apresentados na calculadora e clicar no botão{' '}
        <strong>Calcular</strong>.
      </Typography>

      {/* Link que redireciona para a página da calculadora */}
      <Link title="Página da Calculadora" to="/calculator" role="button">
        Calculadora
      </Link>
    </StyledIntroductionWrapper>
  )
}

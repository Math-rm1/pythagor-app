import { Link, Typography } from '@mui/material'
import { StyledFooter } from './Footer.styles'

// Simples footer com link para o linkedin e uma tag de copyright por conta do uso do ícone
export function Footer() {
  // Renderiza o footer
  return (
    <StyledFooter data-testid="footer">
      <Link
        textAlign="center"
        href="https://www.linkedin.com/in/matheus-r-mariano"
        title="Linkedin do Autor"
        target="_blank"
      >
        <Typography variant="caption" color="#7584f2">
          Site desenvolvido por <strong>Matheus</strong>
        </Typography>
      </Link>
      <Link
        textAlign="center"
        href="https://www.flaticon.com/free-icons/pythagoras"
        title="Ícone de Pitágoras"
        target="_blank"
        mb="1rem"
      >
        <Typography variant="caption" color="#7584f2">
          Ícone de Pitágoras criado por Freepik - Flaticon
        </Typography>
      </Link>
    </StyledFooter>
  )
}

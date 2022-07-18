import React from 'react'
import { StyledButton } from './Button.styles'

// Interface que define as propriedades do componente Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  hoverColor?: string
}

// "Desestrutura" algumas propriedades que serão utilizadas no botão e o
// restante é agrupado em um objeto chamado props com o uso do operador rest
export function Button({ color, hoverColor, children, ...props }: ButtonProps) {
  // Renderiza o botão e utiliza o spread operator para passar todas as propriedades
  return (
    <StyledButton
      data-testid="main-button"
      sx={{
        backgroundColor: color,
        '&:hover': {
          backgroundColor: hoverColor,
        },
      }}
      // Passa todas as propriedades dentro de props para o botão usando o operador spread
      {...props}
      variant="contained"
    >
      {/* Renderiza o filho passado como propriedade */}
      {children}
    </StyledButton>
  )
}

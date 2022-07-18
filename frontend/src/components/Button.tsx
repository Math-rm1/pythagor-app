// Apelido dado ao componente do material ui para não haver conflito entre os nomes
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

// Interface que define as propriedades do componente Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  hoverColor?: string
}

// Styled component para um botão
const StyledButton = styled(MuiButton)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  flex: 1,
  height: '3rem',
  // media queries
  [`@media (max-width: 600px)`]: {
    gap: '0.25rem',
  },
})

// "Desestrutura" algumas propriedades que serão utilizadas no botão e o
// restante é agrupado em um objeto chamado props com o uso do operador rest
export function Button({ color, hoverColor, children, ...props }: ButtonProps) {
  // Renderiza o botão e utiliza o spread operator para passar todas as propriedades
  return (
    <StyledButton
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

// Apelido dado ao componente do material ui para não haver conflito entre os nomes
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/system'

// Styled component para um botão
export const StyledButton = styled(MuiButton)({
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

import { Input } from '@mui/material'
import { styled } from '@mui/system'

// Styled component do um formulário
export const StyledForm = styled('form')({
  flex: 1,
  flexShrink: 1,
  // media queries
  [`@media (max-width: 1300px)`]: {
    flex: 2,
  },
})

// Styled component de um label
export const StyledLabel = styled('label')({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '2rem',
  borderLeft: '8px solid #7584f2',
  borderRadius: '4px',
  boxShadow: '0 0 10px #ccc',

  transition: 'all 0.2s ease-in-out',
  '&:hover, input:focus': {
    transform: 'scale(1.025)',
  },
  '& + label': {
    marginTop: '1rem',
  },
  // media queries
  [`@media (max-width: 600px)`]: {
    flexDirection: 'column',
    padding: '1rem',
  },
})

// Styled component de um input
export const StyledInput = styled(Input)({
  width: '10rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '0.5rem',
})

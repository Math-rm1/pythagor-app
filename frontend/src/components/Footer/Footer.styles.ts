import { styled } from '@mui/system'

// Styled component do footer
export const StyledFooter = styled('footer')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& a': {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

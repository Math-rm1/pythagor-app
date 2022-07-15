import { Button as MuiButton } from '@mui/material'

export function Button() {
  return (
    <MuiButton
      sx={{
        width: '100%',
        height: '3rem',
        backgroundColor: '#7584f2 ',
        marginTop: '3rem',
        '&:hover': {
          backgroundColor: '#4253ce',
        },
      }}
      type="submit"
      variant="contained"
    >
      Calcular
    </MuiButton>
  )
}

import { AppBar, Toolbar, Typography } from '@mui/material'

export function Header() {
  return (
    <AppBar
      component="header"
      position="static"
      sx={{ backgroundColor: '#7584f2', padding: '0.5rem 1rem' }}
    >
      <Toolbar>
        <Typography
          sx={{ typography: { sm: 'h5', xs: 'h6' }, cursor: 'pointer' }}
        >
          Teorema de Pitágoras - PythagorApp
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

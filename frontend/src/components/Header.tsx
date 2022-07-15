import { Calculate } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <AppBar
      component="header"
      position="static"
      sx={{ backgroundColor: '#7584f2', padding: '0.5rem 1rem' }}
    >
      <Toolbar>
        <Typography
          sx={{
            typography: { sm: 'h5', xs: 'h6' },
            flexGrow: 1,
          }}
          variant="h1"
        >
          PythagorApp
        </Typography>
        <NavLink to="/" title="Página Inicial">
          <IconButton
            aria-label="Página Inicial"
            sx={{ color: '#fff', padding: '0.5rem' }}
          >
            <HomeIcon />
          </IconButton>
        </NavLink>
        <NavLink to="/calculator" title="Calculadora">
          <IconButton
            aria-label="Calculadora"
            sx={{ color: '#fff', padding: '0.5rem', marginLeft: '0.5rem' }}
          >
            <Calculate />
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}

import { Calculate } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

export function Header() {
  // Estado responsável por controlar o menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Renderiza o header com o menu
  return (
    <>
      <AppBar
        data-testid="header"
        component="header"
        position="static"
        sx={{ backgroundColor: '#7584f2', p: '0.5rem', minWidth: '260px' }}
      >
        <Toolbar>
          <IconButton
            onClick={() => setIsMenuOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ cursor: 'pointer' }}
            fontSize={{
              xs: '1.5rem',
              sm: '1.75rem',
            }}
            fontWeight="bold"
            component="h1"
          >
            PythagorApp
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Apresentar o componente Drawer com base no estado */}
      <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <List>
          <ListItem
            button
            component={NavLink}
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <ListItemText primary="Home" sx={{ p: '0.5rem' }} />
            <IconButton
              aria-label="Casa"
              sx={{ color: '#7584f2', p: '0.5rem' }}
            >
              <HomeIcon />
            </IconButton>
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/calculator"
            onClick={() => setIsMenuOpen(false)}
          >
            <ListItemText primary="Calculadora" sx={{ p: '0.5rem' }} />
            <IconButton
              aria-label="Calculadora"
              sx={{ color: '#7584f2', p: '0.5rem', ml: '0.5rem' }}
            >
              <Calculate />
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

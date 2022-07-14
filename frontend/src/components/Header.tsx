import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  header: {
    padding: '0.5rem 1rem',
    backgroundColor: '#7584f2 !important',
  },
})

export function Header() {
  const classes = useStyles()

  return (
    <AppBar component="header" position="static" className={classes.header}>
      <Toolbar>
        <Typography sx={{ typography: { sm: 'h4', xs: 'h6' } }}>
          PythagorApp
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

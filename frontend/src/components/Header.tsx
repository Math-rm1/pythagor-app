import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  header: {
    padding: '0.5rem 1rem',
  },
})

export function Header() {
  const classes = useStyles()

  return (
    <AppBar position="static" color="primary" className={classes.header}>
      <Toolbar>
        <Typography variant="h6">PythagorApp</Typography>
      </Toolbar>
    </AppBar>
  )
}

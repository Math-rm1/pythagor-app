import { Box, Link, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { attributionStyles } from '../styles/attributionStyles'

const useStyles = makeStyles(attributionStyles)

export function Attribution() {
  const classes = useStyles()

  return (
    <Box className={classes.linkBox} component="footer">
      <Link
        href="https://www.flaticon.com/free-icons/pythagoras"
        title="pythagoras icons"
      >
        <Typography variant="caption">
          Pythagoras icon created by Freepik - Flaticon
        </Typography>
      </Link>
    </Box>
  )
}

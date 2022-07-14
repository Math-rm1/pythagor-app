import { Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Header } from './components/Header'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
})

export function App() {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Link
        className={classes.link}
        href="https://www.flaticon.com/free-icons/pythagoras"
        title="pythagoras icons"
      >
        Pythagoras icon created by Freepik - Flaticon
      </Link>
    </>
  )
}

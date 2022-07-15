import { Box, Link, Typography } from '@mui/material'

export function Attribution() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& a': {
          textDecoration: 'none',
          textAlign: 'center',
          '&:hover': {
            textDecoration: 'underline',
          },
          '&:last-child': { marginBottom: '1rem' },
        },
      }}
      component="footer"
    >
      <Link
        href="https://www.linkedin.com/in/matheus-r-mariano"
        title="Linkedin Autor"
        target="_blank"
      >
        <Typography variant="caption" sx={{ color: '#7584f2' }}>
          Site desenvolvido por <strong>Matheus</strong>
        </Typography>
      </Link>
      <Link
        href="https://www.flaticon.com/free-icons/pythagoras"
        title="pythagoras icons"
        target="_blank"
      >
        <Typography variant="caption" sx={{ color: '#7584f2' }}>
          Pythagoras icon created by Freepik - Flaticon
        </Typography>
      </Link>
    </Box>
  )
}

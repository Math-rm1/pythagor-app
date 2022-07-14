export const imageBoxStyles = {
  imageBox: {
    flex: 1,
    flexShrink: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // media queries
    '@media (max-width: 938px)': {
      marginTop: '1rem',
    },
  },
  image: {
    maxWidth: '60%',
    zIndex: 1,
    // media queries
    '@media (max-width: 938px)': {
      marginTop: '1rem',
    },
  },
}

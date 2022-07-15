export const calculatorBoxStyles = {
  calculatorBox: {
    backgroundColor: '#fff',
    minWidth: '260px',
    padding: '2rem',
    maxWidth: '80rem',
    margin: '10rem auto 2rem auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px #ccc',
    gap: '2rem',

    // media queries
    '@media (max-width: 1300px)': {
      marginLeft: '2rem',
      marginRight: '2rem',
    },
    '@media (max-width: 938px)': {
      margin: '2rem 1rem 1rem 2rem',
      flexDirection: 'column',
      gap: '3rem',
    },
    '@media (max-width: 480px)': {
      margin: '2rem .5rem',
    },
  },
}

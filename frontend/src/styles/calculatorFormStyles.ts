export const calculatorFormStyles = {
  formBox: {
    flex: 1,
    flexShrink: 1,
    // media queries
    '@media (max-width: 1300px)': {
      flex: 2,
    },
  },
  formLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px #ccc',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#eee',
    },
    '& + label': {
      marginTop: '1rem',
    },
    // media queries
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  formLabelInput: {
    width: '10rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '0.5rem',
  },
}

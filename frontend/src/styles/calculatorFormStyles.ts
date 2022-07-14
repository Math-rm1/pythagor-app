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
  formLabelTypography: {
    flex: 2,
    fontWeight: 'normal !important',
  },
  formLabelInput: {
    width: '10rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '0.5rem',
    fontSize: '1rem',
    '&:focus': {
      outline: 'none',
      boxShadow: '1px 1px 1px #7584f2',
    },
  },
  formButton: {
    width: '100%',
    height: '3rem',
    backgroundColor: '#7584f2 !important',
    marginTop: '3rem !important',
    '&:hover': {
      backgroundColor: '#4253ce !important',
    },
  },
}

import { styled } from '@mui/system'

// Styled component do wrapper da introdução do site
export const StyledIntroductionWrapper = styled('main')({
  backgroundColor: '#F2EBFF',
  minWidth: '260px',
  padding: '2rem',
  maxWidth: '80rem',
  minHeight: '35rem',
  margin: '8rem auto 2rem auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: '16px',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.25)',
  '& h2': {
    borderBottom: '5px solid #7584f2',
    padding: '1rem',
    marginBottom: '2rem',
    color: '#7584f2',
    fontWeight: 'bold',
  },

  '& p': {
    padding: '1rem',
    lineHeight: '2',
    maxWidth: '70ch',
    borderLeft: '4px dotted #7584f2',
  },

  '& a': {
    color: '#ffffff',
    backgroundColor: '#7584f2',
    display: 'flex',
    textDecoration: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    borderRadius: '4px',
    margin: '1rem 0',
    textTransform: 'uppercase',
    fontWeight: '500',
    width: '10rem',
    transition: 'all 0.2s ease-in-out',
    boxShadow:
      'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px',

    '&:hover': {
      backgroundColor: '#4253ce',
    },
  },
  // media queries
  [`@media (max-width: 1300px)`]: {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  [`@media (max-width: 938px)`]: {
    margin: '2rem 1rem 2rem 1rem',
    padding: '1rem',
    '& h2': {
      fontSize: '1.5rem',
    },
  },
  [`@media (max-width: 400px)`]: {
    margin: '1rem 0.5rem 1rem 0.5rem',
    padding: '0.5rem',
    '& h2': {
      fontSize: '1.375rem',
    },
  },
})

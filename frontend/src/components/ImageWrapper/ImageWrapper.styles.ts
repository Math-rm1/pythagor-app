import { styled } from '@mui/system'
import { motion } from 'framer-motion'

// Styled component para o wrapper do logo
export const StyledImageContainer = styled(motion.div)({
  flex: 1,
  flexShrink: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // media queries
  [`@media (max-width: 938px)`]: {
    marginTop: '1rem',
  },
})

// Styled component para o logo
export const StyledImage = styled(motion.img)({
  maxWidth: '60%',
  zIndex: 1,

  // media queries
  [`@media (max-width: 938px)`]: {
    marginTop: '1rem',
  },
})

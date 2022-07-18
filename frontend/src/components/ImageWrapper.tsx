import { motion } from 'framer-motion'
import { styled } from '@mui/system'

import logo from '../assets/logo.png'

// Styled component para o wrapper do logo
const StyledImageContainer = styled(motion.div)({
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
const StyledImage = styled(motion.img)({
  maxWidth: '60%',
  zIndex: 1,

  // media queries
  [`@media (max-width: 938px)`]: {
    marginTop: '1rem',
  },
})

export default function ImageWrapper() {
  // Renderiza o container que contém o logo animado com framer-motion
  return (
    <StyledImageContainer>
      <StyledImage
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2, ease: 'easeInOut' },
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        dragElastic={0.2}
        dragMomentum={false}
        src={logo}
        alt="Triângulo Retângulo"
        title="Triângulo Retângulo"
      />
    </StyledImageContainer>
  )
}

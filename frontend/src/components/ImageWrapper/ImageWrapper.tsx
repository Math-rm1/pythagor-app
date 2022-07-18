import logo from '../../assets/logo.png'
import { StyledImage, StyledImageContainer } from './ImageWrapper.styles'

export function ImageWrapper() {
  // Renderiza o container que contém o logo animado com framer-motion
  return (
    <StyledImageContainer data-testid="image-wrapper">
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

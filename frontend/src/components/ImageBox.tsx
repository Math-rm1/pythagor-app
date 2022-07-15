import { makeStyles } from '@mui/styles'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'

import logo from '../assets/logo.png'
import { imageBoxStyles } from '../styles/imageBoxStyles'

const useStyles = makeStyles(imageBoxStyles)

export default function ImageBox() {
  const classes = useStyles()

  return (
    <Box component="section" className={classes.imageBox}>
      <motion.img
        className={classes.image}
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
          right: -0,
          bottom: 0,
        }}
        dragElastic={0.2}
        dragMomentum={false}
        src={logo}
        alt="Triângulo Retângulo"
        title="Triângulo Retângulo"
      />
    </Box>
  )
}

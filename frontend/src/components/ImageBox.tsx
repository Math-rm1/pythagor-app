import { makeStyles } from '@mui/styles'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import { useRef } from 'react'

import logo from '../assets/logo.png'
import { imageBoxStyles } from '../styles/imageBoxStyles'

const useStyles = makeStyles(imageBoxStyles)

export default function ImageBox() {
  const constraintRef = useRef<HTMLDivElement>(null)
  const classes = useStyles()

  return (
    <Box component="section" className={classes.imageBox} ref={constraintRef}>
      <motion.img
        className={classes.image}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2, ease: 'easeInOut' },
        }}
        drag
        dragConstraints={constraintRef}
        dragMomentum={false}
        src={logo}
        alt="Triângulo Retângulo"
        title="Triângulo Retângulo"
      />
    </Box>
  )
}

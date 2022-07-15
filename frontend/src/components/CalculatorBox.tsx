import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import CalculatorForm from './CalculatorForm'
import { calculatorBoxStyles } from '../styles/calculatorBoxStyles'
import ImageBox from './ImageBox'

const useStyles = makeStyles(calculatorBoxStyles)

export function CalculatorBox() {
  const classes = useStyles()

  return (
    <Box component="main" className={classes.calculatorBox}>
      <ImageBox />
      <CalculatorForm />
    </Box>
  )
}

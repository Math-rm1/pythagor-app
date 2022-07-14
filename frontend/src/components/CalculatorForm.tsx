import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { calculatorFormStyles } from '../styles/calculatorFormStyles'

const useStyles = makeStyles(calculatorFormStyles)

export default function CalculatorForm() {
  const classes = useStyles()

  return (
    <Box className={classes.formBox} component="form">
      <label className={classes.formLabel} htmlFor="side-a">
        <Typography
          sx={{ typography: { sm: 'h6', xs: 'body1' } }}
          className={classes.formLabelTypography}
          variant="h6"
        >
          Tamanho do 1° cateto (a):
        </Typography>
        <input
          className={classes.formLabelInput}
          type="number"
          id="side-a"
          placeholder="4"
          min={0}
          maxLength={20}
        />
      </label>

      <label className={classes.formLabel} htmlFor="side-b">
        <Typography
          sx={{ typography: { sm: 'h6', xs: 'body1' } }}
          className={classes.formLabelTypography}
          variant="h6"
        >
          Tamanho do 2° cateto (b):
        </Typography>
        <input
          className={classes.formLabelInput}
          type="number"
          id="side-b"
          placeholder="3"
          min={0}
          maxLength={20}
        />
      </label>

      <label className={classes.formLabel} htmlFor="hyphotenuse">
        <Typography
          sx={{ typography: { sm: 'h6', xs: 'body1' } }}
          className={classes.formLabelTypography}
        >
          Tamanho da hipotenusa (c):
        </Typography>
        <input
          className={classes.formLabelInput}
          type="number"
          id="hyphotenuse"
          placeholder="?"
          min={0}
          maxLength={20}
        />
      </label>

      <Button className={classes.formButton} variant="contained">
        Calcular
      </Button>
    </Box>
  )
}

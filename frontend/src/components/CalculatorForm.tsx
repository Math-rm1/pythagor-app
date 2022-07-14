import { Box, Button, Modal, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { calculatorFormStyles } from '../styles/calculatorFormStyles'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

const useStyles = makeStyles(calculatorFormStyles)

interface FormData {
  sideA?: number
  sideB?: number
  sideC?: number
}

// interface ResultData extends FormData {}

export default function CalculatorForm() {
  const classes = useStyles()
  const { register, handleSubmit, reset } = useForm()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [result, setResult] = useState<ResultData | null>(null)

  const handleFormSubmit = (data: FormData) => {
    const objArr = Object.entries(data).map(([key, value]) => {
      if (Number.isNaN(value)) return null
      else {
        return {
          key,
          value,
        }
      }
    })

    const validObjArr = objArr.filter((obj) => obj !== null)

    if (validObjArr.length === 2) {
      // axios({
      //   method: 'post',
      //   url: '/api/calculate',
      //   data: objArr,
      // }).then((res) => console.log(res))
    } else {
      alert('Please fill 2 fields')
    }

    reset()
  }

  return (
    <Box
      onSubmit={handleSubmit(handleFormSubmit)}
      className={classes.formBox}
      component="form"
    >
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
          id="sideA"
          placeholder="4"
          {...register('sideA', {
            valueAsNumber: true,
          })}
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
          id="sideB"
          placeholder="3"
          {...register('sideB', {
            valueAsNumber: true,
          })}
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
          id="sideC"
          placeholder="?"
          {...register('sideC', {
            valueAsNumber: true,
          })}
        />
      </label>

      <Button type="submit" className={classes.formButton} variant="contained">
        Calcular
      </Button>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen((state) => !state)}
      >
        <Box>
          <Typography variant="h6" component="h2">
            {/* {isLoading
              ? 'Calculando...'
              : `a: ${result?.sideA} b: ${result?.sideB} c: ${result?.sideC}`} */}
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}
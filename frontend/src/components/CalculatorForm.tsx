import { Box, Button, Input, Modal, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { calculatorFormStyles } from '../styles/calculatorFormStyles'
import { useForm } from 'react-hook-form'
// import axios from 'axios'
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
      if (Number.isNaN(value)) return { [key]: null }
      else return { [key]: value }
    })

    const objArrWithoutNulls = objArr.filter(
      (obj) => obj[Object.keys(obj)[0]] !== null,
    )

    if (objArrWithoutNulls.length === 2) {
      const formattedGroupedObj = Object.assign(
        Object.assign(objArr[0], objArr[1]),
        objArr[2],
      )
      // axios({
      //   method: 'post',
      //   url: '/api/calculate',
      //   data: JSON.stringify(formattedObjArr),
      // }).then((res) => console.log(res))
      console.log(formattedGroupedObj)
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
          sx={{
            typography: { xs: 'body1', sm: 'h6' },
            flex: 2,
          }}
          variant="h6"
        >
          Tamanho do 1° cateto (a):
        </Typography>
        <Input
          autoFocus
          color="secondary"
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
          sx={{
            typography: { xs: 'body1', sm: 'h6' },
            flex: 2,
          }}
          variant="h6"
        >
          Tamanho do 2° cateto (b):
        </Typography>
        <Input
          className={classes.formLabelInput}
          color="secondary"
          type="number"
          id="sideB"
          placeholder="3"
          {...register('sideB', {
            valueAsNumber: true,
          })}
        />
      </label>

      <label className={classes.formLabel} htmlFor="hyphotenuse">
        <Typography sx={{ typography: { xs: 'body1', sm: 'h6' }, flex: 2 }}>
          Tamanho da hipotenusa (c):
        </Typography>
        <Input
          className={classes.formLabelInput}
          color="secondary"
          type="number"
          id="sideC"
          placeholder="?"
          {...register('sideC', {
            valueAsNumber: true,
          })}
        />
      </label>

      <Button
        sx={{
          width: '100%',
          height: '3rem',
          backgroundColor: '#7584f2 ',
          marginTop: '3rem',
          '&:hover': {
            backgroundColor: '#4253ce',
          },
        }}
        type="submit"
        variant="contained"
      >
        Calcular
      </Button>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen((state) => !state)}
      >
        <Box></Box>
      </Modal>
    </Box>
  )
}

import { Box, Input, Modal, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { calculatorFormStyles } from '../styles/calculatorFormStyles'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import { Button } from './Button'

const useStyles = makeStyles(calculatorFormStyles)

const typographySx = { typography: { xs: 'body1', sm: 'h6' }, flex: 2 }

interface FormData {
  sideA?: number
  sideB?: number
  sideC?: number
}

interface PostData {
  values: number[]
  relation: 'hypotenuse' | 'side'
}

export default function CalculatorForm() {
  const classes = useStyles()
  const { register, handleSubmit, reset, setValue } = useForm()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [result, setResult] = useState<ResultData | null>(null)

  const instance = axios.create({
    baseURL: 'https://flask-api-vert.vercel.app/',
  })

  const postData = async (data: PostData) => {
    const response = await instance.post('/api/calculate', data)

    return response.data
  }

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

      if (formattedGroupedObj.sideC === null) {
        const values = [formattedGroupedObj.sideA, formattedGroupedObj.sideB]
        const relation = 'hypotenuse'

        const postObj: PostData = {
          values,
          relation,
        }

        postData(postObj).then((result) => {
          setValue('sideC', parseInt(result).toPrecision(2))
        })
      } else if (formattedGroupedObj.sideA === null) {
        const values = [formattedGroupedObj.sideC, formattedGroupedObj.sideB]
        const relation = 'side'

        const postObj: PostData = {
          values,
          relation,
        }

        postData(postObj).then((result) => {
          setValue('sideA', parseInt(result).toPrecision(2))
        })
      } else if (formattedGroupedObj.sideB === null) {
        const values = [formattedGroupedObj.sideA, formattedGroupedObj.sideC]
        const relation = 'side'

        const postObj: PostData = {
          values,
          relation,
        }

        postData(postObj).then((result) => {
          setValue('sideB', parseInt(result).toPrecision(2))
        })
      }
    } else {
      alert('Preencha dois campos')
    }

    reset()
  }

  return (
    <Box
      onSubmit={handleSubmit(handleFormSubmit)}
      className={classes.formBox}
      component="form"
    >
      <label className={classes.formLabel} htmlFor="sideA">
        <Typography sx={typographySx} variant="h6">
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

      <label className={classes.formLabel} htmlFor="sideB">
        <Typography sx={typographySx} variant="h6">
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

      <label className={classes.formLabel} htmlFor="sideC">
        <Typography sx={typographySx} variant="h6">
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

      <Button />
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen((state) => !state)}
      >
        <Box></Box>
      </Modal>
    </Box>
  )
}

import { Box, Input, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { calculatorFormStyles } from '../styles/calculatorFormStyles'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Button } from './Button'
import toast, { Toaster } from 'react-hot-toast'

const useStyles = makeStyles(calculatorFormStyles)

const typographySx = {
  typography: { xs: 'body1', sm: 'h6' },
  flex: 2,
}

interface RightTriangle {
  sideA?: number
  sideB?: number
  sideC?: number
}

interface PostDataFormat {
  values: number[]
  relation: 'hypotenuse' | 'side'
}

export default function CalculatorForm() {
  const classes = useStyles()
  const { register, handleSubmit, setValue } = useForm()
  // const [isLoading, setIsLoading] = useState<boolean>(false)

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  })

  const postData = async (data: PostDataFormat) => {
    const toastId = toast.loading('Buscando API...')

    const res = await instance.post('/api/calculate', data)

    res.status === 200
      ? toast.success('Busca completa!', { id: toastId })
      : toast.error('Erro ao buscar API', { id: toastId })

    return res
  }

  function findNaN(entry: Array<string | number>) {
    if (typeof entry[1] === 'number') return isNaN(entry[1])
  }

  function getUnknownSide(triangle: RightTriangle) {
    const filledSides = Object.values(triangle).filter(Number) as number[]
    const unknownSide = Object.entries(triangle).find(findNaN)?.[0]

    const lookingFor =
      unknownSide === 'sideC'
        ? ('hypotenuse' as PostDataFormat['relation'])
        : ('side' as PostDataFormat['relation'])
    return { filledSides, unknownSide, lookingFor }
  }

  function hasZero(data: RightTriangle) {
    return Object.values(data).includes(0)
  }

  const handleFormSubmit = async (data: RightTriangle) => {
    if (hasZero(data))
      return toast.error('O tamanho não pode ser zero', {
        id: 'no-zero-allowed',
      })

    const { filledSides, unknownSide, lookingFor } = getUnknownSide(data)

    if (filledSides.length !== 2)
      return toast.error('Preencha dois campos!', { id: 'two-fields-required' })

    if (!unknownSide)
      return toast.error('Erro ao calcular um dos lados!', {
        id: 'error-calculating-side',
      })

    const res = await postData({ values: filledSides, relation: lookingFor })
    setValue(unknownSide, parseInt(res.data).toPrecision(2))
  }

  return (
    <Box
      onSubmit={handleSubmit(handleFormSubmit)}
      className={classes.formBox}
      component="form"
    >
      <Toaster reverseOrder={true} />
      <label className={classes.formLabel} htmlFor="sideA">
        <Typography sx={typographySx} variant="h6">
          Tamanho do 1° cateto (a):
        </Typography>
        <Input
          autoFocus
          color="primary"
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
          color="primary"
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
          color="primary"
          type="number"
          id="sideC"
          placeholder="?"
          {...register('sideC', {
            valueAsNumber: true,
          })}
        />
      </label>
      <Button />
    </Box>
  )
}

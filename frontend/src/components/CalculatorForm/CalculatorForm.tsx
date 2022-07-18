import { Box, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import axios, { AxiosResponse } from 'axios'
import { Button } from '../Button/Button'
import toast, { Toaster } from 'react-hot-toast'
import { Calculate, Delete } from '@mui/icons-material'
import { useState } from 'react'
import { format } from 'mathjs'
import { StyledForm, StyledInput, StyledLabel } from './CalculatorForm.styles'

// Formato dos dados que virão do formulário
interface RightTriangle {
  sideA?: number
  sideB?: number
  sideC?: number
}

// Formato dos dados que serão enviados para o backend
interface PostDataFormat {
  values: number[]
  relation: 'hypotenuse' | 'side'
}

interface GetUnknownSideResponse {
  filledSides: number[]
  unknownSide: string | undefined
  lookingFor: PostDataFormat['relation']
}

export function CalculatorForm() {
  // Inicializando o hook do react-hook-form. O hook é responsável por gerenciar os dados do formulário. Ele retorna um objeto com métodos para manipulação dos dados.
  const { register, handleSubmit, setValue, reset } = useForm()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Criação de uma instância do axios para requisições ao backend
  const axiosInstance = axios.create({
    // URL do backend que vem do arquivo .env.local
    baseURL: import.meta.env.VITE_API_URL,
  })

  // Função responsável pela requisição POST ao backend
  const postData = async (data: PostDataFormat): Promise<AxiosResponse> =>
    await axiosInstance.post('/api/calculate', data)

  // Função que encontra o valor NaN do array de valores
  const findNaN = ([side, value]: [string, number]): boolean => isNaN(value)

  // Função que por buscar o lado que não foi preenchido no formulário
  const getUnknownSide = (triangle: RightTriangle): GetUnknownSideResponse => {
    const filledSides = Object.values(triangle).filter(Number) as number[]
    const unknownSide = Object.entries(triangle).find(findNaN)?.[0]

    const lookingFor =
      unknownSide === 'sideC'
        ? ('hypotenuse' as PostDataFormat['relation'])
        : ('side' as PostDataFormat['relation'])
    return { filledSides, unknownSide, lookingFor }
  }

  // Função que verifica se há um lado com o valor zero
  const hasZero = (data: RightTriangle): boolean =>
    Object.values(data).includes(0)

  // Função responsável por fazer todas as verificações necessárias para o formulário ser enviado
  const handleFormSubmit = async (
    data: RightTriangle,
  ): Promise<void | string> => {
    if (hasZero(data))
      return toast.error('O lado não pode ser zero', {
        id: 'no-zero-allowed',
      })

    const { filledSides, unknownSide, lookingFor } = getUnknownSide(data)

    if (filledSides.length !== 2)
      return toast.error('Preencha dois campos!', { id: 'two-fields-required' })

    if (!unknownSide)
      return toast.error('Erro ao calcular um dos lados!', {
        id: 'error-calculating-side',
      })

    const toastId = toast.loading('Buscando API...')
    try {
      setIsLoading(true)
      const res = await postData({ values: filledSides, relation: lookingFor })
      if (res.status === 200) {
        toast.success('Busca completa!', { id: toastId })
        setValue(unknownSide, format(Number(res.data), { notation: 'fixed' }))
        toast.success('Cálculo concluído!')
      } else throw new Error()
    } catch (err) {
      toast.error('Erro ao buscar API', { id: toastId })
    } finally {
      setIsLoading(false)
    }
  }

  // Renderização do formulário de cálculo e dos botões
  return (
    <StyledForm
      data-testid="calculator-form"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Toaster reverseOrder={true} />
      <StyledLabel htmlFor="sideA">
        <Typography
          fontSize={{ sm: '1rem', lg: '1.25rem' }}
          flex={2}
          component="h6"
        >
          Cateto Oposto (a):
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <StyledInput
            autoFocus
            color="warning"
            type="number"
            id="sideA"
            placeholder="Exemplo: 4"
            {...register('sideA', {
              valueAsNumber: true,
            })}
          />
        </Box>
      </StyledLabel>

      <StyledLabel htmlFor="sideB">
        <Typography
          fontSize={{ sm: '1rem', lg: '1.25rem' }}
          flex={2}
          component="h6"
        >
          Cateto Adjacente (b):
        </Typography>
        <StyledInput
          color="warning"
          type="number"
          id="sideB"
          placeholder="Exemplo: 3"
          {...register('sideB', {
            valueAsNumber: true,
          })}
        />
      </StyledLabel>

      <StyledLabel htmlFor="sideC">
        <Typography
          fontSize={{ sm: '1rem', lg: '1.25rem' }}
          flex={2}
          component="h6"
        >
          Hipotenusa (c):
        </Typography>
        <StyledInput
          color="warning"
          type="number"
          id="sideC"
          placeholder="Exemplo: 5"
          {...register('sideC', {
            valueAsNumber: true,
          })}
        />
      </StyledLabel>
      <Box
        display="flex"
        gap={{
          xl: '1.5rem',
          lg: '1rem',
          md: '0.5rem',
          sm: '0.25rem',
          xs: '0.25rem',
        }}
        mt="3rem"
      >
        <Button
          type="submit"
          color="#7584f2"
          hoverColor="#4253ce"
          disabled={isLoading}
          title="Calcular"
        >
          Calcular
          <Calculate />
        </Button>
        <Button
          disabled={isLoading}
          type="reset"
          color="#fb6c52"
          hoverColor="#fb432f"
          onClick={() => reset()}
          title="Limpar"
        >
          Limpar
          <Delete />
        </Button>
      </Box>
    </StyledForm>
  )
}

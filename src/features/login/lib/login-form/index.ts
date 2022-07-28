import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { schema } from './schema'

const defaultValues = {
  email: '',
  password: '',
}

const validation = yupResolver(schema)

const useLoginForm = () =>
  useForm({
    defaultValues,
    resolver: validation,
  })

export { useLoginForm }

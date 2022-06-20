import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { schema } from './schema'

/**
 * Initial form input values.
 */
const defaultValues = {
  email: '',
  password: '',
}

/**
 * Form input values resolver and validation adaptor.
 */
const validation = yupResolver(schema)

/**
 * Login form
 */
const useLoginForm = () =>
  useForm({
    defaultValues,
    resolver: validation,
  })

export { useLoginForm }

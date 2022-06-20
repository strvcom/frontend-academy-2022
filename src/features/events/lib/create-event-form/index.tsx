import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { schema } from './schema'

/**
 * Initial form input values.
 */
const defaultValues = {
  title: '',
  description: '',
  date: '',
  time: '',
  capacity: 1,
}

/**
 * Form input values resolver and validation adaptor.
 */
const validation = yupResolver(schema)

/**
 * Create event form.
 */
const useCreateEventForm = () =>
  useForm({
    defaultValues,
    resolver: validation,
  })

export { EVENT_MIN_DATE } from './constants'

export { useCreateEventForm }

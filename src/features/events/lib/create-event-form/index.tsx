import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { schema } from './schema'

const defaultValues = {
  title: '',
  description: '',
  date: '',
  time: '',
  capacity: 1,
}

const validation = yupResolver(schema)

const useCreateEventForm = () =>
  useForm({
    defaultValues,
    resolver: validation,
  })

export { EVENT_MIN_DATE } from './constants'

export { useCreateEventForm }

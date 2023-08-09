import * as yup from 'yup'

import { EVENT_MIN_DATE } from './constants'

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    date: yup
      .date()
      .typeError('date is a required field')
      .min(EVENT_MIN_DATE, 'date must be in the future')
      .required(),
    time: yup
      .string()
      // custom validation
      .matches(/\d+:\d+/u, 'time must be in format HH:MM')
      .required(),
    capacity: yup
      .number()
      .typeError('capacity must be an number')
      .min(1, 'capacity must be at least 1')
      .required(),
  })
  .required()

export { schema }

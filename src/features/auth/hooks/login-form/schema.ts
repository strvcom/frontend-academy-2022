import * as yup from 'yup'

// Validation messages are optional
// yup already have some predefined validation messages
// See more: https://github.com/jquense/yup/blob/a8febddcfbe42358e63194ae8da582e66b746edf/src/locale.ts
const schema = yup
  .object({
    email: yup
      .string()
      .email('Email must be a valid email')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be at most 16 characters')
      .required('Password is a required field'),
  })
  .required()

export { schema }

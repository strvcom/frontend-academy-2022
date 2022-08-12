import type { Validators } from '~/features/form'
import { useForm } from '~/features/form'

type LoginFormData = {
  email: string
  password: string
}

const initialValues: LoginFormData = {
  email: '',
  password: '',
}

const validators: Validators<LoginFormData> = {
  email: (value) => {
    if (typeof value !== 'string') return 'Invalid e-mail value type'
    if (!value) return 'E-mail is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(value)) return 'Invalid e-mail'
  },

  password: (value) => {
    if (typeof value !== 'string') return 'Invalid password value type'
    if (!value) return 'Password is required'
  },
}

/**
 * Controls login form state.
 */
const useLoginForm = () => useForm({ initialValues, validators })

export { useLoginForm }

import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import { useCallback, useMemo, useState } from 'react'

import { mapObject } from '~/utils/mapObject'

type TFields = 'email' | 'password'
type TValues = { [key in TFields]: string }
type TValidator = <TValue>(value: TValue) => void | string

const initials = {
  values: {
    email: '',
    password: '',
  },

  touched: {
    email: false,
    password: false,
  },
}

const validators: { [key in TFields]: TValidator } = {
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
const useLoginForm = () => {
  const [values, setValues] = useState<TValues>(initials.values)
  const [touched, setTouched] = useState(initials.touched)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<Error | null>(null)

  // Compute errors based on validators.
  const errors = useMemo(
    () => mapObject(validators, (fn, field) => fn(values[field]) ?? null),
    [values]
  )

  // Compute the validity of field.
  const invalid = useMemo(() => mapObject(errors, Boolean), [errors])

  // Form is invalid when any field is invalid.
  const isValid = useMemo(
    () => !Object.values(invalid).some(Boolean),
    [invalid]
  )

  /**
   * Form submit handler constructor.
   */
  const handleSubmit = useCallback(
    (handler: (values: TValues) => Promise<void | Error>) =>
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Touch all fields uppon submission trial, so that
        // errors might be shown to the UI.
        setTouched((touched) => mapObject(touched, () => true))

        if (isValid) {
          setIsSubmitting(true)

          const handling = handler(values)

          handling
            .catch(setSubmitError)
            // Ensure we reset submit state even if promise fails
            .finally(() => setIsSubmitting(false))
        }
      },
    [values, isValid]
  )

  /**
   * Input value change handler.
   */
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Update value.
    setValues((values) => ({ ...values, [name]: value }))
  }, [])

  /**
   * Input value blur handler.
   */
  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target

    setTouched((touched) => ({ ...touched, [name]: true }))
  }, [])

  return {
    values,
    touched,
    errors,
    invalid,
    isValid,
    isSubmitting,
    submitError,
    handleSubmit,
    handleChange,
    handleBlur,
  } as const
}

export { useLoginForm }

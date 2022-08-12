import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import { useCallback, useMemo, useState } from 'react'

import { mapObject } from '~/utils/mapObject'

import type { Validators } from '../types'

type FormConfig<TFormData extends object> = {
  initialValues?: Partial<TFormData>
  validators?: Validators<TFormData>
}

const defaults = {
  initialValues: {},
  validators: {},
}

/**
 * Execute a map of validators on values.
 */
const validate = <TFormData extends object>(
  values: Partial<TFormData>,
  validators: Validators<TFormData>
) =>
  mapObject(validators, (fn, field) =>
    fn ? fn(values[field] ?? undefined) ?? null : null
  )

/**
 * Controls login form state.
 */
const useForm = <TFormData extends object>(
  config: FormConfig<TFormData> = {}
) => {
  type TValues = Partial<TFormData>

  const {
    initialValues = defaults.initialValues as TValues,
    validators = defaults.validators as Validators<TFormData>,
  } = config

  const [values, setValues] = useState<TValues>(initialValues)
  const [touched, setTouched] = useState(() => mapObject(values, () => false))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<Error | null>(null)

  // Compute errors based on validators.
  const errors = useMemo(
    () => validate(values, validators),
    [values, validators]
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
    (handler: (values: TFormData) => Promise<void | Error>) =>
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Touch all fields uppon submission trial, so that
        // errors might be shown to the UI.
        setTouched((touched) => mapObject(touched, () => true))

        if (isValid) {
          setIsSubmitting(true)

          const handling = handler(values as TFormData)

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

export { useForm }

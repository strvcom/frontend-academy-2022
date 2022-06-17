import { yupResolver } from '@hookform/resolvers/yup'
import type { NextPage } from 'next'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Container } from '~/features/ui/components/Container'
import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import {
  Description,
  FormWrapper,
  SubmitButton,
  Title,
  ErrorMessage,
} from './styled'

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
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password must be at most 16 characters')
      .required('Password is a required field'),
  })
  .required()

type FormInputs = yup.InferType<typeof schema>

export const LoginPage: NextPage = () => {
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })

  /**
   * Login handler.
   */
  const login = useCallback((data: FormInputs) => {
    // Temporarily show submitted data in the console
    console.log({ data })

    setIsSubmitting(true)

    setTimeout(() => {
      // Mocking to represent login submit outcome.
      const shouldFail = Math.random() < 0.5

      if (shouldFail) {
        setSubmitError('Something went terribly wrong!')
      } else {
        alert('Success!')
      }

      setIsSubmitting(false)
    }, 1000)
  }, [])

  return (
    <LayoutExternal>
      <Container>
        <FormWrapper>
          <Title>Sign in to Eventio.</Title>

          {submitError ? (
            <ErrorMessage>{submitError}</ErrorMessage>
          ) : (
            <Description>Enter your details below.</Description>
          )}

          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(login)}
            // Disable native form validation
            noValidate
          >
            <Input
              label="Email"
              type="email"
              error={errors?.email?.message}
              autoComplete="username"
              {...register('email')}
            />

            <Input
              label="Password"
              type="password"
              error={errors?.password?.message}
              autoComplete="current-password"
              {...register('password')}
            />
            <p>
              <SubmitButton disabled={isSubmitting}>
                {isSubmitting ? 'Submitting' : 'Sign In'}
              </SubmitButton>
            </p>
          </form>
        </FormWrapper>
      </Container>
    </LayoutExternal>
  )
}

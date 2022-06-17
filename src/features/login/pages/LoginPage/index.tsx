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

type FormInputs = {
  email: string
  password: number
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
  })
  .required()

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
              {...register('email')}
            />

            <Input
              label="Password"
              type="password"
              error={errors?.password?.message}
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

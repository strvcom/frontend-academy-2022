import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { useLogin } from '~/features/auth/hooks/useLogin'
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

import { useLoginForm } from '../../lib/login-form'

export const LoginPage: NextPage = () => {
  const router = useRouter()
  const { mutate } = useLogin()
  const form = useLoginForm()
  const [submitError, setSubmitError] = useState<string | null>(null)

  /**
   * Login handler.
   */
  const handleSubmit = form.handleSubmit((values) => {
    mutate(values, {
      onSuccess: () => void router.push('/'),
      onError: (error) => setSubmitError(error.message),
    })
  })

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
            // Disable native form validation
            noValidate
            onSubmit={handleSubmit}
          >
            <Input
              label="Email"
              type="email"
              error={form.formState.errors.email?.message}
              autoComplete="username"
              {...form.register('email')}
            />

            <Input
              label="Password"
              type="password"
              error={form.formState.errors.password?.message}
              autoComplete="current-password"
              {...form.register('password')}
            />
            <p>
              <SubmitButton disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Submitting' : 'Sign In'}
              </SubmitButton>
            </p>
          </form>
        </FormWrapper>
      </Container>
    </LayoutExternal>
  )
}

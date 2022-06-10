import type { NextPage } from 'next'
import type { FormEvent } from 'react'
import { useState, useCallback } from 'react'

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

const validators = {
  email: (value: string) => {
    if (typeof value !== 'string') return 'Invalid e-mail value type'
    if (!value) return 'E-mail is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(value)) return 'Invalid e-mail'
  },

  password: (value: string) => {
    if (typeof value !== 'string') return 'Invalid password value type'
    if (!value) return 'Password is required'
  },
}

export const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Login handler.
   */
  const login = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const errors = {
        email: validators.email(email),
        password: validators.password(password),
      }

      if (errors.email) {
        setEmailError(errors.email)
      }

      if (errors.password) {
        setPasswordError(errors.password)
      }

      // Only submit in case of no errors.
      if (!errors.email && !errors.password) {
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
      }
    },
    [email, password]
  )

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

          <form onSubmit={login}>
            <Input
              label="Email"
              type="email"
              name="email"
              value={email}
              error={emailError}
              onChange={(e) => {
                setEmailError(null)
                setEmail(e.target.value)
              }}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={password}
              error={passwordError}
              onChange={(e) => {
                setPasswordError(null)
                setPassword(e.target.value)
              }}
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

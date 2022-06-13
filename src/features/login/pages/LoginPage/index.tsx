import type { NextPage } from 'next'

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

import { useLoginForm } from '../../lib/hooks/useLoginForm'

export const LoginPage: NextPage = () => {
  const form = useLoginForm()

  /**
   * Login handler.
   */
  const login = form.handleSubmit(
    async (values) =>
      await new Promise((resolve, reject) => {
        console.log({ values })

        // Simulate network delay.
        setTimeout(() => {
          // Mocking to represent login submit outcome.
          const shouldFail = Math.random() < 0.5

          if (shouldFail) {
            reject(new Error('Something went terribly wrong!'))
          } else {
            alert('Success!')
            resolve()
          }
        }, 1000)
      })
  )

  return (
    <LayoutExternal>
      <Container>
        <FormWrapper>
          <Title>Sign in to Eventio.</Title>

          {form.submitError ? (
            <ErrorMessage>{form.submitError.message}</ErrorMessage>
          ) : (
            <Description>Enter your details below.</Description>
          )}

          <form onSubmit={login}>
            <Input
              label="Email"
              type="email"
              name="email"
              value={form.values.email}
              error={form.touched.email ? form.errors.email : null}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={form.values.password}
              error={form.touched.password ? form.errors.password : null}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <p>
              <SubmitButton disabled={form.isSubmitting}>
                {form.isSubmitting ? 'Submitting' : 'Sign In'}
              </SubmitButton>
            </p>
          </form>
        </FormWrapper>
      </Container>
    </LayoutExternal>
  )
}

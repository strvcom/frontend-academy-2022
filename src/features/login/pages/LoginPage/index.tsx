import type { NextPage } from 'next'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '~/features/ui/components/Button'
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

export const LoginPage: NextPage = () => {
  const [error, setError] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('TODO')
  }

  return (
    <LayoutExternal>
      <Container>
        <FormWrapper>
          <Title>Sign in to Eventio.</Title>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <Description>Enter your details below.</Description>
          )}
          <form onSubmit={onSubmit}>
            <Input label="Email" type="email" name="email" error={error} />
            <Input
              label="Password"
              type="password"
              name="password"
              error={error}
            />
            <p>
              <SubmitButton>Sign In</SubmitButton>
            </p>

            {/*
            Created just to showcase CSS animations.
            To be removed. Please do not use style attribute.
          */}
            <p style={{ marginTop: '1rem' }}>
              <Button
                type="button"
                size="small"
                accent="destructive"
                onClick={() => setError(Date.now().toString())}
              >
                Trigger Error
              </Button>
            </p>
          </form>
        </FormWrapper>
      </Container>
    </LayoutExternal>
  )
}

import type { NextPage } from 'next'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { Title } from './styled'

export const LoginPage: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('TODO')
  }

  return (
    <LayoutExternal>
      <Title>Sign in to Eventio.</Title>
      <p>Enter your details below.</p>
      <form onSubmit={onSubmit}>
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <button type="submit">Sign In</button>
      </form>
    </LayoutExternal>
  )
}

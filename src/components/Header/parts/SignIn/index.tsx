import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/constants/routes'

import { Anchor } from './styles'

export const SignIn: FC = () => (
  <Link href={Routes.LOGIN} passHref>
    <Anchor>
      Already have an account? <b>Sign in</b>
    </Anchor>
  </Link>
)

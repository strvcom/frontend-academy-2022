import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

export const SignIn: FC = () => (
  <Link href={Routes.LOGIN}>
    <a>
      Already have an account? <b>Sign in</b>
    </a>
  </Link>
)

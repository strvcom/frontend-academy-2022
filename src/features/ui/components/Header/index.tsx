import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { SignIn } from './parts/SingIn'

export const Header: FC = () => (
  <header>
    <Logo />
    <SignIn />
  </header>
)

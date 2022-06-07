import type { FC, ReactNode } from 'react'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

type Props = {
  isExternal?: boolean
  actionComponent?: ReactNode
}

export const Header: FC<Props> = ({ isExternal = false, actionComponent }) => (
  <StyledHeader isAbsolute={isExternal}>
    <StyledLogo />
    {actionComponent ?? <SignIn />}
  </StyledHeader>
)

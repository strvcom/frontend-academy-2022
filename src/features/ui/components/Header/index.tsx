import type { FC } from 'react'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

type Props = {
  isExternal?: boolean
}

export const Header: FC<Props> = ({ isExternal }) => (
  <StyledHeader isAbsolute={isExternal}>
    <StyledLogo />
    <SignIn />
  </StyledHeader>
)

Header.defaultProps = {
  isExternal: false,
}

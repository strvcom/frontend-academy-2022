import type { FC, ReactNode } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { AccountInfo } from '~/features/ui/components/AccountInfo'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

type Props = {
  isExternal?: boolean
  actionComponent?: ReactNode
}

export const Header: FC<Props> = ({ isExternal = false, actionComponent }) => {
  const { user } = useUserContext()

  return (
    <StyledHeader isAbsolute={isExternal}>
      <StyledLogo />
      {actionComponent ?? (user ? <AccountInfo user={user} /> : <SignIn />)}
    </StyledHeader>
  )
}

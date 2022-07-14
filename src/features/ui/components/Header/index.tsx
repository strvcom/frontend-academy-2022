import type { FC, ReactNode } from 'react'

import { useUserContext } from '~/features/auth'
import type { User } from '~/features/events'

import { AccountInfo } from '../AccountInfo'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

export type ContainerProps = {
  isExternal?: boolean
  actionComponent?: ReactNode
}

export type ComponentProps = {
  user: User | null
}

export const HeaderComponent: FC<ContainerProps & ComponentProps> = ({
  isExternal,
  actionComponent,
  user,
}) => (
  <StyledHeader isAbsolute={isExternal}>
    <StyledLogo />
    {actionComponent ?? (user ? <AccountInfo user={user} /> : <SignIn />)}
  </StyledHeader>
)

export const Header: FC<ContainerProps> = ({
  isExternal = false,
  actionComponent,
}) => {
  const { user } = useUserContext()

  return (
    <HeaderComponent
      isExternal={isExternal}
      actionComponent={actionComponent}
      user={user}
    />
  )
}

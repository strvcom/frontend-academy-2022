import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC, ReactNode } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo, BackLink } from './styled'

import { EyeIcon } from '../Input/parts/EyeIcon'

type Props = {
  isExternal?: boolean
  actionComponent?: ReactNode
}

export const Header: FC<Props> = ({ isExternal = false, actionComponent }) => {
  const routerBackMap = {
    events: {
      text: 'Back to events',
      path: Routes.DASHBOARD,
    },
  }

  const { pathname } = useRouter()

  const currentRoute = pathname.substring(
    pathname.indexOf('/') + 1,
    pathname.lastIndexOf('/')
  )

  return (
    <StyledHeader isAbsolute={isExternal}>
      <StyledLogo />

      {!!currentRoute && routerBackMap[currentRoute] && (
        <BackLink>
          <Link href={routerBackMap[currentRoute].path} passHref>
            <div>
              <EyeIcon />
              {routerBackMap[currentRoute].text}
            </div>
          </Link>
        </BackLink>
      )}

      {actionComponent ?? <SignIn />}
    </StyledHeader>
  )
}

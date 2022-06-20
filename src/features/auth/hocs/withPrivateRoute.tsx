import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useUserContext } from '~/features/auth/contexts/userContext'
import { Routes } from '~/features/core/constants/routes'

export const withPrivateRoute = (WrappedComponent: NextPage): NextPage => {
  const HOCComponent: NextPage = ({ ...props }) => {
    const router = useRouter()
    const { user } = useUserContext()
    useEffect(() => {
      if (!user) void router.replace(Routes.LOGIN)
    }, [router, user])

    return <WrappedComponent {...props} />
  }

  return HOCComponent
}

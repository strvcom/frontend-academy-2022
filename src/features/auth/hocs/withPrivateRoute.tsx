import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { getPersistedUser } from '~/features/auth/storage'
import { Routes } from '~/features/core/constants/routes'

export const withPrivateRoute = (WrappedComponent: NextPage): NextPage => {
  const HOCComponent: NextPage = ({ ...props }) => {
    const router = useRouter()
    useEffect(() => {
      const user = getPersistedUser()
      if (!user) void router.replace(Routes.LOGIN)
    }, [router])

    return <WrappedComponent {...props} />
  }

  return HOCComponent
}

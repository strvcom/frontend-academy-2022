import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Routes } from '~/features/core'

import { getPersistedUser } from '../storage'

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

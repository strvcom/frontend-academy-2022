import * as Sentry from '@sentry/nextjs'
import type { FC, ReactNode } from 'react'
import { useEffect } from 'react'
import { useMemo, useCallback } from 'react'
import React, { createContext, useState, useContext } from 'react'

import {
  getPersistedUser,
  removeAccessToken,
  removePersistedUser,
  removeRefreshToken,
} from '../storage'

export type UserType = {
  id: string
  firstName: string
  lastName: string
  email: string
}

type ContextValue = {
  user: UserType | null
  setUser: (user: UserType) => void
  handleLogout: () => void
}

export const UserContext = createContext<ContextValue>({
  user: null,
  setUser: () => {},
  handleLogout: () => {},
})

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => setUser(getPersistedUser()), [])

  const handleLogout = useCallback(() => {
    Sentry.captureMessage('handling logout')

    setUser(null)
    removePersistedUser()
    removeRefreshToken()
    removeAccessToken()
  }, [])

  const value = useMemo(
    () => ({
      user,
      setUser,
      handleLogout,
    }),
    [handleLogout, user]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserContext = () => {
  return useContext(UserContext)
}

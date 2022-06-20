import type { FC, ReactNode } from 'react'
import { useEffect } from 'react'
import { useMemo, useCallback } from 'react'
import React, { createContext, useState, useContext } from 'react'

import { apiInternal } from '~/features/api/lib/client'
import {
  getPersistedUser,
  removeAccessToken,
  removePersistedUser,
} from '~/features/auth/storage'
import { ApiRoutes } from '~/features/core/constants/routes'

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
    setUser(null)
    removePersistedUser()
    removeAccessToken()
    void apiInternal.post(ApiRoutes.LOGOUT)
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

import * as Sentry from '@sentry/nextjs'
import type { FC, ReactNode } from 'react'
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react'

import {
  getPersistedUser,
  removeAccessToken,
  removePersistedUser,
  removeRefreshToken,
} from '../lib/storage'
import type { UserType } from '../types'

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

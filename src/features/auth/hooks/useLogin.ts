import { useMutation } from 'react-query'

import { apiInternal } from '~/features/api/lib/client'
import type { UserType } from '~/features/auth/contexts/userContext'
import { useUserContext } from '~/features/auth/contexts/userContext'
import { setPersistedUser } from '~/features/auth/storage'
import { ApiRoutes } from '~/features/core/constants/routes'

export type LoginInput = {
  email: string
  password: string
}

export const useLogin = () => {
  const { setUser } = useUserContext()
  const result = useMutation<UserType, Error, LoginInput>(
    'login',
    async (credentials) => {
      const response = await apiInternal.post(ApiRoutes.LOGIN, {
        json: credentials,
      })

      if (!response.ok) {
        throw new Error('Login Failed')
      }

      const user = (await response.json()) as UserType
      setUser(user)
      setPersistedUser(user)
      return user
    }
  )

  return result
}

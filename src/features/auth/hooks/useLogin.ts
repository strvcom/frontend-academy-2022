import { useMutation } from 'react-query'

import { api } from '~/features/api'
import type { UserType } from '~/features/auth/contexts/userContext'
import { useUserContext } from '~/features/auth/contexts/userContext'
import { setPersistedUser } from '~/features/auth/storage'

type LoginInput = {
  email: string
  password: string
}

export const useLogin = () => {
  const { setUser } = useUserContext()
  const result = useMutation<UserType, Error, LoginInput>(
    'login',
    async (credentials) => {
      const response = await api.post('/auth/native', { json: credentials })

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

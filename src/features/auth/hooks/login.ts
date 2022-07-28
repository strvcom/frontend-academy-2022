import { useMutation } from 'react-query'

import { api } from '~/features/api'

import { useUserContext } from '../contexts/user'
import { setPersistedUser } from '../lib/storage'
import type { UserType } from '../types'

type LoginInput = {
  email: string
  password: string
}

export const useLogin = () => {
  const { setUser } = useUserContext()

  return useMutation<UserType, Error, LoginInput>(
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
}

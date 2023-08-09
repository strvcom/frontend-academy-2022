import { useMutation } from 'react-query'

import { api } from '~/features/api'

import { useUserContext } from '../contexts/user'
import { setPersistedUser } from '../lib/storage'
import type { UserType, AuthError } from '../types'

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
      const data = (await response.json().catch(() => null)) as
        | UserType
        | AuthError
        | null

      if (data && 'code' in data) {
        throw new Error(data.message)
      }

      if (!response.ok || !data) {
        throw new Error('Login Failed')
      }

      setUser(data)
      setPersistedUser(data)
      return data
    }
  )
}

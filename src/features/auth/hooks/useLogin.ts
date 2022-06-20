import { useMutation } from 'react-query'

import { api } from '~/features/api'

type LoginInput = {
  email: string
  password: string
}

type UserType = {
  id: string
  firstName: string
  lastName: string
  email: string
}

export const useLogin = () => {
  const result = useMutation<UserType, Error, LoginInput>(
    'login',
    async (credentials) => {
      const response = await api.post('/auth/native', { json: credentials })

      if (!response.ok) {
        throw new Error('Login Failed')
      }

      const user = (await response.json()) as UserType
      return user
    }
  )

  return result
}

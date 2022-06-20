import type { UserType } from '~/features/auth/contexts/userContext'

export const getPersistedUser = (): UserType | null => {
  const userJson = window.localStorage.getItem('user')
  return userJson ? (JSON.parse(userJson) as UserType) : null
}

export const setPersistedUser = (user: UserType) => {
  window.localStorage.setItem('user', JSON.stringify(user))
}

export const removePersistedUser = () => {
  window.localStorage.removeItem('user')
}

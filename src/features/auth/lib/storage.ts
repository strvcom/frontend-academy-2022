import type { UserType } from '../types'

export const getAccessToken = () => {
  return window.localStorage.getItem('accessToken')
}

export const setAccessToken = (accessToken: string) => {
  window.localStorage.setItem('accessToken', accessToken)
}

export const removeAccessToken = () => {
  window.localStorage.removeItem('accessToken')
}

export const getRefreshToken = () => {
  return window.localStorage.getItem('refreshToken')
}

export const setRefreshToken = (refreshToken: string) => {
  window.localStorage.setItem('refreshToken', refreshToken)
}

export const removeRefreshToken = () => {
  window.localStorage.removeItem('refreshToken')
}

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

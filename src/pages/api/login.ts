import cookie from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

import { apiSSR } from '~/features/api/lib/client'
import type { UserType } from '~/features/auth/contexts/userContext'
import type { LoginInput } from '~/features/auth/hooks/useLogin'

const REFRESH_COOKIE_AGE = 60 * 60 * 24 * 30
const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const REFRESH_TOKEN_COOKIE = 'refresh_token'
export const REFRESH_COOKIE_OPTIONS = {
  // javascript cant access
  httpOnly: true,
  // allowed only through https - but localhost does not use it
  secure: process.env.NODE_ENV !== 'development',
  // same as true
  sameSite: 'strict',
  // ideally as refresh token or custom
  maxAge: REFRESH_COOKIE_AGE,
  // root path of cookie
  path: '/',
} as const

async function handler(req: NextApiRequest, nextApiResponse: NextApiResponse) {
  if (req.method !== 'POST') return
  if (!BASE_URL || !API_KEY) return

  const credentials = req.body as LoginInput
  if (!credentials.email || !credentials.password) return

  const loginResponse = await apiSSR.post('/auth/native', {
    json: credentials,
  })

  if (loginResponse.status >= 400) {
    return nextApiResponse
      .status(loginResponse.status)
      .json({ message: 'Login Failed' })
  }

  const user = (await loginResponse.json()) as UserType

  const accessToken = loginResponse.headers.get('Authorization')
  accessToken && nextApiResponse.setHeader('Authorization', accessToken)

  const refreshToken = loginResponse.headers.get('Refresh-Token')
  refreshToken &&
    nextApiResponse.setHeader(
      'Set-Cookie',
      cookie.serialize(REFRESH_TOKEN_COOKIE, refreshToken, {
        ...REFRESH_COOKIE_OPTIONS,
      })
    )

  nextApiResponse.status(200).json(user)
}
export default handler

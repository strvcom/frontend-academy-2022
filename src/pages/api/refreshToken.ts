import type { NextApiRequest, NextApiResponse } from 'next'

import { apiSSR } from '~/features/api/lib/client'
import type { UserType } from '~/features/auth/contexts/userContext'
import { REFRESH_TOKEN_COOKIE } from '~/pages/api/login'

async function handler(req: NextApiRequest, nextApiResponse: NextApiResponse) {
  const refreshToken = req.cookies[REFRESH_TOKEN_COOKIE]
  if (!refreshToken) {
    return nextApiResponse
      .status(400)
      .json({ message: 'Missing refresh token' })
  }
  const refreshResponse = await apiSSR.post('/auth/native', {
    json: { refreshToken },
  })

  if (refreshResponse.status === 401 || refreshResponse.status === 403) {
    return nextApiResponse
      .status(refreshResponse.status)
      .json({ message: 'Invalid refresh token' })
  }

  const refreshResponseData = (await refreshResponse.json()) as UserType
  const accessToken = refreshResponse.headers.get('Authorization')
  accessToken && nextApiResponse.setHeader('Authorization', accessToken)

  return nextApiResponse.status(200).json(refreshResponseData)
}

export default handler

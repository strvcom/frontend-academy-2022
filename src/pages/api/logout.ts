import cookie from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

import { REFRESH_TOKEN_COOKIE, REFRESH_COOKIE_OPTIONS } from '~/pages/api/login'

function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize(REFRESH_TOKEN_COOKIE, '', {
      ...REFRESH_COOKIE_OPTIONS,
      maxAge: 0,
    })
  )

  res.status(200).end('Session expired')
}

export default handler

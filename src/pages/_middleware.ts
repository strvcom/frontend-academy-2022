import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { Routes } from '~/features/core/constants/routes'
import { REFRESH_TOKEN_COOKIE } from '~/pages/api/login'

export function middleware(req: NextRequest) {
  // extend the logic for your protected routes
  if (!req.url.includes(Routes.CREATE_EVENT)) {
    return NextResponse.next()
  }

  // if refresh token is in the cookie, we assume the user is logged in
  const refreshToken = req.cookies[REFRESH_TOKEN_COOKIE]
  return refreshToken
    ? NextResponse.next()
    : NextResponse.redirect(new URL(Routes.LOGIN, req.url))
}

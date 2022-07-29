import * as Sentry from '@sentry/nextjs'
import router from 'next/router'

import { Routes } from '~/constants/routes'
import { getAccessToken, getRefreshToken } from '~/features/auth'

import { api } from './client'
import type {
  AfterRequestInterceptor,
  BeforeRequestInterceptor,
} from './network-provider'

const appendAccessToken: BeforeRequestInterceptor = (request) => {
  const accessToken = getAccessToken()
  accessToken && request.headers.append('Authorization', accessToken)
  return request
}

const handleUnauthorized: AfterRequestInterceptor = async (
  request,
  options,
  response,
  context
) => {
  const isUnauthorized = response.status === 403 || response.status === 401
  const refreshToken = getRefreshToken()

  if (!isUnauthorized) {
    return response
  }

  Sentry.captureMessage('handling unauthorized request')

  if (!refreshToken) {
    Sentry.captureMessage('missing refreshToken')
    return response
  }

  // persistTokens interceptor will store the tokens if refresh succeeds
  const refreshResponse = await api.post('/auth/native', {
    json: { refreshToken },
  })

  if (!refreshResponse.ok) {
    Sentry.captureMessage('refreshResponse failed to refresh token')

    void router.replace({
      pathname: Routes.LOGIN,
      // we need to clear persisted stuff and context
      query: { from: 'unauthorized' },
    })

    return response
  }

  // repeat request with fresh accessToken
  return await context.client.makeRequest(request.url, { ...options })
}

const privateApi = api.extend({
  interceptors: {
    beforeRequest: [appendAccessToken],
    afterRequest: [handleUnauthorized],
  },
})

export { privateApi }

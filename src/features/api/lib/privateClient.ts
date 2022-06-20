import router from 'next/router'

import { api } from '~/features/api/lib/client'
import type {
  AfterRequestInterceptor,
  BeforeRequestInterceptor,
} from '~/features/api/lib/network-provider'
import { getAccessToken, getRefreshToken } from '~/features/auth/storage'
import { Routes } from '~/features/core/constants/routes'

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
  if (response.status === 403 || response.status === 401) {
    const refreshToken = getRefreshToken()
    if (!refreshToken) {
      return response
    }

    // persistTokens interceptor will store the tokens if refresh succeeds
    const refreshResponse = await api.post('/auth/native', {
      json: { refreshToken },
    })
    if (refreshResponse.status >= 400) {
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

  return response
}

const privateApi = api.extend({
  interceptors: {
    beforeRequest: [appendAccessToken],
    afterRequest: [handleUnauthorized],
  },
})

export { privateApi }

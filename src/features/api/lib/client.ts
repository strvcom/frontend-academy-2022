import { env } from '~/env'
import { setAccessToken, setRefreshToken } from '~/features/auth'

import type {
  AfterRequestInterceptor,
  BeforeRequestInterceptor,
} from './network-provider'
import { NetworkProvider } from './network-provider'

const apiUrl = env('NEXT_PUBLIC_API_URL')
const apiKey = env('NEXT_PUBLIC_API_KEY')

const persistTokens: AfterRequestInterceptor = (
  _request,
  _options,
  response
) => {
  const accessToken = response.headers.get('Authorization')
  const refreshToken = response.headers.get('Refresh-Token')
  if (accessToken) setAccessToken(accessToken)
  if (refreshToken) setRefreshToken(refreshToken)
  return response
}

/**
 * Before request hook to append API Key header on all requests.
 */
const appendAPIKey: BeforeRequestInterceptor = (request) => {
  request.headers.append('APIKey', apiKey)
  return request
}

const api = new NetworkProvider({
  baseUrl: apiUrl,
  interceptors: {
    beforeRequest: [appendAPIKey],
    afterRequest: [persistTokens],
  },
})

export { api }

import { setAccessToken } from '~/features/auth/storage'

import type {
  AfterRequestInterceptor,
  BeforeRequestInterceptor,
} from './network-provider'
import { NetworkProvider } from './network-provider'

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY

// Safeguard the application isn't initiated without NEXT_PUBLIC_API_URL
if (!apiUrl) {
  throw new Error('Missing NEXT_PUBLIC_API_URL environment variable')
}

// Safeguard the application isn't initiated without NEXT_PUBLIC_API_KEY
if (!apiKey) {
  throw new Error('Missing NEXT_PUBLIC_API_KEY environment variable')
}

const persistTokens: AfterRequestInterceptor = (
  _request,
  _options,
  response
) => {
  const accessToken = response.headers.get('Authorization')
  if (accessToken) setAccessToken(accessToken)
  return response
}

/**
 * Before request hook to append API Key header on all requests.
 */
const appendAPIKey: BeforeRequestInterceptor = (request) => {
  request.headers.append('APIKey', apiKey)
  return request
}

export const api = new NetworkProvider({
  baseUrl: apiUrl,
  interceptors: {
    beforeRequest: [appendAPIKey],
    afterRequest: [persistTokens],
  },
})

export const apiInternal = new NetworkProvider({
  interceptors: {
    afterRequest: [persistTokens],
  },
})

export const apiSSR = new NetworkProvider({
  baseUrl: apiUrl,
  interceptors: {
    beforeRequest: [appendAPIKey],
  },
})

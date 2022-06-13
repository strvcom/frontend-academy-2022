import type { BeforeRequestInterceptor } from './network-provider'
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
  },
})

export { api }

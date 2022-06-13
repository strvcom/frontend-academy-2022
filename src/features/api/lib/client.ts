import type { BeforeRequestInterceptor } from './network-provider'
import { NetworkProvider } from './network-provider'

/**
 * Before request hook to append API Key header on all requests.
 */
const appendAPIKey: BeforeRequestInterceptor = (request) => {
  request.headers.append('APIKey', 'YOUR_KEY')
  return request
}

const api = new NetworkProvider({
  baseUrl: 'https://testproject-api-v2.strv.com/',
  interceptors: {
    beforeRequest: [appendAPIKey],
  },
})

export { api }

import { api } from '~/features/api/lib/client'
import type { BeforeRequestInterceptor } from '~/features/api/lib/network-provider'
import { getAccessToken } from '~/features/auth/storage'

const appendAccessToken: BeforeRequestInterceptor = (request) => {
  const accessToken = getAccessToken()
  accessToken && request.headers.append('Authorization', accessToken)
  return request
}

const privateApi = api.extend({
  interceptors: {
    beforeRequest: [appendAccessToken],
  },
})

export { privateApi }

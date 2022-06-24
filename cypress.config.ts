/* eslint-disable import/no-default-export,@typescript-eslint/no-unused-vars,@typescript-eslint/no-misused-promises */
import { defineConfig } from 'cypress'
import http from 'http'
import next from 'next'

// TODO: .env
const BASE_URL = 'http://localhost:3000'
const NEXT_PUBLIC_API_URL = 'https://testproject-api-v2.strv.com/'

export default defineConfig({
  e2e: {
    baseUrl: BASE_URL,
    setupNodeEvents: async (on, config) => {
      config.env.api_url = NEXT_PUBLIC_API_URL

      const app = next({ dev: true })
      const handleNextRequests = app.getRequestHandler()
      await app.prepare()

      const customServer = new http.Server(async (req, res) => {
        return await handleNextRequests(req, res)
      })

      await new Promise<void>((resolve) => {
        customServer.listen(3000, () => {
          console.log(`> Ready on ${BASE_URL}`)
          resolve()
        })
      })

      // We are not actually fetching events on server. But you can intercept xhr requests with nock
      // https://glebbahmutov.com/blog/mock-network-from-server/
      // on('task', {
      //   clearNock() {
      //     nock.restore()
      //     nock.cleanAll()
      //   },
      //
      //   nock(hostname: string, method: 'get' | 'post', path: string, statusCode: number, body: any) {
      //     nock.activate()
      //     nock(hostname)[method](path).reply(statusCode, body)
      //   },
      // })

      return config
    },
  },
})

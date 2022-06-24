/* eslint-disable import/no-default-export,@typescript-eslint/no-unused-vars,@typescript-eslint/no-misused-promises */
import { defineConfig } from 'cypress'
import http from 'http'
import next from 'next'

const BASE_URL = 'http://localhost:3000'

export default defineConfig({
  e2e: {
    baseUrl: BASE_URL,
    setupNodeEvents: async (on, config) => {
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

      return config
    },
  },
})

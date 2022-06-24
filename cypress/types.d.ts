/* eslint-disable @typescript-eslint/no-explicit-any */

interface ICredentials {
  valid: {
    email: string
    password: string
  }
  invalid: {
    email: string
    password: string
  }
}

declare namespace Cypress {
  interface Chainable {
    fillInput(selector: string, value: string): void

    interceptPath(
      uri: string,
      body: any,
      method: 'GET' | 'POST' = 'GET',
      statusCode: number = 200
    ): void
  }
}

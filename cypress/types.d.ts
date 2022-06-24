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
  }
}

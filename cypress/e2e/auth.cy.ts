describe('[scenario] auth', () => {
  let valid: ICredentials['valid']
  let invalid: ICredentials['invalid']

  before(() => {
    cy.fixture('credentials').then((credentials: ICredentials) => {
      valid = credentials.valid
      invalid = credentials.invalid
    })
  })

  describe('when invalid credentials', () => {
    it('should show login error message', () => {
      cy.visit('/login')
      cy.fillInput('input[name="email"]', invalid.email)
      cy.fillInput('input[name="password"]', invalid.password)
      cy.get('form').submit()

      cy.get('p').should('contain', 'Login Failed')
    })
  })

  describe('when valid credentials', () => {
    it('should redirect to events', () => {
      cy.visit('/login')
      cy.fillInput('input[name="email"]', valid.email)
      cy.fillInput('input[name="password"]', valid.password)
      cy.get('form').submit()

      cy.get('h1').should('contain', 'Dashboard')
    })

    describe('when logged in', () => {
      it('should log out', () => {
        cy.get('header button').contains('Logout').click()
        cy.get('header b').should('contain', 'Sign in')
      })
    })
  })
})

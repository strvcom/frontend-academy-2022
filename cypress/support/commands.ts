Cypress.Commands.add('fillInput', (selector: string, value: string) => {
  cy.get(selector).should('be.visible').type(value, { force: true })
})

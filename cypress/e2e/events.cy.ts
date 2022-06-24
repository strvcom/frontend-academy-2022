describe('[scenario] list events', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should list events', () => {
    cy.get('ul > li article').should('have.length', 42)
  })

  describe('when user clicks on future events', () => {
    it('should only show future events', () => {
      cy.get('button').contains('Future Events').click()
      cy.get('ul > li article').should('have.length', 30)
    })
  })

  describe('when user clicks on past events', () => {
    it('should only show past events', () => {
      cy.get('button').contains('Past Events').click()

      cy.get('ul > li article').should('have.length', 12)
    })
  })

  describe('when user clicks on all events', () => {
    it('should only show past events', () => {
      cy.get('button').contains('All Events').click()
      cy.get('ul > li article').should('have.length', 42)
    })
  })
})

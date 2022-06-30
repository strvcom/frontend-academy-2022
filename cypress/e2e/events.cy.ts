import { createEvent } from '~/features/events/types.fixtures'

describe('[scenario] list events', () => {
  const expectedEvents = [
    createEvent(),
    createEvent({ isPastEvent: true }),
    createEvent(),
  ]

  beforeEach(() => {
    cy.interceptPath('/events', expectedEvents)
    cy.visit('/')
  })

  it('should list events', () => {
    cy.get('ul > li article').should('have.length', 3)
  })

  describe('when user clicks on future events', () => {
    it('should only show future events', () => {
      cy.get('button').contains('Future Events').click()
      cy.get('ul > li article').should('have.length', 2)
    })
  })

  describe('when user clicks on past events', () => {
    it('should only show past events', () => {
      cy.get('button').contains('Past Events').click()

      cy.get('ul > li article').should('have.length', 1)
    })
  })

  describe('when user clicks on all events', () => {
    it('should only show past events', () => {
      cy.get('button').contains('All Events').click()
      cy.get('ul > li article').should('have.length', 3)
    })
  })
})

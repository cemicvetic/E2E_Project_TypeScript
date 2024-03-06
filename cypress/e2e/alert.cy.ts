import { AlertPage } from '../../pages/Alert'

describe('ALERT', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`)
    })
    it('Click for JS Alert', () => {
        AlertPage.jsAlert()
    })
})

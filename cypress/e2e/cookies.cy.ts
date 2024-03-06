import { LoginPage } from '../../pages/Login'

describe('COOKIES', () => {
    beforeEach(() => {
        cy.session('myCurrentSession', () => {
            cy.visit(`${Cypress.env('demoQA')}/login`)
            LoginPage.submitButtonLogin()
            cy.contains('Log out')
        })
    })
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    })
    // no cookies created
    it('create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.url().then((url) => {
            cy.log(url)
        })
    })
    // no cookies created
    it('create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.contains('Log out')
    })
})

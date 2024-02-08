import{LoginPage} from "../../pages/Login";

describe('LOGIN PAGE', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.intercept({resourceType: /xhr|fetch/}, {log: false})
    })
    it('login', () => {
        cy.get('#userName').type('test')
        cy.get('#password').type('Test1234*')
        cy.get('#login').click()
        cy.contains('Log out')
    })
    it('login with PageObject', () => {
        LoginPage.submitButtonLogin()
        cy.contains('Log out')
    })

})
describe('LOGIN PAGE', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.intercept({resourceType: /xhr|fetch/}, {log: false})
    })
    it('login', () => {
        cy.get('input[placeholder=\'UserName\']').type('test')
        cy.get('#password').type('Test1234*')
        cy.get('#login').click()
        cy.contains('Log out')
    })
})
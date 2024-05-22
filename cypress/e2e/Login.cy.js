describe('Login', () => {

    it('Verify User can Login', () => {
        cy.visit('/')
        cy.get('a[href="/login"]').click()
        cy.get('input[data-qa="login-email"]').type('velleiceiwitra-8229@yopmail.com')
        cy.get('input[data-qa="login-password"]').type(Cypress.env('user_password'))
        cy.get('button[data-qa="login-button"]').click()

    });

})



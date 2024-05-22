import LoginPage from "../support/WebPages_POM/LoginPage";



const loginpage = new LoginPage

describe('Login', () => {

    it('Verify User can Login', () => {
        cy.visit('/')
        loginpage.SigninLoginButton().click()
        loginpage.EmailAddressField().type('velleiceiwitra-8229@yopmail.com')
        loginpage.PasswordField().type(Cypress.env('user_password'))
        loginpage.LoginButton().click()

    });

})
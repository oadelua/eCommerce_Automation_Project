class LoginPage {
    SigninLoginButton() {
        return cy.get('a[href="/login"]')
    }
    EmailAddressField(){
        return cy.get('input[data-qa="login-email"]')
    }
    PasswordField() {
        return cy.get('input[data-qa="login-password"]')
    }
    LoginButton() {
        return cy.get('button[data-qa="login-button"]')
    }

}
export default LoginPage
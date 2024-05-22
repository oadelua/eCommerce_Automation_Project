const signup_name = 'UserAB'
const signup_email ='velleiceiwitra-8229@yopmail.com'
const signup_fn ='Automation'
const signup_ln ='Expert'
const signup_cn ='OBATech Hub'
const signup_address = 'OBATech Hub District Highway, Bahamas'



describe('eCommerce - Signup flow', () => {
beforeEach( () => {
  cy.visit('/')
  

})
  
  it('Verifty user can signup', () => {
    
    cy.get('a[href="/login"]').click()
    cy.get('input[data-qa="signup-name"]').type(signup_name)
    cy.get('input[data-qa="signup-email"]').type(signup_email)
    cy.get('button[data-qa="signup-button"]').click()
    cy.get('#id_gender1').check()
    cy.contains('Address Information').should('be.visible').and('have.text','Address Information')
    cy.location('pathname').should('eq','/signup')
    cy.get('input[data-qa="password"]').type(Cypress.env('user_password'))
    cy.get('select[data-qa="days"]').select('30')
    cy.get('select[data-qa="months"]').select('March')
    cy.get('select[data-qa="years"]').select('1982')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('input[data-qa="first_name"]').type(signup_fn)
    cy.get('input[data-qa="last_name"]').type(signup_ln)
    cy.get('input[data-qa="company"]').type(signup_cn)
    cy.get('input[data-qa="address"]').type(signup_address)
    cy.get('select[data-qa="country"]').select('Canada')
    cy.get('#state').type('Ontario')
    cy.get('input[data-qa="city"]').type('London')
    cy.get('input[data-qa="zipcode"]').type('LND09FX')
    cy.get('#mobile_number').type('76543109')
    cy.get('button[data-qa="create-account"]').should('be.visible')
    cy.get('button[data-qa="create-account"]').click()

  })
})
import ContactUsPage from "../support/WebPages_POM/ContactUsPage";

const contactUsPage = new ContactUsPage

describe ('ContactUs page', () =>{

    it('Verify user can send an email', () => {
        cy.visit('/')
        cy.get('a[href="/contact_us"]').click()
        contactUsPage.NameField().type('UserAB')
        contactUsPage.EmailField().type('velleiceiwitra-8229@yopmail.com')
        contactUsPage.SubjectField().type('DELAYED DELIVERY')
        contactUsPage.MessageField().type('It has been over 5 days since my last order, when would my item be delivered?')

    });


})
class ContactUsPage {
    NameField() {
        return cy.get('input[data-qa="name"]')
    }
    EmailField() {
        return cy.get('input[data-qa="email"]')
    }
    SubjectField() {
        return cy.get('input[data-qa="subject"]')
    }
    MessageField() {
        return cy.get('textarea[data-qa="message"]')
    }

}
export default ContactUsPage
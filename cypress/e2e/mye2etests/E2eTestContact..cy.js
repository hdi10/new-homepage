describe('example to-do app', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://192.168.178.199:3000\n/Contact')
    })

    it('.type() - in a DOM Field', () => {
        cy.get('[data-cy=contact-name]').type('fakeuser')
        cy.get('[data-cy=contact-email]').type('fake@mail.com')
        cy.get('[data-cy=contact-message]').type('This is a  fake message.')

        cy.contains('Send').click();
    })
})


describe('Contact Page + Login Form', () => {
    beforeEach(() => {
        cy.visit('http://192.168.178.199:3000/Contact'); // Pfad ohne Zeilenumbruch!
    });

    it('should fill and submit the contact form badtest', () => {
        cy.get('[data-cy=contact-name]').type('fakeuser');
        cy.get('[data-cy=contact-email]').type('fake@mail.com');
        cy.get('[data-cy=contact-message]').type('This is a fake message.');
        cy.contains('Send').click();
    });

    it('should get Error message', () => {
        cy.get('[data-cy=login-username]').type('user789');
        cy.get('[data-cy=login-password]').type('password789');
        cy.get('[data-cy=login-submit]').click();
        cy.get('[data-cy=login-error]').should('contain','Login fehlgeschlagen. Überprüfe deine Eingaben.')
    });

    // it('should fill and submit the contact form goodtest', () => {
    //     cy.get('[data-cy=login-username]').type('user123');
    //     cy.get('[data-cy=login-password]').type('password123');
    //     cy.get('[data-cy=login-submit]').click();
    //     //cy.get('[data-cy=blog-grid]').should('contain','Blog Dashboard')

    // });
});

/// <reference types="cypress" />

describe('Home – Cookie-Banner', () => {
    beforeEach(() => {
        // LocalStorage leer halten
        cy.clearLocalStorage();
        cy.visit('/');
    });

    it('zeigt Banner beim ersten Besuch', () => {
        cy.contains('button', 'Accept').should('be.visible');
        cy.contains('button', 'Reject').should('be.visible');
    });

    it('speichert Consent und blendet Banner aus', () => {
        cy.contains('button', 'Accept').click();
        cy.contains('button', 'Accept').should('not.exist');
        cy.window().then(win => {
            expect(win.localStorage.getItem('cookieConsent')).to.eq('accepted');
        });
        cy.reload();
        cy.contains('button', 'Accept').should('not.exist');
    });
});

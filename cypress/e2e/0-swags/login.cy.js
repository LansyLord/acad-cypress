/// <reference types="cypress" />

context('Logins', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('Login válido (Standard User)', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

})
/// <reference types="cypress" />

context('Logins', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('Login válido (Standard User)', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="title"]').should('have.text', 'Products');
    })

    it('Username inválido', () => {
        cy.get('#user-name').type('usuario_padrao')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    })

})
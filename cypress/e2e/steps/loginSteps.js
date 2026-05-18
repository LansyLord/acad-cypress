/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Cenário: Login bem-sucedido

Given('que eu estou na página de login do saucedemo', () => {
    cy.log('Acessando a página de login do saucedemo');
    cy.visit('https://www.saucedemo.com/');
});

When('eu insiro o usuário e a senha correta', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
});

And('clico no botão de login', () => {
    cy.get('#login-button').click();
});

Then('eu devo ser redirecionado para a página de produtos', () => {
    cy.get('[data-test="title"]').should('have.text', 'Products');
});

// Cenário: Login mal sucedido (Usuário inválido)

When('eu insiro o usuário {string}', (username) => {
    cy.get('[data-test="username"]').type(username);
});

When('insiro a senha {string}', (password) => {
    cy.get('[data-test="password"]').type(password);
});

Then('está exibindo uma mensagem de erro', () => {
    cy.get('.error-message-container').should('be.visible')
});
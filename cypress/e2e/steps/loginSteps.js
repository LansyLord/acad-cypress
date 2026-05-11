/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

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
})
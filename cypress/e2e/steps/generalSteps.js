/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Then('está exibindo na tela o texto {string}', (text) => {
    cy.get('[data-test="title"]').should('have.text', text);
});
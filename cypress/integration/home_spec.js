/// <reference types="cypress" />

describe('Home', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })


    it('Shows no mobile version available', () => {
        cy.viewport(750,660);
        cy.get('[data-test=mobile-not-supported', { timeout: 5000 }).should('be.visible');
    })


    it('New invoice form opens', ()=>{

        cy.get('[data-test=invoice-btn', { timeout: 5000, force: true}).click();

        cy.get('[data-test=invoice-form').should('be.visible');
        
    })
})
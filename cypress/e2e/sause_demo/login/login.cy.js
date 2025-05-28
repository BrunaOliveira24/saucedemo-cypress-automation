/// <reference types="cypress" />


function fazerLogin(usuario, senha) {
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('#login-button').click()
}


describe('Login', () => {
    beforeEach(() => {

        cy.visit('https://www.saucedemo.com/v1/')


    })
    // testId001
    it('Login com sucesso', () => {

        fazerLogin('standard_user', 'secret_sauce')

        cy.contains('Products')
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
    })

    it('Login com senha incorreta', () => {

        fazerLogin('standard_user', 'secret_teste')

        cy.get('[data-test="error"]')
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })

    it('Login com usuario incorreto', () => {

        fazerLogin('incorret_user', 'secret_teste')

        cy.get('[data-test="error"]')
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })
})


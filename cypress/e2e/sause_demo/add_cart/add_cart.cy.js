
function fazerLogin(usuario, senha) {
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('#login-button').click()
}


describe('Login', () => {
    beforeEach(() => {

        cy.visit('https://www.saucedemo.com/v1/')

    })

    it('adicionar itens no carrinho', () => {

        fazerLogin('standard_user', 'secret_sauce')
         cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
         cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        
        cy.get('.fa-layers-counter').should('exist')
   })

})
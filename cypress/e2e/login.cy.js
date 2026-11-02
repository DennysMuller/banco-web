describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Arrange. Acessa a página de login definida em cypress.config.js
    cy.visit('/')

    // Act. Preenche os campos de login e senha e clica no botão de login
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha')
      .click()
      .type('123456')
    cy.get('#login-section > .btn').click()

    // Assert. Verifica se a página de transferências foi carregada
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})
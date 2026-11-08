describe('Login', () => {
  beforeEach('Acessar página de Login definida em cypress.config.js', () => {
    // Arrange.
    cy.visit('/')
  });
  
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act. Preenche os campos de login e senha e clica no botão de login
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha')
      .click()
      .type('123456')
    cy.get('#login-section > .btn').click()

    // Assert. Verifica se a página de transferências foi carregada
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  }) 
  
  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Registra o intercept ANTES da ação que dispara a requisição
    cy.intercept('POST', '/bff/login').as('postLogin')

    // Act. Preenche os campos de login e senha e clica no botão de login
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha')
      .click()
      .type('654321')
    // cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    // Assert. Verifica se o login falhou
    cy.wait('@postLogin').its('response.statusCode').should('eq', 401)
    cy.get('.toast').should('have.text','Erro no login. Tente novamente.')
  })
})
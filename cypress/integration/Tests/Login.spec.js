describe('Validação de APIs de login do site AltoroJ Rest API', () => {
    it('Validação de Login via POST', () => {
        cy.fazerLogin()
    }) 
    it('Validação de que o Login foi efetuado via GET', () => {
        cy.validacaoUserLogado()
    })
})
describe('Validação de APIs de Admin do site AltoroJ Rest API', () => {
    it('Fazer a validação de criação de novo usuário via POST', () => {
        cy.criacaoNovoUser()
    })

    it('Fazer a validação de troca de senha de usuário via POST', () => {
        cy.trocarSenha()
    })
})
describe('Validação de APIs de Account do site AltoroJ Rest API', () => {
    it('Fazer uma validação de conta via GET', () => {
        cy.validacaoConta()
    })
    it('Fazer validação de uma conta especificas via GET', () => {
        cy.validarContaEspecifica()
    })
    it('Fazer validação de retorno das 10 ultimas transações via GET', () => {
        cy.validarUltimasTransacoes()
    })
    it('Fazer a validação de transações com filtro de datas usando via POST', () => {
        cy.validarTransacoesPorFiltro()
    })
})
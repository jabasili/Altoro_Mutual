import * as POSTTransfer from '../Requests/Transfer/POST.Transfer.request'

describe('Validação de APIs de Transfer do site AltoroJ Rest API', () => {
    it('Validação de transferencia entre contas via POST', () => {
        POSTTransfer.PostTransfer().should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body.success).not.be.null
        })
    })
})
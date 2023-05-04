import * as POSTAdmin from '../Requests/Admin/POST.admin.request'
import * as POSTAdminChangePassw from '../Requests/Admin/POST.adminChangePassw.request'
describe('Validação de APIs de Admin do site AltoroJ Rest API', () => {
    it('Fazer a validação de criação de novo usuário via POST', () => {
        POSTAdmin.PostAdmin().should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body.success).not.be.null
            expect(Response.body.success).equal('Requested operation has completed successfully.')
        })
    })

    it('Fazer a validação de troca de senha de usuário via POST', () => {
        POSTAdminChangePassw.PostAdminChangePassw().should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body.success).not.be.null
            expect(Response.body.success).equal('Requested operation has completed successfully.')
        })
    })
})
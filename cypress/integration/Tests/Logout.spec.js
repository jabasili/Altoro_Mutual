import * as GETLogout from '../Requests/Logout/GET.logout.request'

describe('Validação de APIs de logout do site AltoroJ Rest API', () => {
    it('Fazer validação de logout via GET', () => {
        GETLogout.GetLogout().should((Response) =>{
            expect(Response.status).to.eq(200)
            expect(Response.body).not.be.null
            expect(Response.body.LoggedOut).equal('True')
        })
    })
})
import * as PostLogin from '../Requests/Login/POST.Login.request'
import * as GetLogin from '../Requests/Login/GET.Login.request'

describe('Validação de APIs de login do site AltoroJ Rest API', () => {
    it('Validação de Login via POST', () => {
        PostLogin.PostLogin().should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).not.be.null
            expect(Response.body.Authorization).not.be.null
            expect(Response.body.success).equal('jsmith is now logged in')
        })
    }) 
    
    it('Validação de que o Login foi efetuado via GET', () => {
        GetLogin.GetLogin().should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).not.be.null
            expect(Response.body.loggedin).equal('true')   
        })
    })

})
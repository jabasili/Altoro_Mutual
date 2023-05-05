import * as PostLogin from '../integration/Requests/Login/POST.Login.request'
import * as GetLogin from '../integration/Requests/Login/GET.Login.request'
import * as GetAccount from '../integration/Requests/Account/GET.Account.request'
import * as GetAccountSpecific from '../integration/Requests/Account/GET.AccountSpecific.request'
import * as GetAccountTransactions from '../integration/Requests/Account/GET.AccountTransactions.request'
import * as PostAccountTransactions from '../integration/Requests/Account/POST.AccountTransaction.request'
import * as POSTTransfer from '../integration/Requests/Transfer/POST.Transfer.request'
import * as POSTAdmin from '../integration/Requests/Admin/POST.admin.request'
import * as POSTAdminChangePassw from '../integration/Requests/Admin/POST.adminChangePassw.request'
import * as GETLogout from '../integration/Requests/Logout/GET.logout.request'

Cypress.Commands.add('fazerLogin', () => { 
    PostLogin.PostLogin().should((Response) => {
        expect(Response.status).to.eq(200)
        expect(Response.body).not.be.null
        expect(Response.body.Authorization).not.be.null
        expect(Response.body.success).equal('jsmith is now logged in')
    })
 })

Cypress.Commands.add('validacaoUserLogado', () => { 
    GetLogin.GetLogin().should((Response) => {
        expect(Response.status).to.eq(200)
        expect(Response.body).not.be.null
        expect(Response.body.loggedin).equal('true')   
    })
 })

Cypress.Commands.add('validacaoConta', () =>{
    GetAccount.GetAccount().should((Response) => {
        expect(Response.status).to.eq(200)
        expect(Response.body).not.be.null
        expect(Response.body.Accounts[0].Name).equal('Savings')
        expect(Response.body.Accounts[0].id).equal('800002')
        expect(Response.body.Accounts[1].Name).equal('Checking')
        expect(Response.body.Accounts[1].id).equal('800003')
        expect(Response.body.Accounts[2].Name).equal('Credit Card')
        expect(Response.body.Accounts[2].id).equal('4539082039396288')
    })
 })

Cypress.Commands.add('validarContaEspecifica', () => {
    GetAccountSpecific.GetAccountSpecific().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.body).not.be.null
        expect(Response.body.accountId).equal('800002')
    })
})

Cypress.Commands.add('validarUltimasTransacoes', () => {
    GetAccountTransactions.GetAccountTransactions().should((Response) => {
        expect(Response.status).to.eq(200)
        expect(Response.body).not.be.null
        const last10Transactions = Response.body.last_10_transactions
        expect(last10Transactions).to.be.an('array').with.lengthOf(10)  
        })
})

Cypress.Commands.add('validarTransacoesPorFiltro', () => {
    PostAccountTransactions.PostAccountTransactions().should((Response) => {
        expect(Response.status).to.eq(200)
        expect(Response.body).not.be.null
        expect(Response.body.transactions).not.be.null
    })
})
Cypress.Commands.add('validarTransferenciaEntreContas', () => {
    POSTTransfer.PostTransfer().should((Response) => {
        expect(Response.status).to.eq(200)
        expect(Response.body.success).not.be.null
    })
})

Cypress.Commands.add('criacaoNovoUser', () => {
    POSTAdmin.PostAdmin().should((Response) => {
        expect(Response.status).to.eq(200)
        expect(Response.body.success).not.be.null
        expect(Response.body.success).equal('Requested operation has completed successfully.')
    })
})

Cypress.Commands.add('trocarSenha', () => {
    POSTAdminChangePassw.PostAdminChangePassw().should((Response) => {
        expect(Response.status).to.eq(200)
        expect(Response.body.success).not.be.null
        expect(Response.body.success).equal('Requested operation has completed successfully.')
    })
})

Cypress.Commands.add('fazerLogout', () => {
    GETLogout.GetLogout().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.body).not.be.null
        expect(Response.body.LoggedOut).equal('True')
    })
})
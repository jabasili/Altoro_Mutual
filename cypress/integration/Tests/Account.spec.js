import * as GetAccount from '../Requests/Account/GET.Account.request'
import * as GetAccountSpecific from '../Requests/Account/GET.AccountSpecific.request'
import * as GetAccountTransactions from '../Requests/Account/GET.AccountTransactions.request'
import * as PostAccountTransactions from '../Requests/Account/POST.AccountTransaction.request'
describe('Validação de APIs de Account do site AltoroJ Rest API', () => {
    it('Fazer uma validação de conta via GET', () => {
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

    it('Fazer validação de uma conta especificas via GET', () => {
        GetAccountSpecific.GetAccountSpecific().should((Response) =>{
            expect(Response.status).to.eq(200)
            expect(Response.body).not.be.null
            expect(Response.body.accountId).equal('800002')
        })
    })

    it('Fazer validação de retorno das 10 ultimas transações via GET', () => {
        GetAccountTransactions.GetAccountTransactions().should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).not.be.null
            const last10Transactions = Response.body.last_10_transactions
            expect(last10Transactions).to.be.an('array').with.lengthOf(10)  
            })
    })

    it.only('Fazer a validação de transações com filtro de datas usando via POST', () => {
        PostAccountTransactions.PostAccountTransactions().should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).not.be.null
            expect(Response.body.transactions).not.be.null
        })
    })
})
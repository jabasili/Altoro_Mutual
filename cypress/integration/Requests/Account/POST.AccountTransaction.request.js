/// <reference types="cypress" />
const bodyLogin = require("../../Payloads/login.body.json")
const bodyAccount = require("../../Payloads/account.body.json")

function PostAccountTransactions() {
    return cy.request({
        method: 'POST',
        url: 'login',
        body: bodyLogin
}).then((Response) =>{
    const token = Response.body.Authorization

     cy.request({
        method: 'GET',
        url: 'login',
        headers: {
            Authorization: token
        }
})

    cy.request({
        method: 'POST',
        url: 'account/800002/transactions',
        headers: {
            Authorization: token
        },
        body: bodyAccount
        })
    })
}



export {PostAccountTransactions}
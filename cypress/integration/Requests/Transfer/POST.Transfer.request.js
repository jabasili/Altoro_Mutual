/// <reference types="cypress" />
const bodyLogin = require("../../Payloads/login.body.json")
const bodyTransfer = require("../../Payloads/transfer.body.json")

function PostTransfer() {
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
        url: 'transfer',
        headers: {
            Authorization: token
        },
        body: bodyTransfer
        })
    })
}

export {PostTransfer}
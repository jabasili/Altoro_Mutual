/// <reference types="cypress" />
const bodyLogin = require("../../Payloads/login.body.json")

function GetAccountSpecific() {
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
        method: 'GET',
        url: 'account/800002',
        headers: {
            Authorization: token
        }
    })

})
}

export {GetAccountSpecific}
/// <reference types="cypress" />
const bodyLogin = require("../../Payloads/login.body.json")

function GetLogout() {
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
        url: 'logout'
        })
    })
}

export {GetLogout}
/// <reference types="cypress" />
const bodyLogin = require("../../Payloads/login.body.json")
const bodyAdminChangePassw = require("../../Payloads/adminChangePassw.body.json")

function PostAdminChangePassw() {
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
        url: 'admin/changePassword',
        headers: {
            Authorization: token
        },
        body: bodyAdminChangePassw
        })
    })
}

export {PostAdminChangePassw}
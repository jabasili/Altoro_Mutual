/// <reference types="cypress" />
const bodyLogin = require("../../Payloads/login.body.json")
const bodyAdmin = require("../../Payloads/admin.body.json")

function PostAdmin() {
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
        url: 'admin/addUser',
        headers: {
            Authorization: token
        },
        body: bodyAdmin
        })
    })
}

export {PostAdmin}
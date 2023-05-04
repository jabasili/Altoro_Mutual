/// <reference types="cypress" />
const bodyLogin = require("../../Payloads/login.body.json")

function PostLogin() {
    return cy.request({
        method: 'POST',
        url: 'login',
        body: bodyLogin
})
}

export {PostLogin}
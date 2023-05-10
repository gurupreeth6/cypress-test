/// <reference types='cypress' />

describe("php demo site suite", () =>{
    it("php demo site case", () =>{
        cy.visit("https://phptravels.com/demo/");

        cy.get('.first_name').type('abc',{force: true});
    })
})
/// <reference types='cypress' />

describe('Sample framework scenarios', () =>{
    before(() =>{
        cy.fixture('example').then((data) =>{
            globalThis.data = data;
        })

    })

    it('Sample framework test', () =>{
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        //Enter Name
        cy.get(':nth-child(1) > .form-control').type(globalThis.data.name);

        // Select gender from dropdown
        cy.get('#exampleFormControlSelect1').select(globalThis.data.gender).should('have.value',globalThis.data.gender);
    })
})
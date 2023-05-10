/// <reference types='cypress' />

require('cypress-iframe');

describe('Handle frames', () =>{
    it('Handle frames test case', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href*='mentorship']").eq(0).click();

    })
})
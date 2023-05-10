/// <reference types='cypress' />

describe('New window scenarios', () =>{
    it('Handle multiple tab', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // click on new window button
        cy.get('#opentab').then((el) =>{
            const url = el.prop('href');
            cy.visit(url);
            cy.origin(url,() =>{
                cy.get('#navbarSupportedContent a[href*="about"]').click();
            });
        })
    })

    it('Handle multiple window', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // click on new window button
        cy.get('#openwindow').invoke('removeAttr','onclick').click();
    })
})
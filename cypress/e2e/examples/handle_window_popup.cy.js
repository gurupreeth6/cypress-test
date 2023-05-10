/// <reference types='cypress' />

describe('Alert popup test suite', () =>{
    it('Alert popup test case', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        cy.on('window:alert',(str) =>{
            expect(str).to.eql('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm',(str) =>{
            expect(str).to.eql('Hello , Are you sure you want to confirm?');
        })
    })

    it('Handle multiple tabs by DOM manipulation', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Click on New Tab button
        cy.get('#opentab').invoke('removeAttr','target').click();

        cy.wait(2000);

        //Validate the url 
        //cy.url().should('include','qaclickacademy');
        // Navigate back 
        cy.go('back');
    })
})
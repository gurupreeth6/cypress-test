/// <reference types='cypress' />

describe("Sample test suite to handle web controls", () =>{
    it("Sample test case 1", () =>{
        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    
        //Static Dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //Handle dynamic dropdown
        cy.get('#autocomplete').clear();
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el,index,$list) =>{
            if($el.text()==='India'){
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.value','India');

        //Input text box only when displayed
        cy.get('#displayed-text').not('[style="display: block;"]').type('abc').should('have.value','abc');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').not('[style="display: block;"]').type('abc').should('have.value','abc');

    })
})
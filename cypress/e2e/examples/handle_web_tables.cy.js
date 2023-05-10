/// <reference types = 'cypress' />

describe('Scenario to handle web tables', ()=>{
    it('Validate the price of Selenium course', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //traverse through all the course name
        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{
            if($el.text().includes('Master Selenium Automation in simple Python Language')){
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) =>{
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                })
            }
        })
    })

    it('Mouse over Test', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Hover on mouse over button
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','#top');
    })
})
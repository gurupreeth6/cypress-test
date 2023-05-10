/// <reference types="cypress" />

describe("This is a sample checkout test suite", () =>{
  it("This is a sample checkout test case", () =>{
    // Visit the demo site
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    // enter firstname
    cy.get('.search-keyword').type('ca');
    cy.wait(2000)
    
    cy.get('.products').as('productsLocator');
   
    // click on the specific element based on text
    cy.get('@productsLocator').find('.product').each(($el, index, $list) =>{
        const vegName = $el.find('h4.product-name').text();
        if(vegName.includes('Cashews')){
          cy.wrap($el).find('button').click();
        }
    })

    //Click on the cart and proceed to checkout
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();

    // Click on Place order button
    cy.contains('Place Order').click();

    
  })
})
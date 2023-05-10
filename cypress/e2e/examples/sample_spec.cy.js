/// <reference types="cypress" />

describe("This is a sample test suite", () =>{
  it("This is a sample test case", () =>{
    // Visit the demo site
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    // enter firstname
    cy.get('.search-keyword').type('ca');
    cy.wait(2000)
    // Using visible
    cy.get('.product:visible').should('have.length',4);


    cy.get('.products').as('productsLocator');
    // Using parent child chaining
    cy.get('.products').find('.product').should('have.length',4);

    //using parent and child class locator
    cy.get('.products .product').should('have.length',4);

    // Click on Add to cart button on the second item
    cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click();

    // click on the specific element based on text
    cy.get('.products').find('.product').each(($el, index, $list) =>{
        const vegName = $el.find('h4.product-name').text();
        if(vegName.includes('Cashews')){
          cy.wrap($el).find('button').click();
        }
    })

    //To assert the logo text
    cy.get('.brand').should('have.text','GREENKART');

    //Resolving the promise by using then method to print the logs
    cy.get('.brand').then((logoElement) =>{
        cy.log(logoElement.text());
    })
    
  })
})
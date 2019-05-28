const { When, Then, Given } = require('cypress-cucumber-preprocessor/steps');

Given(/^I am on desktop$/, () => {
    // cy.viewport(1280, 1024);
    //cy.visit('https://www.game.co.uk');
    cy.visit(Cypress.env('url'));
});

Then(/^I see "([^"]*)" in the title$/, (text: string) => {
    // Asserting home page is displayed
    cy.title().should('include', text);

    // Asserting home page url is correct
    let url = 'https://www.game.co.uk/';
    cy.url().should('include', url);
    // Close cookie policy
    cy.get('div[id="cookiePolicy"]')
        .contains('X')
        .click();

});

When(/^I search for "([^"]*)" and click search$/, (item: string) => {
    // Populating search text field
    cy.get('input[id="search"]')
        .type(item);

    // Clicking search button/icon after populating
    cy.get('button[id="searchButton"]')
        .click();

});

When(/^I should be redirected to product listing page and see "([^"]*)"$/, (Bundles: string) => {
    // Asserting product listing url is correct
    cy.url().should('include', 'https://www.tests.co.uk/');
    cy.get('div[class="plpHeader"]')
        .contains(Bundles)
        .should('be.visible');
});

Given(/^I scroll down to find I scroll down to find Xbox One X and click the product$/, ( ) => {
    cy.get('div[id="productContainer"]')
        .get('article[class="product"]')
        .get('div[data-franchiseiteration="bundles"]')
        .eq(0)
        .click()


});

Then(/^I should be redirected to product page and see "([^"]*)"$/, (Bundles: string) => {
    // Asserting product url is correct
    cy.url().should('include', 'https://www.test.co.uk/');
    cy.get('div[id="pdp"]')
        .contains(Bundles)
        .should('be.visible');

});


const urlLogin = 'https://www.goonvpn.com/my-account'
const urlMain = "https://www.goonvpn.com/";
// -- This is a parent command --
Cypress.Commands.add("login", ()=> {
  cy.visit(urlLogin);
  cy.url().should('include','login')
    cy.get("#loginform-username")
    .type("lion_king_1144@hotmail.com");
    cy.get("#loginform-password").type("11442525");
    cy.setCookie(
      "_identity",
      "14bd1e44832aa71ac1555d838164fce36e7ea3b812e9155d148c2ef8d0d1f3aca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B57856%2C%22ptrcRZnG37LiJnIATMxs5QV5O6CXCGE7%22%2C2592000%5D%22%3B%7D"
    );
    cy.wait(300);
    cy.visit(urlLogin);
  
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

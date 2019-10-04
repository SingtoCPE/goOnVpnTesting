Cypress.Commands.add("beforeEachLogin", () => {
  cy.clearCookies();
  cy.visit(Cypress.env("URLMAIN")).wait(500);
  cy.url().should("include", "/");
  cy.get('[class="btn-topbar login"]')
    .contains(" เข้าสู่ระบบ")
    .should("have.attr", "href", "/login")
    .click();
  cy.url().should("include", "login");
});

Cypress.Commands.add("userLogin", () => {
  cy.get("#loginform-username")
    .should("have.id", "loginform-username")
    .type(Cypress.env("USER"), { delay: 20 });
});

Cypress.Commands.add("passwordLogin", () => {
  cy.get("#loginform-password")
    .should("have.id", "loginform-password")
    .type(Cypress.env("PASS"), { delay: 20 });
});

Cypress.Commands.add("userLoginEmpty", () => {
  cy.get("#loginform-username")
    .should("have.id", "loginform-username")
    .click();
});

Cypress.Commands.add("passwordLoginEmpty", () => {
  cy.get("#loginform-password")
    .should("have.id", "loginform-password")
    .click();
});

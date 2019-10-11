Cypress.Commands.add("beforeEachRegister", () => {
  cy.clearCookie("_identity");
  cy.visit(Cypress.env("URLMAIN")).wait(500);
  cy.url().should("include", "/");
  cy.get('[class="btn-topbar signup"]')
    .contains(" สมัครสมาชิก")
    .should("have.attr", "href", "/signup")
    .click();
  cy.url().should("include", "signup");
});

Cypress.Commands.add("userRegister", () => {
  cy.get("#signupform-username")
    .should("have.id", "signupform-username")
    .type(Cypress.env("USER"), { delay: 20 });
});

Cypress.Commands.add("emailRegister", () => {
  cy.get("#signupform-email")
    .should("have.id", "signupform-email")
    .type(Cypress.env("EMAIL"), { delay: 20 });
});

Cypress.Commands.add("passwordRegister", () => {
  cy.get("#signupform-password")
    .should("have.id", "signupform-password")
    .type(Cypress.env("PASS"), { delay: 20 });
});

Cypress.Commands.add("userRegisterEmpty", () => {
  cy.get("#signupform-username")
    .should("have.id", "signupform-username")
    .click();
});

Cypress.Commands.add("emailRegisterEmpty", () => {
  cy.get("#signupform-email")
    .should("have.id", "signupform-email")
    .click();
});

Cypress.Commands.add("passwordRegisterEmpty", () => {
  cy.get("#signupform-password")
    .should("have.id", "signupform-password")
    .click();
});

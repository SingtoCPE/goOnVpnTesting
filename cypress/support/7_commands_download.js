Cypress.Commands.add("beforeEachDowload", () => {
  cy.setCookie(
    "_identity",
    "14bd1e44832aa71ac1555d838164fce36e7ea3b812e9155d148c2ef8d0d1f3aca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B57856%2C%22ptrcRZnG37LiJnIATMxs5QV5O6CXCGE7%22%2C2592000%5D%22%3B%7D"
  );
  cy.visit(Cypress.env("URLMAIN")).wait(500);
  cy.url().should("include", "/");
  cy.get("#w1 > :nth-child(5) > a")
    .contains("ดาวน์โหลด")
    .click();
  cy.url().should("include", "/get-client");
});

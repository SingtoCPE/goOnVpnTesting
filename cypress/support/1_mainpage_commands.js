//----------------------------- Mainpage --------------------------
// beforeEach Mainpage ---
Cypress.Commands.add("beforeEachMainpage", () => {
  cy.clearCookies()
  cy.visit(Cypress.env('URLMAIN'))
    .contains("หน้าแรก")
    .wait(500);
  cy.url().should("include", "/");
});
// tagH4 ข่าวและโปรโมชั่น
Cypress.Commands.add("tagH4", () => {
  cy.get('[class="heading"]');
  cy.get('[class="news-desc"]').get("h4");
});
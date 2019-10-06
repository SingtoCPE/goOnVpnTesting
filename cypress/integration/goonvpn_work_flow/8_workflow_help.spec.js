/// <reference types = 'cypress'/>

describe("Work flow : Download", () => {
  beforeEach("Go to Download.", () => {
    cy.beforeEachHelp();
  });

  it("Work flow : Download > ตอบ-ถามปัญหาการใช้งาน", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("ตอบ-ถามปัญหาการใช้งาน")
      .click();
    cy.url().should("eq", "https://www.goonvpn.com/support");
    cy.loopFAQ();
  });

  it("Work flow : Download > ติดต่อเรา", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("ติดต่อเรา")
      .click();
    cy.url().should("eq", "https://www.goonvpn.com/#");
  });
});

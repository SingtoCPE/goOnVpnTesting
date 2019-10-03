/// <reference types = 'cypress'/>

describe("Work flow : Download", () => {
  beforeEach("Go to Download.", () => {
    cy.beforeEachHelp(); //commands
  });

  it("Work flow : Download > ตอบ-ถามปัญหาการใช้งาน",  () => {
    cy.get('[class="dropdown-menu"]')
    .contains('ตอบ-ถามปัญหาการใช้งาน')
    .click()
    cy.loopFAQ()
  });
})
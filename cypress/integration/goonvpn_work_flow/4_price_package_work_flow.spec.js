/// <reference types = 'cypress'/>

describe("Work flow : Price and package", () => {
  beforeEach("Go to Price and package.", () => {
    cy.beforeEachPrice() //command
  });

  it("Work flow: ดูเลขที่บัญชี > รับวันทดลองฟรี", () => {
    cy.viewAccountNumber() //command
    cy.get('[class="special btn-get-trial"]')
      .contains(" รับวันทดลองใช้งานฟรี!")
      .should("have.attr", "href", "/promotion/get-trial")
      .click();
    cy.url().should("include", "/get-trial");
  });

  it("Work flow: ดูเลขที่บัญชี > เติมวันใช้งาน", () => {
    cy.viewAccountNumber()
    cy.get('[class="special btn-airtime"]')
      .contains(" เติมวันใช้งาน")
      .should("have.attr", "href", "/airtime-package")
      .click();
    cy.url().should("include", "/airtime-package");
    cy.get('[class="hvr-bounce-in btn btn-primary btn-block btn-topup-time"]')
      .contains("เติมวัน")
      .should("have.attr", "href", "/confirm-topup/1")
      .click();
      cy.url().should("include", "/confirm-topup/1");
      cy.get('[class="btn btn-danger btn-sm btn-topup-time"]')
      .contains(' เติม GP')
      .should('have.attr','href','/how-to-pay')
      .click()
  });
});

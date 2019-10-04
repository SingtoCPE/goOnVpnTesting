/// <reference types = 'cypress'/>

describe("Work flow : Login", () => {
  beforeEach("go to URL.", () => {
    cy.beforeEachLogin();
  });

  it("Login : Failed > User empty case", () => {
    cy.passwordLogin();
    cy.userLoginEmpty();
    cy.get(":nth-child(5) > .container > .row").click();
    cy.get('[class="help-block"]')
      .contains("กรุณากรอก ชื่อผู้ใช้ หรือ อีเมลล์ ")
      .and("have.text", "กรุณากรอก ชื่อผู้ใช้ หรือ อีเมลล์ ");
  });

  it("Login : Failed > Password empty case", () => {
    cy.userLogin();
    cy.passwordLoginEmpty();
    cy.get(":nth-child(5) > .container > .row").click();
    cy.get('[class="help-block"]')
      .contains("กรุณากรอก รหัสผ่าน ")
      .and("have.text", "กรุณากรอก รหัสผ่าน ");
  });

  it("Login : Failed > User and Password empty case", () => {
    cy.userLoginEmpty();
    cy.passwordLoginEmpty();
    cy.get(":nth-child(5) > .container > .row").click();
    cy.get('[class="col-sm-offset-4 col-sm-8"]')
      .children()
      .should("have.class", "help-block")
      .should("contain", "กรุณากรอก ชื่อผู้ใช้ หรือ อีเมลล์ ")
      .and("contain", "กรุณากรอก รหัสผ่าน ");
  });

  it("Login : Complete", () => {
    cy.userLogin();
    cy.passwordLogin();
    cy.get("fieldset > .text-center > .btn")
      .contains("เข้าสู่ระบบ")
      .click();
    cy.setCookie(
      "_identity",
      "14bd1e44832aa71ac1555d838164fce36e7ea3b812e9155d148c2ef8d0d1f3aca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B57856%2C%22ptrcRZnG37LiJnIATMxs5QV5O6CXCGE7%22%2C2592000%5D%22%3B%7D"
    );
    cy.visit(Cypress.env("URLLOGED"));
    cy.url().should("include", "/my-account");
  });
});

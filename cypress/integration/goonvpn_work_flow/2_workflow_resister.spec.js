/// <reference types = 'cypress'/>

describe("Work flow : Register", () => {
  beforeEach("go to URL.", () => {
    cy.beforeEachRegister();
  });

  it("Register : Failed > User empty case ", () => {
    cy.emailRegister();
    cy.passwordRegister();
    cy.userRegisterEmpty();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]').should("contain", "กรุณากรอกชื่อผู้ใช้งาน");
  });

  it("Register : Failed > Email empty case ", () => {
    cy.userRegister();
    cy.passwordRegister();
    cy.emailRegisterEmpty();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]').should("contain", "กรุณากรอกอีเมลล์ของท่าน");
  });

  it("Register : Failed > Password empty case ", () => {
    cy.userRegister();
    cy.emailRegister();
    cy.passwordRegisterEmpty();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]').should(
      "contain",
      "กรุณากรอกรหัสผ่านของท่าน"
    );
  });

  it("Register : Failed > User and Email empty case ", () => {
    cy.passwordRegister();
    cy.userRegisterEmpty();
    cy.emailRegisterEmpty();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "กรุณากรอกชื่อผู้ใช้งาน")
      .and("contain", "กรุณากรอกอีเมลล์ของท่าน");
  });

  it("Register : Failed > User and Password empty case ", () => {
    cy.emailRegister();
    cy.userRegisterEmpty();
    cy.passwordRegisterEmpty();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "กรุณากรอกชื่อผู้ใช้งาน")
      .and("contain", "กรุณากรอกรหัสผ่านของท่าน");
  });

  it("Register : Failed > Email and Password empty case ", () => {
    cy.userRegister();
    cy.emailRegisterEmpty();
    cy.passwordRegisterEmpty();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "กรุณากรอกอีเมลล์ของท่าน")
      .and("contain", "กรุณากรอกรหัสผ่านของท่าน");
  });

  it("Register : Failed > User, Email and Password empty case ", () => {
    cy.userRegisterEmpty();
    cy.emailRegisterEmpty();
    cy.passwordRegisterEmpty();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "กรุณากรอกชื่อผู้ใช้งาน")
      .should("contain", "กรุณากรอกอีเมลล์ของท่าน")
      .and("contain", "กรุณากรอกรหัสผ่านของท่าน");
  });

  it("Register : Failed > Email invalid case ", () => {
    cy.userRegister();
    cy.passwordRegister();
    cy.get("#signupform-email")
      .should("have.id", "signupform-email")
      .type("aaa");
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]').should("contain", "อีเมลล์ ไม่ถูกต้อง");
  });

  it("Register : Failed > Password invalid case ", () => {
    cy.userRegister();
    cy.emailRegister();
    cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .type("pass");
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]').should(
      "contain",
      "รหัสผ่านต้องมากกว่า 6 ตัวอักษร"
    );
  });

  it("Register : Complete", () => {
    cy.userRegister();
    cy.emailRegister();
    cy.passwordRegister();
    cy.get("#form-signup > .text-center > .btn").click();
    cy.setCookie(
      "_identity",
      "14bd1e44832aa71ac1555d838164fce36e7ea3b812e9155d148c2ef8d0d1f3aca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B57856%2C%22ptrcRZnG37LiJnIATMxs5QV5O6CXCGE7%22%2C2592000%5D%22%3B%7D"
    );
    cy.visit(Cypress.env("URLLOGED"));
    cy.url().should("eq", Cypress.env("URLLOGED"));
  });
});

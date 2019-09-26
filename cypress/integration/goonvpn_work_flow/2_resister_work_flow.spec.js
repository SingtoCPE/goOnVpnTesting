/// <reference types = 'cypress'/>

const urlMain = "https://www.goonvpn.com/";
const urlRegister = "https://www.goonvpn.com/signup";
const user = "singto1144";
const email = "lion_king_1144@hotmail.com";
const pass = "11442525";

describe("Work flow : Register", () => {
  beforeEach("go to URL.", () => {
    cy.get(":nth-child(2) > .btn-topbar").click();
    cy.url().should("include", "signup");
  });
  it("Register : Failed, User empty case ", () => {
    cy.get("#signupform-email")
      .should("have.id", "signupform-email")
      .type(email, { delay: 20 });
    cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .type(pass, { delay: 20 });
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .click();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]').should("contain", "กรุณากรอกชื่อผู้ใช้งาน");
  });

  it("Register : Failed, Email empty case ", () => {
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .type(user, { delay: 20 });
    cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .type(pass, { delay: 20 });
    cy.get("#signupform-email")
      .should("have.id", "signupform-email")
      .click();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]').should("contain", "กรุณากรอกอีเมลล์ของท่าน");
  });

  it("Register : Failed, Password empty case ", () => {
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .type(user, { delay: 20 });
    cy.get("#signupform-email")
      .should("have.id", "signupform-email")
      .type(email, { delay: 20 });
    cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .click();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]').should(
      "contain",
      "กรุณากรอกรหัสผ่านของท่าน"
    );
  });

  it("Register : Failed, User and Email empty case ", () => {
    cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .type(pass, { delay: 20 });
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .click();
    cy.get("#signupform-email")
      .should("have.id", "signupform-email")
      .click();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "กรุณากรอกชื่อผู้ใช้งาน")
      .and("contain", "กรุณากรอกอีเมลล์ของท่าน");
  });

  it("Register : Failed, User and Password empty case ", () => {
    cy.get("#signupform-email")
      .should("have.id", "signupform-email")
      .type(email, { delay: 20 });
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .click()
    cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .click()
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "กรุณากรอกชื่อผู้ใช้งาน")
      .and("contain", "กรุณากรอกรหัสผ่านของท่าน");
  });

  it("Register : Failed, Email and Password empty case ", () => {
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .type(user, { delay: 20 });
    cy.get("#signupform-email")
      .should("have.id", "signupform-email")
      .click()
    cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .click()
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "กรุณากรอกอีเมลล์ของท่าน")
      .and("contain", "กรุณากรอกรหัสผ่านของท่าน");
  });

  it("Register : Failed, User Email and Password empty case ", () => {
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .click()
    cy.get("#signupform-email")
      .should("have.id", "signupform-email")
      .click()
    cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .click()
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "กรุณากรอกชื่อผู้ใช้งาน")
      .and("contain", "กรุณากรอกอีเมลล์ของท่าน")
      .and("contain", "กรุณากรอกรหัสผ่านของท่าน");
  });

  it("Register : Failed, Email invalid case ", () => {
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .type(user)
      cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .type(pass)
      cy.get("#signupform-email")
        .should("have.id", "signupform-email")
        .type('aaa')
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "อีเมลล์ ไม่ถูกต้อง")
  });

  it("Register : Failed, Password invalid case ", () => {
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .type(user)
      cy.get("#signupform-email")
        .should("have.id", "signupform-email")
        .type(email)
      cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .type('pass')
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]')
      .should("contain", "รหัสผ่านต้องมากกว่า 6 ตัวอักษร")
  });
  // it("Register : Complete", () => {
  //   cy.get("#signupform-username")
  //     .type("singto1144", { delay: 20 });
  //   cy.get("#signupform-email")
  //     .type("lion_king_1144@hotmail.com", { delay: 20 });
  //   cy.get("#signupform-password")
  //     .type("11442525", { delay: 20 });
  //   cy.get("#form-signup > .text-center > .btn").click();
  // });
});

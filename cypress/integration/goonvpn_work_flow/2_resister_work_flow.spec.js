/// <reference types = 'cypress'/>

const urlMain = "https://www.goonvpn.com/";
const urlRegister = "https://www.goonvpn.com/signup";
describe("Work flow : Register", () => {
  beforeEach("go to URL.", () => {
    cy.visit(urlMain).contains("หน้าแรก");
    cy.get(":nth-child(2) > .btn-topbar").click();
    cy.url().should("include", "signup");
  });
  it("Register : Failed, User empty case ", () => {
    cy.get("#signupform-email")
      .should("have.id", "signupform-email")
      .type("lion_king_1144@hotmail.com", { delay: 20 });
    cy.get("#signupform-password")
      .should("have.id", "signupform-password")
      .type("11442525", { delay: 20 });
    cy.get("#signupform-username")
      .should("have.id", "signupform-username")
      .click();
    cy.get(".field-signupform-email > .control-label").click();
    cy.get('[class="help-block"]').should("contain", "กรุณากรอกชื่อผู้ใช้งาน");
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

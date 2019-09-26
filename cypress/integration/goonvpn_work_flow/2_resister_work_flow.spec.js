const urlMain = "https://www.goonvpn.com/";
const urlRegister = "https://www.goonvpn.com/signup";
describe("Work flow : Register", () => {
  it("Click menu bar สมัครสมาชิก.", () => {
    cy.visit(urlMain)
    cy.get(":nth-child(2) > .btn-topbar").click();
  });
  it("Enter Username", () => {
    cy.get("#signupform-username")
      .click()
      .type("singto1144", { delay: 120 });
  });
  it("Enter E-mail", () => {
    cy.get("#signupform-email")
      .click()
      .type("lion_king_1144@hotmail.com", { delay: 120 });
  });
  it("Enter Password", () => {
    cy.get("#signupform-password")
      .click()
      .type("11442525", { delay: 120 });
    cy.get('#form-signup > .text-center > .btn')
      .click()
  });
});

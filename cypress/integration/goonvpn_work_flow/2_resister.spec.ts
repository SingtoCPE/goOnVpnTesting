const urlMain = "https://www.goonvpn.com/";
const urlRegister = 'https://www.goonvpn.com/signup';
describe("Register work flow", () => {
  it("Click menu bar สมัครสมาชิก.", () => {
    cy.get(":nth-child(2) > .btn-topbar").click();
  });
  it("Enter Username", () => {
    cy.get("#signupform-username")
      .click()
      .type("singto1144", { delay: 200 });
    cy.get("#signupform-email")
      .click()
      .type("lion_king_1144@hotmail.com", { delay: 200 });
    cy.get("#signupform-password")
      .click()
      .type("11442525", { delay: 200 });
  });
});

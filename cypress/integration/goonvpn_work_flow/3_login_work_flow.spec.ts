const urlMain = "https://www.goonvpn.com/";
const urlLogin = "https://www.goonvpn.com/my-account";
describe("Login work flow", () => {
  it("Go to login.", () => {
    cy.visit(urlMain);
  });
  it("Login: enter username and enter password.", () => {
    cy.wait(1000);
    cy.get('[class="btn-topbar login"]').click()
    cy.get('#loginform-username').click()
      .type('lion_king_1144@hotmail.com',{ delay: 200 })
    cy.wait(500);
    cy.get("#loginform-password")
      .click()
      .type("11442525", { delay: 200 });
    cy.setCookie(
      "_identity",
      "14bd1e44832aa71ac1555d838164fce36e7ea3b812e9155d148c2ef8d0d1f3aca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B57856%2C%22ptrcRZnG37LiJnIATMxs5QV5O6CXCGE7%22%2C2592000%5D%22%3B%7D"
    );
    cy.wait(300);
    cy.visit(urlLogin);
  });
});

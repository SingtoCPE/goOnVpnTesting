/// <reference types = 'cypress'/>

const urlMain = "https://www.goonvpn.com/";

describe("Work flow : Price and package", () => {
  beforeEach("Go to Price and package.", () => {
    cy.setCookie(
      "_identity",
      "14bd1e44832aa71ac1555d838164fce36e7ea3b812e9155d148c2ef8d0d1f3aca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B57856%2C%22ptrcRZnG37LiJnIATMxs5QV5O6CXCGE7%22%2C2592000%5D%22%3B%7D"
    );
    cy.visit(urlMain);
    cy.url().should("include", "/");
    cy.get('[class="nav navbar-nav navbar-right"]')
    .contains('ราคา และ แพ็กเกจ')
    .click()
  });
  it('Work flow: ดูเลขที่บัญชี',()=>{

  })
});

const urlLogin = "https://www.goonvpn.com/my-account";
const urlMain = "https://www.goonvpn.com/";

//----------------------------- Mainpage --------------------------
// beforeEach Mainpage ---
Cypress.Commands.add("beforeEachMainpage", () => {
  cy.visit(urlMain).contains("หน้าแรก");
  cy.url().should("include", "/");
});
// tagH4 ข่าวและโปรโมชั่น
Cypress.Commands.add("tagH4", () => {
  cy.get('[class="heading"]');
  cy.get('[class="news-desc"]').get("h4");
});

//----------------------------- Register --------------------------
// beforeEach Main Register Page ---
Cypress.Commands.add("beforeEachRegister", () => {
  cy.visit(urlMain);
  cy.url().should("include", "/");
  cy.get('[class="btn-topbar signup"]')
    .contains(" สมัครสมาชิก")
    .should("have.attr", "href", "/signup")
    .click();
  cy.url().should("include", "signup");
});
// User Empty
Cypress.Commands.add("userEmpty", () => {
  cy.get("#signupform-username")
    .should("have.id", "signupform-username")
    .click();
});

//----------------------------- Login --------------------------
// beforeEach Main Login Page ---
Cypress.Commands.add("beforeEachLogin", () => {
  cy.visit(urlMain);
  cy.url().should("include", "/");
  cy.get('[class="btn-topbar login"]')
    .contains(" เข้าสู่ระบบ")
    .should("have.attr", "href", "/login")
    .click();
  cy.url().should("include", "login");
});

//----------------------------- Price and package --------------------------
// beforeEach Main Price Page ---
Cypress.Commands.add("beforeEachPrice", () => {
  cy.visit(urlMain);
  cy.setCookie(
    "_identity",
    "14bd1e44832aa71ac1555d838164fce36e7ea3b812e9155d148c2ef8d0d1f3aca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B57856%2C%22ptrcRZnG37LiJnIATMxs5QV5O6CXCGE7%22%2C2592000%5D%22%3B%7D"
  );
  cy.url().should("include", "/");
  cy.get('[class="nav navbar-nav navbar-right"]')
    .contains("ราคา และ แพ็กเกจ")
    .click();
});

// Main Price ---
Cypress.Commands.add("mainPrice", () => {
  cy.get('[class="btn border-theme btn-block col-xs-12"]')
    .contains(" ดูเลขที่บัญชี")
    .should("have.attr", "href", "/how-to-pay")
    .click();
  cy.url().should("include", "/how-to-pay");
});

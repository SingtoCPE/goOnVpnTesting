const urlLogin = "https://www.goonvpn.com/my-account";
const urlMain = "https://www.goonvpn.com/";
const user = "singto1144";
const email = "lion_king_1144@hotmail.com";
const pass = "11442525";

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
// Emptry Case -----
// user
Cypress.Commands.add("userRegister", () => {
  cy.get("#signupform-username")
    .should("have.id", "signupform-username")
    .type(user, { delay: 20 });
});
// Email
Cypress.Commands.add("emailRegister", () => {
  cy.get("#signupform-email")
    .should("have.id", "signupform-email")
    .type(email, { delay: 20 });
});
// Password
Cypress.Commands.add("passwordRegister", () => {
  cy.get("#signupform-password")
    .should("have.id", "signupform-password")
    .type(pass, { delay: 20 });
});
// Non-Emptry Case -----
// user Empty
Cypress.Commands.add("userRegisterEmpty", () => {
  cy.get("#signupform-username")
    .should("have.id", "signupform-username")
    .click();
});
// Email Empty
Cypress.Commands.add("emailRegisterEmpty", () => {
  cy.get("#signupform-email")
    .should("have.id", "signupform-email")
    .click();
});
// Password Empty
Cypress.Commands.add("passwordRegisterEmpty", () => {
  cy.get("#signupform-password")
    .should("have.id", "signupform-password")
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
// Emptry Case -----
// user
Cypress.Commands.add("userLogin", () => {
  cy.get("#loginform-username")
    .should("have.id", "loginform-username")
    .type(user, { delay: 20 });
});
// Password
Cypress.Commands.add("passwordLogin", () => {
  cy.get("#loginform-password")
    .should("have.id", "loginform-password")
    .type(pass, { delay: 20 });
});
// Non-Emptry Case -----
// user Empty
Cypress.Commands.add("userLoginEmpty", () => {
  cy.get("#loginform-username")
    .should("have.id", "loginform-username")
    .click();
});
// Password Empty
Cypress.Commands.add("passwordLoginEmpty", () => {
  cy.get("#loginform-password")
    .should("have.id", "loginform-password")
    .click();
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

// Main Price -----
Cypress.Commands.add("viewAccountNumber", () => {
  cy.get('[class="btn border-theme btn-block col-xs-12"]')
    .contains(" ดูเลขที่บัญชี")
    .should("have.attr", "href", "/how-to-pay")
    .click();
  cy.url().should("include", "/how-to-pay");
});
//---------------------- function ---------------------------------
Cypress.Commands.add("mainPrice", () => {
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
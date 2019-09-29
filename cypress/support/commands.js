const urlLogin = "https://www.goonvpn.com/my-account";
const urlMain = "https://www.goonvpn.com/";
const user = "singto1144";
const email = "lion_king_1144@hotmail.com";
const pass = "11442525";

//----------------------------- Mainpage --------------------------
// beforeEach Mainpage ---
Cypress.Commands.add("beforeEachMainpage", () => {
  cy.visit(urlMain)
    .contains("หน้าแรก")
    .wait(500);
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
  cy.visit(urlMain).wait(500);
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
  cy.visit(urlMain).wait(500);
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
  cy.visit(urlMain).wait(500);
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
    .click();
});

Cypress.Commands.add("topupTruemoney", () => {
  cy.viewAccountNumber();
  cy.get('[class="sub-menu"]')
    .contains("เติม GP ด้วยบัตรทรูมันนี่​")
    .and("have.text", " เติม GP ด้วยบัตรทรูมันนี่​")
    .click();
  cy.url().should("include", "/payment-truemoney");
});

//---------------------- function ---------------------------------
// loop เติมวันใช้งาน
Cypress.Commands.add("loopClickTopupGP", () => {
  for (let i = 1; i < 10; i++) {
    cy.get('[class="special btn-airtime"]')
      .contains(" เติมวันใช้งาน")
      .should("have.attr", "href", "/airtime-package")
      .and("have.text", " เติมวันใช้งาน")
      .click();
    cy.get(`:nth-child(${i === 9 ? i - 1 : i}) > .cost-box > .hvr-bounce-in`)
      .contains("เติมวัน")
      .should(
        "have.attr",
        "href",
        `/confirm-topup/${i === 7 ? (i = i + 1) : i}`
      )
      .click();
    cy.url().should("include", `/confirm-topup/${i === 7 ? (i = i + 1) : i}`);
    cy.get('[class="btn btn-danger btn-sm btn-topup-time"]')
      .contains(" เติม GP")
      .and("have.text", " เติม GP")
      .click();
  }
});
// loop ยกเลิกการเติมวัน
Cypress.Commands.add("loopClickCancel", () => {
  for (let i = 1; i < 10; i++) {
    cy.get(".btn-airtime > a")
      .contains(" เติมวันใช้งาน")
      .should("have.attr", "href", "/airtime-package")
      .and("have.text", " เติมวันใช้งาน")
      .click();
    cy.get(`:nth-child(${i === 9 ? i - 1 : i}) > .cost-box > .hvr-bounce-in`)
      .contains("เติมวัน")
      .should(
        "have.attr",
        "href",
        `/confirm-topup/${i === 7 ? (i = i + 1) : i}`
      )
      .click();
    cy.url().should("include", `/confirm-topup/${i === 7 ? (i = i + 1) : i}`);
    cy.get('[class="btn btn-warning btn-sm btn-topup-time"]')
      .contains(" ยกเลิก")
      .and("have.text", " ยกเลิก")
      .click();
  }
});
  // select ชำระผ่าน paypal
Cypress.Commands.add("loopSelectPaypal", () => {
  const price = [100,150,300,500,1000,1200]
  const GP =[110,165,330,550,1100,1320]
  for(let i in price){
  cy.get(":nth-child(2) > .sub-menu > :nth-child(2) > a")
      .contains(" ชำระผ่าน PayPal")
      .and("have.attr", "href", "/payment-paypal")
      .click();
    cy.get('[class="select2-selection select2-selection--single"]')
      .click()
      .get('[class="select2-results"]')
      .contains(` ${price[i]} บาท   => ได้รับ ${GP[i]}GP`)
      .click();
  }
});


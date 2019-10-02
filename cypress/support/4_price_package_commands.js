//----------------------------- Price and package --------------------------
// beforeEach Main Price Page ---
Cypress.Commands.add("beforeEachPrice", () => {
  cy.visit(Cypress.env('URLMAIN')).wait(500);
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
// เติม GP ด้วยบัตรทรูมันนี่
Cypress.Commands.add("topupTruemoney", () => {
  cy.viewAccountNumber();
  cy.get('[class="sub-menu"]')
    .contains("เติม GP ด้วยบัตรทรูมันนี่​")
    .and("have.text", " เติม GP ด้วยบัตรทรูมันนี่​")
    .click();
  cy.url().should("include", "/payment-truemoney");
});

// เปลี่ยนรหัสผ่านสำเร็จ
Cypress.Commands.add("changePasswordComplete", () => {
  
});


//---------------------- Loop ---------------------------------
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
  const price = [100, 150, 300, 500, 1000, 1200];
  const GP = [110, 165, 330, 550, 1100, 1320];

  for (let i in price) {
    let text = `${price[i]} บาท   => ได้รับ ${GP[i]}GP`;
    let text2 = ` ${price[i]} บาท   => ได้รับ ${GP[i]}GP`;
    cy.get(":nth-child(2) > .sub-menu > :nth-child(2) > a")
      .contains(" ชำระผ่าน PayPal")
      .and("have.attr", "href", "/payment-paypal")
      .click();
    cy.get('[class="select2-selection select2-selection--single"]')
      .click()
      .get('[class="select2-results"]')
      .contains(i >= 4 ? text : text2)
      .click();
    // cy.get('[class="hvr-grow-shadow btn btn-theme-bg"]')
    //   .should("contain.text", " เติม GP")
    //   .click();
  }
});

// form แจ้งโอนเงินสำเร็จ
Cypress.Commands.add("loopSelectTransfer", () => {
  const child = [
    "ธนาคารกสิกรไทย - 095-2-96230-4",
    "ธนาคารไทยพานิชย์ - 211-2-20718-4",
    "ธนาคารกรุงเทพ - 008-8-02268-6",
    "ธนาคารกรุงไทย - 762-0-47162-6",
    "ธนาคารทหารไทย - 217-2-49020-9",
    "ธนาคารกรุงศรีอยุธยา - 449-1-72937-4"
  ];
  for (let i in child) {
    cy.get('[class="sub-menu"]')
      .contains(" แจ้งโอนเงิน")
      .click();
    cy.url().should("include", "/deposit-notify");
    cy.get('[class="btn border-theme animated shake"]')
      .contains(" บัญชีธนาคารที่รองรับ")
      .and("have.text", " บัญชีธนาคารที่รองรับ")
      .and("have.attr", "href", "/how-to-pay")
      .click();
    cy.get('[class="sub-menu"]')
      .contains(" แจ้งโอนเงิน")
      .click();
    cy.url().should("include", "/deposit-notify");
    cy.get('[class="select2-selection select2-selection--single"]')
      .click()
      .get('[class="select2-results"]')
      .children()
      .children()
      .contains(child[i])
      .and("have.text", child[i])
      .click();
    cy.get('[class="form-control krajee-datepicker"]').click();
    cy.get('[data-date="1568505600000"]')
      .should("have.text", "15")
      .click();
    cy.get("#depositform-amount").type("100");
    cy.get("#depositform-note").type("Test by cypress");
    cy.get('[class="btn btn-theme-bg hvr-grow-shadow"]')
      .contains(" แจ้งโอนเงิน")
      .click()
      .should("have.text", " แจ้งโอนเงิน")
      .should("have.attr", "name")
      .and("eq", "inform-button");
    cy.get('[class="cancel"]')
      .should("have.text", "แก้ไขใหม่")
      .click();
    cy.get('[class="btn btn-theme-bg hvr-grow-shadow"]')
      .contains(" แจ้งโอนเงิน")
      .click()
      .should("have.text", " แจ้งโอนเงิน")
      .should("have.attr", "name")
      .and("eq", "inform-button");
    cy.get('[class="confirm"]')
      .should("have.text", "ยืนยัน")
      .click();
  }
});

// form แจ้งโอนเงินไม่สำเร็จ
Cypress.Commands.add("loopSelectTransferInvalid", () => {
  cy.get('[class="sub-menu"]')
    .contains(" แจ้งโอนเงิน")
    .click();
  cy.url().should("include", "/deposit-notify");
  cy.get('[class="btn border-theme animated shake"]')
    .contains(" บัญชีธนาคารที่รองรับ")
    .and("have.text", " บัญชีธนาคารที่รองรับ")
    .and("have.attr", "href", "/how-to-pay")
    .click();
  cy.get('[class="sub-menu"]')
    .contains(" แจ้งโอนเงิน")
    .click();
  cy.url().should("include", "/deposit-notify");
  cy.get('[class="select2-selection select2-selection--single"]')
    .click()
    .get('[class="select2-results"]')
    .children()
    .children()
    .contains("ธนาคารกสิกรไทย - 095-2-96230-4")
    .and("have.text", "ธนาคารกสิกรไทย - 095-2-96230-4")
    .click();
  cy.get('[class="form-control krajee-datepicker"]')
    .click()
    .type(" ");
  cy.get(".site-pay-inform > :nth-child(4)").dblclick();
  cy.get("#depositform-amount").dblclick();
  cy.get(".site-pay-inform > :nth-child(4)").dblclick();
  cy.get('[class="btn btn-theme-bg hvr-grow-shadow"]')
    .contains(" แจ้งโอนเงิน")
    .click()
    .should("have.text", " แจ้งโอนเงิน")
    .should("have.attr", "name")
    .and("eq", "inform-button");
  cy.get('[class="help-block"]')
    .contains("กรุณากรอก วันที่โอน")
    .and("have.text", "กรุณากรอก วันที่โอน");
  cy.get('[class="help-block"]')
    .contains("กรุณากรอก จำนวนเงินที่โอน")
    .and("have.text", "กรุณากรอก จำนวนเงินที่โอน");
});

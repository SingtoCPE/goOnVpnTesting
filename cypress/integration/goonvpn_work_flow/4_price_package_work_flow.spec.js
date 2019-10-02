/// <reference types = 'cypress'/>

describe("Work flow : Price and package", () => {
  beforeEach("Go to Price and package.", () => {
    cy.beforeEachPrice(); //commands
  });

  //   it("Work flow: ดูเลขที่บัญชี > Topup > รับวันทดลองฟรี", () => {
  //     cy.viewAccountNumber(); //commands
  //     cy.get('[class="special btn-get-trial"]')
  //       .contains(" รับวันทดลองใช้งานฟรี!")
  //       .should("have.attr", "href", "/promotion/get-trial")
  //       .and("have.text", " รับวันทดลองใช้งานฟรี!")
  //       .click();
  //     cy.url().should("include", "/get-trial");
  //   });

  //   it("Work flow: ดูเลขที่บัญชี > Topup > เติมวันใช้งาน", () => {
  //     cy.viewAccountNumber(); //commands
  //     cy.loopClickTopupGP(); //commands
  //     cy.loopClickCancel(); //commands
  //   });

  //   it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > เติม GP ด้วยบัตรทรูมันนี่​", () => {
  //     cy.topupTruemoney(); //commands
  //   });
  // //ต้องเติมเงิน true money ถึงจะ test เสร็จ -----
  //   it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > Invalid เติม GP ด้วยบัตรทรูมันนี่​", () => {
  //     cy.topupTruemoney(); //commands
  //     cy.get('[class="text-center form-control"]')
  //       .and("have.id", "tmn_password")
  //       .type("1234");
  //     cy.get('[class="hvr-grow-shadow btn btn-theme-bg"]')
  //       .contains(" เติมเงิน")
  //       .should("have.text", " เติมเงิน")
  //       .click()
  //       .get('[class="ui-dialog-title"]')
  //       .contains("เกิดข้อผิดพลาด")
  //       .should("have.text", "เกิดข้อผิดพลาด")
  //       .get('[class="ui-button ui-corner-all ui-widget"]')
  //       .contains("ปิด")
  //       .should("have.text", "ปิด")
  //       .click();
  //   });

  //   it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  เติม GP ด้วยบัตรทรูมันนี่", () => {
  //     // ต้องเติมถึงจะทำ test ผ่าน
  //   });

  //   it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  ชำระผ่าน PayPal > กรอก ข้อมูลการชำระเงินไม่สำเร็จ", () => {
  //     cy.viewAccountNumber(); // commands
  //     cy.loopSelectPaypal(); // commands
  // // - ติดปัญหากดแล้วเด้งไปหน้าอื่น
  // // - ต้องลองจ่ายแบบ paypal
  //   });

  //   it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  ชำระผ่าน PayPal > กรอก ข้อมูลการชำระเงินสำเร็จ", () => {
  //     cy.viewAccountNumber(); // commands
  //     cy.loopSelectPaypal(); // commands
  // // - ติดปัญหากดแล้วเด้งไปหน้าอื่น
  // // - ต้องลองจ่ายแบบ paypal
  //   });

  // // it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  แจ้งโอนเงิน > กรอก ข้อมูลแจ้งโอนเงินสำเร็จ", () => {
  // //   cy.viewAccountNumber(); // commands
  // //   cy.loopSelectTransfer()
  // // });

  // it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  แจ้งโอนเงิน > กรอก ข้อมูลแจ้งโอนเงินไม่สำเร็จ", () => {
  //   cy.viewAccountNumber(); // commands
  //   cy.loopSelectTransferInvalid()
  // });

  // it('Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > ช่องทางการเติม GP',() => {
  //   cy.viewAccountNumber(); // commands
  //   cy.get('[class="sub-menu"]')
  //     .contains(' ช่องทางการเติม GP')
  //     .should('have.text',' ช่องทางการเติม GP')
  //     .and('have.attr','href','/how-to-pay')
  //     .click()
  // })

  // it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > ข้อมูลผู้ใช้", () => {
  //   cy.viewAccountNumber(); // commands
  //   cy.get(":nth-child(3) > .sub-menu > :nth-child(1) > a")
  //     .contains(" ข้อมูลผู้ใช้")
  //     .should("have.attr", "href", "/my-account");
  // });

  it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > เปลี่ยนรหัสผ่านสำเร็จ", () => {
    cy.viewAccountNumber(); // commands
    cy.get(":nth-child(3) > .sub-menu > :nth-child(2) > a")
      .contains(" เปลี่ยนรหัสผ่าน")
      .should("have.text", " เปลี่ยนรหัสผ่าน")
      .and("have.attr", "href", "/change-password")
      .click();
    cy.get("#passwordchangeform-currentpasswd")
      .type(Cypress.env("OLDPASS"))
      .should("have.attr", "name")
      .and("eq", "PasswordChangeForm[currentPasswd]");
      cy.get('#passwordchangeform-newpasswd')
      .type(Cypress.env("NEWPASS"))
      .should("have.attr", "name")
      .and("eq", "PasswordChangeForm[newPasswd]");
      cy.get('#passwordchangeform-verifypasswd')
      .type(Cypress.env("NEWPASS"))
      .should("have.attr", "name")
      .and("eq", "PasswordChangeForm[verifyPasswd]");
      cy.get(':nth-child(5) > .btn')
      .contains('เปลี่ยนรหัสผ่าน')
      .click()
      cy.url().should("include", "/my-account");
      cy.get('[data-notify="title"]')
      .contains('สำเร็จ!')
      .and('have.text','สำเร็จ!')
  });
});

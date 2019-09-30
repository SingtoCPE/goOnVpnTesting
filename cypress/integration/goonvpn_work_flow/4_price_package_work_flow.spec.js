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

  it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  แจ้งโอนเงิน > กรอก ข้อมูลแจ้งโอนเงินสำเร็จ", () => {
    cy.viewAccountNumber(); // commands
    cy.loopSelectTransfer()
  });

  // it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  แจ้งโอนเงิน > กรอก ข้อมูลแจ้งโอนเงินไม่สำเร็จ", () => {
  //   cy.viewAccountNumber(); // commands
  //   cy.loopSelectTransferInvalid()
  // });
});

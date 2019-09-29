/// <reference types = 'cypress'/>

describe("Work flow : Price and package", () => {
  beforeEach("Go to Price and package.", () => {
    cy.beforeEachPrice(); //command
  });

  // it("Work flow: ดูเลขที่บัญชี > Topup > รับวันทดลองฟรี", () => {
  //   cy.viewAccountNumber(); //command
  //   cy.get('[class="special btn-get-trial"]')
  //     .contains(" รับวันทดลองใช้งานฟรี!")
  //     .should("have.attr", "href", "/promotion/get-trial")
  //     .and("have.text", " รับวันทดลองใช้งานฟรี!")
  //     .click();
  //   cy.url().should("include", "/get-trial");
  // });

  // it("Work flow: ดูเลขที่บัญชี > Topup > เติมวันใช้งาน", () => {
  //   cy.viewAccountNumber(); //command
  //   cy.loopClickTopupGP(); //command
  //   cy.loopClickCancel(); //command
  // });

  // it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > เติม GP ด้วยบัตรทรูมันนี่​", () => {
  //   cy.topupTruemoney(); //command
  // });
  // ต้องเติมเงิน true money ถึงจะ test เสร็จ -----
  // it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > Invalid เติม GP ด้วยบัตรทรูมันนี่​", () => {
  //   cy.topupTruemoney(); //command
  //   cy.get('[class="text-center form-control"]')
  //     .and("have.id", "tmn_password")
  //     .type("1234");
  //   cy.get('[class="hvr-grow-shadow btn btn-theme-bg"]')
  //     .contains(" เติมเงิน")
  //     .should("have.text", " เติมเงิน")
  //     .click()
  //     .get('[class="ui-dialog-title"]')
  //     .contains("เกิดข้อผิดพลาด")
  //     .should("have.text", "เกิดข้อผิดพลาด")
  //     .get('[class="ui-button ui-corner-all ui-widget"]')
  //     .contains("ปิด")
  //     .should("have.text", "ปิด")
  //     .click();
  // });

  // it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  เติม GP ด้วยบัตรทรูมันนี่", () => {

  // });

  it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  ชำระผ่าน PayPal", () => {
    cy.viewAccountNumber();
    cy.loopSelectPaypal()
  });
});

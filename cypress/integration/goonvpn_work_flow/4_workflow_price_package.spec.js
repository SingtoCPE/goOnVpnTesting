/// <reference types = 'cypress'/>

describe("Work flow : Price and package", () => {
  beforeEach("Go to Price and package.", () => {
    cy.beforeEachPrice();
  });

  // it("Price & Package : การเติม GP ด้วยบัตรทรูมันนี่", () => {
  //   cy.loopTopupPackageByTrueMoney();
  // });

  it("Price & Package : loopTopupDay", () => {
    // cy.loopTopupDay();
    cy.loopCancelTopupDay();
  });

  // it("Price & Package : ดูเลขที่บัญชี > Topup > รับวันทดลองฟรี", () => {
  //   cy.viewAccountNumber();
  //   cy.get('[class="special btn-get-trial"]')
  //     .contains(" รับวันทดลองใช้งานฟรี!")
  //     .should("have.attr", "href", "/promotion/get-trial")
  //     .and("have.text", " รับวันทดลองใช้งานฟรี!")
  //     .click();
  //   cy.url().should("include", "/get-trial");
  // });

  // it("Price & Package : ดูเลขที่บัญชี > Topup > เติมวันใช้งาน", () => {
  //   cy.viewAccountNumber();
  //   cy.loopClickTopupGP();
  //   cy.loopTopupGPClickCancel();
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ชำระค่าบริการ > Invalid เติม GP ด้วยบัตรทรูมันนี่​", () => {
  //   cy.topupTruemoney();
  //   cy.get('[class="text-center form-control"]')
  //     .should("have.id", "tmn_password")
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

  // it("Price & Package : ดูเลขที่บัญชี > ชำระค่าบริการ >  เติม GP ด้วยบัตรทรูมันนี่", () => {
  //   // ต้องเติมถึงจะทำ test ผ่าน
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ชำระค่าบริการ >  ชำระผ่าน PayPal > กรอก ข้อมูลการชำระเงินสำเร็จ", () => {
  //   cy.viewAccountNumber();
  //   cy.loopSelectPaypal();
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ชำระค่าบริการ >  แจ้งโอนเงิน > กรอก ข้อมูลแจ้งโอนเงินสำเร็จ", () => {
  //   //   cy.viewAccountNumber();
  //   //   cy.loopSelectTransfer()
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ชำระค่าบริการ >  แจ้งโอนเงิน > กรอก ข้อมูลแจ้งโอนเงินไม่สำเร็จ", () => {
  //   cy.viewAccountNumber();
  //   cy.loopSelectTransferInvalid();
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ชำระค่าบริการ > ช่องทางการเติม GP", () => {
  //   cy.viewAccountNumber();
  //   cy.get('[class="sub-menu"]')
  //     .contains(" ช่องทางการเติม GP")
  //     .should("have.text", " ช่องทางการเติม GP")
  //     .and("have.attr", "href", "/how-to-pay")
  //     .click();
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > ข้อมูลผู้ใช้", () => {
  //   cy.viewAccountNumber();
  //   cy.get(":nth-child(3) > .sub-menu > :nth-child(1) > a")
  //     .contains(" ข้อมูลผู้ใช้")
  //     .should("have.attr", "href", "/my-account");
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > เปลี่ยนรหัสผ่านสำเร็จ", () => {
  //   cy.viewAccountNumber();
  //   cy.get(":nth-child(3) > .sub-menu > :nth-child(2) > a")
  //     .contains(" เปลี่ยนรหัสผ่าน")
  //     .should("have.text", " เปลี่ยนรหัสผ่าน")
  //     .and("have.attr", "href", "/change-password")
  //     .click();
  //   cy.changePasswordComplete();
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > เปลี่ยนรหัสผ่านไม่สำเร็จ", () => {
  //   cy.viewAccountNumber();
  //   cy.get(":nth-child(3) > .sub-menu > :nth-child(2) > a")
  //     .contains(" เปลี่ยนรหัสผ่าน")
  //     .should("have.text", " เปลี่ยนรหัสผ่าน")
  //     .and("have.attr", "href", "/change-password")
  //     .click();
  //   cy.changePasswordInvalid();
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > คูปอง & โปรโมโค้ด", () => {
  //   cy.viewAccountNumber();
  //   cy.get('[class="sub-menu"]')
  //     .children()
  //     .contains(" คูปอง & โปรโมโค้ด")
  //     .click();
  //   cy.url().should("include", "/promo-code");
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > คูปอง & โปรโมโค้ด failed> empty case", () => {
  //   cy.viewAccountNumber();
  //   cy.get('[class="sub-menu"]')
  //     .children()
  //     .contains(" คูปอง & โปรโมโค้ด")
  //     .click();
  //   cy.url().should("include", "/promo-code");
  //   cy.get('[class="text-center form-control"]').type(" ");
  //   cy.get('[class="btn border-theme"]')
  //     .contains("ใช้ คูปอง & โปรโมโค้ด")
  //     .click();
  //   cy.get('[class="help-block"]')
  //     .contains("กรุณากรอก Promo Code")
  //     .and("have.text", "กรุณากรอก Promo Code");
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > คูปอง & โปรโมโค้ด failed> promotion wrong case", () => {
  //   cy.viewAccountNumber();
  //   cy.get('[class="sub-menu"]')
  //     .children()
  //     .contains(" คูปอง & โปรโมโค้ด")
  //     .click();
  //   cy.url().should("include", "/promo-code");
  //   cy.get('[class="text-center form-control"]').type("abc");
  //   cy.get('[class="btn border-theme"]')
  //     .contains("ใช้ คูปอง & โปรโมโค้ด")
  //     .click();
  //   cy.get('[class="form-group field-promocodeform-code required has-error"]')
  //     .children()
  //     .contains("ไม่สามารถใช้งานโปรโมโค้ดนี้ได้")
  //     .and("have.text", "ไม่สามารถใช้งานโปรโมโค้ดนี้ได้");
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ประวัติการทำรายการ >  สถานะแจ้งโอนเงิน", () => {
  //   cy.viewAccountNumber();
  //   cy.get('[class="sub-menu"]')
  //     .contains(" สถานะแจ้งโอนเงิน")
  //     .should("have.attr", "href", "/deposit-report")
  //     .click();
  //   cy.url().should("include", "/deposit-report");
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ประวัติการทำรายการ >  ประวัติการเติม GP", () => {
  //   cy.viewAccountNumber();
  //   cy.get('[class="sub-menu"]')
  //     .contains(" ประวัติการเติม GP")
  //     .should("have.attr", "href", "/payment-history")
  //     .click();
  //   cy.url().should("include", "/payment-history");
  //   cy.get('[class="btn btn-theme-bg"]')
  //     .contains(" รีเฟรช")
  //     .should("have.attr", "href", "/payment-history")
  //     .click();
  // });

  // it("Price & Package : ดูเลขที่บัญชี > ประวัติการทำรายการ >  ประวัติการเติมวัน", () => {
  //   cy.viewAccountNumber();
  //   cy.get('[class="sub-menu"]')
  //     .contains(" ประวัติเติมวัน")
  //     .should("have.attr", "href", "/topup-time-history")
  //     .click();
  //   cy.url().should("include", "/topup-time-history");
  //   cy.get('[class="btn btn-theme-bg"]')
  //     .contains(" รีเฟรช")
  //     .should("have.attr", "href", "/topup-time-history")
  //     .click();
  // });
});

/// <reference types = 'cypress'/>

describe("Work flow : Price and package", () => {
  beforeEach("Go to Price and package.", () => {
    cy.beforeEachPrice(); //commands
  });

    it("Work flow: ดูเลขที่บัญชี > Topup > รับวันทดลองฟรี", () => {
      cy.viewAccountNumber(); //commands
      cy.get('[class="special btn-get-trial"]')
        .contains(" รับวันทดลองใช้งานฟรี!")
        .should("have.attr", "href", "/promotion/get-trial")
        .and("have.text", " รับวันทดลองใช้งานฟรี!")
        .click();
      cy.url().should("include", "/get-trial");
    });

    it("Work flow: ดูเลขที่บัญชี > Topup > เติมวันใช้งาน", () => {
      cy.viewAccountNumber(); //commands
      cy.loopClickTopupGP(); //commands
      cy.loopClickCancel(); //commands
    });

    it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > เติม GP ด้วยบัตรทรูมันนี่​", () => {
      cy.topupTruemoney(); //commands
    });
  //ต้องเติมเงิน true money ถึงจะ test เสร็จ -----
    it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > Invalid เติม GP ด้วยบัตรทรูมันนี่​", () => {
      cy.topupTruemoney(); //commands
      cy.get('[class="text-center form-control"]')
        .and("have.id", "tmn_password")
        .type("1234");
      cy.get('[class="hvr-grow-shadow btn btn-theme-bg"]')
        .contains(" เติมเงิน")
        .should("have.text", " เติมเงิน")
        .click()
        .get('[class="ui-dialog-title"]')
        .contains("เกิดข้อผิดพลาด")
        .should("have.text", "เกิดข้อผิดพลาด")
        .get('[class="ui-button ui-corner-all ui-widget"]')
        .contains("ปิด")
        .should("have.text", "ปิด")
        .click();
    });

    it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  เติม GP ด้วยบัตรทรูมันนี่", () => {
      // ต้องเติมถึงจะทำ test ผ่าน
    });

    it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  ชำระผ่าน PayPal > กรอก ข้อมูลการชำระเงินไม่สำเร็จ", () => {
      cy.viewAccountNumber(); // commands
      cy.loopSelectPaypal(); // commands
  // - ติดปัญหากดแล้วเด้งไปหน้าอื่น
  // - ต้องลองจ่ายแบบ paypal
    });

    it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  ชำระผ่าน PayPal > กรอก ข้อมูลการชำระเงินสำเร็จ", () => {
      cy.viewAccountNumber(); // commands
      cy.loopSelectPaypal(); // commands
  // - ติดปัญหากดแล้วเด้งไปหน้าอื่น
  // - ต้องลองจ่ายแบบ paypal
    });

  // it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  แจ้งโอนเงิน > กรอก ข้อมูลแจ้งโอนเงินสำเร็จ", () => {
  //   cy.viewAccountNumber(); // commands
  //   cy.loopSelectTransfer()
  // });

  it("Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ >  แจ้งโอนเงิน > กรอก ข้อมูลแจ้งโอนเงินไม่สำเร็จ", () => {
    cy.viewAccountNumber(); // commands
    cy.loopSelectTransferInvalid()
  });

  it('Work flow: ดูเลขที่บัญชี > ชำระค่าบริการ > ช่องทางการเติม GP',() => {
    cy.viewAccountNumber(); // commands
    cy.get('[class="sub-menu"]')
      .contains(' ช่องทางการเติม GP')
      .should('have.text',' ช่องทางการเติม GP')
      .and('have.attr','href','/how-to-pay')
      .click()
  })

  it("Work flow: ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > ข้อมูลผู้ใช้", () => {
    cy.viewAccountNumber(); // commands
    cy.get(":nth-child(3) > .sub-menu > :nth-child(1) > a")
      .contains(" ข้อมูลผู้ใช้")
      .should("have.attr", "href", "/my-account");
  });

  it("Work flow: ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > เปลี่ยนรหัสผ่านสำเร็จ", () => {
    cy.viewAccountNumber(); // commands
    cy.get(":nth-child(3) > .sub-menu > :nth-child(2) > a")
      .contains(" เปลี่ยนรหัสผ่าน")
      .should("have.text", " เปลี่ยนรหัสผ่าน")
      .and("have.attr", "href", "/change-password")
      .click();
    cy.changePasswordComplete();
  });

  it("Work flow: ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > เปลี่ยนรหัสผ่านไม่สำเร็จ", () => {
    cy.viewAccountNumber(); // commands
    cy.get(":nth-child(3) > .sub-menu > :nth-child(2) > a")
      .contains(" เปลี่ยนรหัสผ่าน")
      .should("have.text", " เปลี่ยนรหัสผ่าน")
      .and("have.attr", "href", "/change-password")
      .click();
    cy.changePasswordInvalid();
  });

  it("Work flow: ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > คูปอง & โปรโมโค้ด", () => {
    cy.viewAccountNumber(); // commands
    cy.get('[class="sub-menu"]')
      .children()
      .contains(" คูปอง & โปรโมโค้ด")
      .click()
   cy.url().should("include",'/promo-code')
  });

  it("Work flow: ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > คูปอง & โปรโมโค้ด failed> empty case", () => {
    cy.viewAccountNumber(); // commands
    cy.get('[class="sub-menu"]')
      .children()
      .contains(" คูปอง & โปรโมโค้ด")
      .click();
    cy.url().should("include", "/promo-code");
    cy.get('[class="text-center form-control"]').type(" ");
    cy.get('[class="btn border-theme"]')
      .contains("ใช้ คูปอง & โปรโมโค้ด")
      .click();
    cy.get('[class="help-block"]')
      .contains("กรุณากรอก Promo Code")
      .and('have.text','กรุณากรอก Promo Code')
  });

  it("Work flow: ดูเลขที่บัญชี > ข้อมูลผู้ใช้ > คูปอง & โปรโมโค้ด failed> promotion wrong case", () => {
    cy.viewAccountNumber(); // commands
    cy.get('[class="sub-menu"]')
      .children()
      .contains(" คูปอง & โปรโมโค้ด")
      .click();
    cy.url().should("include", "/promo-code");
    cy.get('[class="text-center form-control"]').type("abc");
    cy.get('[class="btn border-theme"]')
      .contains("ใช้ คูปอง & โปรโมโค้ด")
      .click();
    cy.get('[class="form-group field-promocodeform-code required has-error"]')
      .children()
      .contains("ไม่สามารถใช้งานโปรโมโค้ดนี้ได้")
      .and('have.text','ไม่สามารถใช้งานโปรโมโค้ดนี้ได้')
  });

  it("Work flow: ดูเลขที่บัญชี > ประวัติการทำรายการ >  สถานะแจ้งโอนเงิน", () => {
    cy.viewAccountNumber(); // commands
    cy.get('[class="sub-menu"]')
      .contains(' สถานะแจ้งโอนเงิน')
      .and('have.attr','href','/deposit-report')
      .click()
    cy.url().should('include','/deposit-report')
  })

  it("Work flow: ดูเลขที่บัญชี > ประวัติการทำรายการ >  ประวัติการเติม GP", () => {
    cy.viewAccountNumber(); // commands
    cy.get('[class="sub-menu"]')
      .contains(' ประวัติการเติม GP')
      .and('have.attr','href','/payment-history')
      .click()
    cy.url().should('include','/payment-history')
    cy.get('[class="btn btn-theme-bg"]')
      .contains(' รีเฟรช')
      .should('have.attr','href','/payment-history')
      .click()
  })

  it("Work flow: ดูเลขที่บัญชี > ประวัติการทำรายการ >  ประวัติการเติม GP", () => {
    cy.viewAccountNumber(); // commands
    cy.get('[class="sub-menu"]')
      .contains(' ประวัติเติมวัน')
      .and('have.attr','href','/topup-time-history')
      .click()
    cy.url().should('include','/topup-time-history')
    cy.get('[class="btn btn-theme-bg"]')
      .contains(' รีเฟรช')
      .should('have.attr','href','/topup-time-history')
      .click()
  })
});

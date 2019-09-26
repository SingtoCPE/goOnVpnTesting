/// <reference types = 'cypress'/>

const urlMain = "https://www.goonvpn.com/";

describe("Work flow : Main page ", () => {
  beforeEach("go to URL.", () => {
    cy.visit(urlMain).contains("หน้าแรก");
    cy.url().should("include", "/");
  });
  //--------------------------------------------------------------------------------
  it("work flow : wallpaper menu bar ", () => {
    cy.get('[class="flex-control-nav flex-control-paging"]')
      .contains("1")
      .click();
    cy.get('[class="btn btn-slide signup"]')
      .should("have.attr", "href", "/signup")
      .and("contain.text", " สมัครสมาชิก")
      .click();
    cy.visit(urlMain);

    cy.get('[class="flex-control-nav flex-control-paging"]')
      .contains("2")
      .should("contain", "2")
      .click();
    cy.get('[class="btn btn-slide "]')
      .should("have.attr", "href", "/game-reviews")
      .and("contain.text", " รายชื่อเกมส์ที่รองรับ")
      .click();
    cy.visit(urlMain);

    cy.get('[class="flex-control-nav flex-control-paging"]')
      .contains("3")
      .should("contain", "3")
      .click();
    cy.get('[class="btn btn-slide"]')
      .should("have.attr", "href", "/pages/introduce-gp")
      .should("contain.text", "ข้อดีของระบบ GP")
      .click();
  });
  //--------------------------------------------------------------------------------
  it("work flow : ข่าวสารและโปรโมชั่น bar", () => {
    cy.get('[class="heading"]');
    cy.get('[class="news-desc"]')
      .get("h4")
      .contains("คำแนะนำในการเลือกเซิร์ฟเวอร์")
      .should("contain.text", "คำแนะนำในการเลือกเซิร์ฟเวอร์")
      .click();
    cy.visit(urlMain);
    cy.get('[class="heading"]');
    cy.get('[class="news-desc"]')
      .get("h4")
      .contains("เพิ่มช่องทางชำระเงินโอนด้วยบัญชีกรุงไทยและทหารไทย")
      .should(
        "contain.text",
        "เพิ่มช่องทางชำระเงินโอนด้วยบัญชีกรุงไทยและทหารไทย"
      )
      .click();
  });
  // //--------------------------------------------------------------------------------
  it("work flow : เกมส์ออนไลน์ยอดนิยม bar", () => {
    cy.get('[class="text-center show-all-game"]')
      .contains("คลิ๊กเพื่อดูรายชื่อเกมส์ทั้งหมด")
      .should("contain.text", " คลิ๊กเพื่อดูรายชื่อเกมส์ทั้งหมด")
      .click();
  });
  // // --------------------------------------------------------------------------------
  // it("work flow : BLOG & FEATURES bar", () => {
  //   cy.get(".wrap > :nth-child(12)")
  //   cy.get(":nth-child(1) > .news-desc > .blogs-description > .text-danger")
  //     .click()
  //   cy.visit(urlMain);
  //   cy.get(".wrap > :nth-child(12)")
  //   cy.get(":nth-child(2) > .news-desc > .blogs-description > .text-danger")
  //     .click()
  //   cy.visit(urlMain);
  //   cy.get(".wrap > :nth-child(12)")
  //   cy.get(":nth-child(3) > .news-desc > .blogs-description > .text-danger")
  //     .click()
  //   cy.visit(urlMain);
  //   cy.get(".wrap > :nth-child(12)")
  //   cy.get(":nth-child(3) > .col-md-12 > .text-center > .btn")
  //     .click()
  // });
  // it("work flow : footer bar", () => {
  //   cy.get("footer")
  //     .scrollIntoView()
  //   cy.get(".list-unstyled > :nth-child(1) > a")
  //     .click()
  //   cy.visit(urlMain);
  //   cy.get(".list-unstyled > :nth-child(2) > a")
  //     .click()
  //   cy.visit(urlMain);
  //   cy.get(".list-unstyled > :nth-child(3) > a")
  //     .click()
  //   cy.visit(urlMain);
  //   cy.get(".list-unstyled > :nth-child(4) > a")
  //     .click()
  //   cy.visit(urlMain);
  //   cy.get(".list-unstyled > :nth-child(5) > a")
  //     .click()
  //   cy.visit(urlMain);
  //   cy.get(".list-unstyled > :nth-child(6) > a")
  //     .click()
  // });
});

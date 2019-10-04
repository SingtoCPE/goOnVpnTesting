/// <reference types = 'cypress'/>

describe("Work flow : Main page ", () => {
  beforeEach("go to URL.", () => {
    cy.beforeEachMainpage();
  });
  //--------------------------------------------------------------------------------
  it("Work flow : Main page > wallpaper menu bar ", () => {
    cy.clearCookies();
    cy.loopWallpaperMenubar();
  });
  //--------------------------------------------------------------------------------
  it("Work flow : Main page > ข่าวสารและโปรโมชั่น bar", () => {
    cy.get('[class="heading"]');
    cy.get('[class="news-desc"]')
      .get("h4")
      .contains("คำแนะนำในการเลือกเซิร์ฟเวอร์")
      .and("contain.attr", "href", "/instructions-select-server")
      .click();
    cy.url().should("eq", "https://www.goonvpn.com/instructions-select-server");
    cy.visit(Cypress.env("URLMAIN"));
    cy.get('[class="heading"]');
    cy.get('[class="news-desc"]')
      .get("h4")
      .contains("เพิ่มช่องทางชำระเงินโอนด้วยบัญชีกรุงไทยและทหารไทย")
      .and("contain.attr", "href", "/bank-transfer-payment-update")
      .click();
    cy.url().should(
      "eq",
      "https://www.goonvpn.com/bank-transfer-payment-update"
    );
  });
  // //--------------------------------------------------------------------------------
  it("Work flow : Main page > เกมส์ออนไลน์ยอดนิยม bar", () => {
    cy.get('[class="text-center show-all-game"]')
      .contains("คลิ๊กเพื่อดูรายชื่อเกมส์ทั้งหมด")
      .and("contain.text", " คลิ๊กเพื่อดูรายชื่อเกมส์ทั้งหมด")
      .click();
  });
  // --------------------------------------------------------------------------------
  it("Work flow : Main page > BLOG & FEATURES bar", () => {
    cy.get('[class="blog-home-title"]')
      .contains("Overkill’s The Walking Dead เตรียมเปิด Closed Bata บน PC")
      .and(
        "contain.text",
        "Overkill’s The Walking Dead เตรียมเปิด Closed Bata บน PC"
      )
      .click();
    cy.visit(Cypress.env("URLMAIN"));

    cy.get('[class="blog-home-title"]')
      .contains(
        "Overcooked 2 เปิดให้บริการแล้ววันนี้ทั้ง PC และ เครื่องเล่นคอนโซล"
      )
      .and(
        "contain.text",
        "Overcooked 2 เปิดให้บริการแล้ววันนี้ทั้ง PC และ เครื่องเล่นคอนโซล"
      )
      .click();
    cy.visit(Cypress.env("URLMAIN"));

    cy.get('[class="blog-home-title"]')
      .contains("Fallout Shelter Online CN พร้อมเปิดทดสอบตัวเกมส์ในเร็วๆนี้")
      .and(
        "contain.text",
        "Fallout Shelter Online CN พร้อมเปิดทดสอบตัวเกมส์ในเร็วๆนี้"
      )
      .click();
  });

  it("Work flow : Main page > footer bar", () => {
    cy.loopFooterbar();
  });
});

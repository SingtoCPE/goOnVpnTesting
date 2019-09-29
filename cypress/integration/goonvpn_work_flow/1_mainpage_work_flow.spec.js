/// <reference types = 'cypress'/>

const urlMain = "https://www.goonvpn.com/";

describe("Work flow : Main page ", () => {
  beforeEach("go to URL.", () => {
    cy.beforeEachMainpage();
  });
  //--------------------------------------------------------------------------------
  it("Work flow : wallpaper menu bar ", () => {
    cy.clearCookies();
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
  it("Work flow : ข่าวสารและโปรโมชั่น bar", () => {
    cy.tagH4() // command
      .contains("คำแนะนำในการเลือกเซิร์ฟเวอร์")
      .should("contain.text", "คำแนะนำในการเลือกเซิร์ฟเวอร์")
      .click();
    cy.visit(urlMain);
    cy.tagH4() // command
      .contains("เพิ่มช่องทางชำระเงินโอนด้วยบัญชีกรุงไทยและทหารไทย")
      .should(
        "contain.text",
        "เพิ่มช่องทางชำระเงินโอนด้วยบัญชีกรุงไทยและทหารไทย"
      )
      .click();
  });
  // //--------------------------------------------------------------------------------
  it("Work flow : เกมส์ออนไลน์ยอดนิยม bar", () => {
    cy.get('[class="text-center show-all-game"]')
      .contains("คลิ๊กเพื่อดูรายชื่อเกมส์ทั้งหมด")
      .should("contain.text", " คลิ๊กเพื่อดูรายชื่อเกมส์ทั้งหมด")
      .click();
  });
  // --------------------------------------------------------------------------------
  it("Work flow : BLOG & FEATURES bar", () => {
    cy.get('[class="blog-home-title"]')
      .contains("Overkill’s The Walking Dead เตรียมเปิด Closed Bata บน PC")
      .should(
        "contain.text",
        "Overkill’s The Walking Dead เตรียมเปิด Closed Bata บน PC"
      )
      .click();
    cy.visit(urlMain);

    cy.get('[class="blog-home-title"]')
      .contains(
        "Overcooked 2 เปิดให้บริการแล้ววันนี้ทั้ง PC และ เครื่องเล่นคอนโซล"
      )
      .should(
        "contain.text",
        "Overcooked 2 เปิดให้บริการแล้ววันนี้ทั้ง PC และ เครื่องเล่นคอนโซล"
      )
      .click();
    cy.visit(urlMain);

    cy.get('[class="blog-home-title"]')
      .contains("Fallout Shelter Online CN พร้อมเปิดทดสอบตัวเกมส์ในเร็วๆนี้")
      .should(
        "contain.text",
        "Fallout Shelter Online CN พร้อมเปิดทดสอบตัวเกมส์ในเร็วๆนี้"
      )
      .click();
  });

  it("Work flow : footer bar", () => {
    cy.get("footer");
    cy.get('[class="list-unstyled"]')
      .should("contain.text", " ตรวจสอบไอพี")
      .click();
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(2) > a")
      .should("contain.text", " วิธีแจ้งโอนเงิน")
      .click();
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(3) > a")
      .should("contain.text", " วิธีเติม GP ด้วยทรูมันนี่")
      .click();
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(4) > a")
      .should("contain.text", " วิธีการเติมวัน")
      .click();
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(5) > a")
      .should("contain.text", " ตอบ-ถามปัญหาการใช้งาน")
      .click();
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(6) > a")
      .should("contain.text", " Blog & Feature")
      .click();
  });
});

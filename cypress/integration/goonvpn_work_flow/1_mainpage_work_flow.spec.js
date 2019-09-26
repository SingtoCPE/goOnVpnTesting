/// <reference types = 'cypress'/>

const urlMain = "https://www.goonvpn.com/";
describe("Work flow : Main page ", () => {
  beforeEach('go to URL.',() => {
    cy.visit(urlMain)
      .contains('หน้าแรก')
      cy.url().should('include','/')
  });
  //--------------------------------------------------------------------------------
  it("work flow : wallpaper menu bar ", () => {
    cy.get('[class="slider-overlay"]')
    cy.get(".flex-control-nav > :nth-child(1) > a")
      .click()
    cy.get(
      ".flex-active-slide > figure > .slider-overlay > .slide-action > .btn"
    )
      .click()
    cy.visit(urlMain);
    //-----------------------------------------------------------------------------
    cy.get('[class="slider-overlay"]')
    cy.get(".flex-control-nav > :nth-child(2) > a")
      .click()
    cy.get(
      ".flex-active-slide > figure > .slider-overlay > .slide-action > .btn"
    )
      .click()
    cy.visit(urlMain);
    cy.get('[class="slider-overlay"]')
    cy.get(".flex-control-nav > :nth-child(3) > a")
      .click()
    cy.get(
      ".flex-active-slide > figure > .slider-overlay > .slide-action > .btn"
    )
      .click()
  });
  //--------------------------------------------------------------------------------
  it("work flow : ข่าวโปรโมชั่น bar", () => {
    cy.get('[class="heading"]')
    cy.get(".owl-wrapper > :nth-child(1) > .news-desc > h4 > a")
      .click()
    cy.visit(urlMain);
    cy.get('[class="heading"]')
    cy.get(".owl-wrapper > :nth-child(2) > .news-desc > h4 > a")
      .click()
  });
  //--------------------------------------------------------------------------------
  it("work flow : เกมส์ออนไลน์ยอดนิยม bar", () => {
    cy.get(":nth-child(8) > .widget1_box > a > .img-responsive")
    cy.get(":nth-child(2) > .col-md-12 > .text-center > .btn")
      .click()
  });
  // --------------------------------------------------------------------------------
  it("work flow : BLOG & FEATURES bar", () => {
    cy.get(".wrap > :nth-child(12)")
    cy.get(":nth-child(1) > .news-desc > .blogs-description > .text-danger")
      .click()
    cy.visit(urlMain);
    cy.get(".wrap > :nth-child(12)")
    cy.get(":nth-child(2) > .news-desc > .blogs-description > .text-danger")
      .click()
    cy.visit(urlMain);
    cy.get(".wrap > :nth-child(12)")
    cy.get(":nth-child(3) > .news-desc > .blogs-description > .text-danger")
      .click()
    cy.visit(urlMain);
    cy.get(".wrap > :nth-child(12)")
    cy.get(":nth-child(3) > .col-md-12 > .text-center > .btn")
      .click()
  });
  it("work flow : footer bar", () => {
    cy.get("footer")
      .scrollIntoView()
    cy.get(".list-unstyled > :nth-child(1) > a")
      .click()
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(2) > a")
      .click()
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(3) > a")
      .click()
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(4) > a")
      .click()
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(5) > a")
      .click()
    cy.visit(urlMain);
    cy.get(".list-unstyled > :nth-child(6) > a")
      .click()
  });
});

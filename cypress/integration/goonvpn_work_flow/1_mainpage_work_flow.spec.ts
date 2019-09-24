const urlMain = "https://www.goonvpn.com/";
describe("Work flow : Main page ", () => {
  //--------------------------------------------------------------------------------
  it("Go to URL.", () => {
    cy.visit(urlMain);
  });
  //--------------------------------------------------------------------------------
  it("work flow : wallpaper menu bar ", () => {
    cy.get('[class="slider-overlay"]')
      .scrollIntoView()
      .wait(1000);
    cy.get(".flex-control-nav > :nth-child(1) > a")
      .click()
      .wait(1500);
    cy.get(
      ".flex-active-slide > figure > .slider-overlay > .slide-action > .btn"
    )
      .click()
      .wait(1500);
    cy.visit(urlMain);
    //-----------------------------------------------------------------------------
    cy.get('[class="slider-overlay"]')
      .scrollIntoView()
      .wait(1000);
    cy.get(".flex-control-nav > :nth-child(2) > a")
      .click()
      .wait(1500);
    cy.get(
      ".flex-active-slide > figure > .slider-overlay > .slide-action > .btn"
    )
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get('[class="slider-overlay"]')
      .scrollIntoView()
      .wait(1000);
    cy.get(".flex-control-nav > :nth-child(3) > a")
      .click()
      .wait(1500);
    cy.get(
      ".flex-active-slide > figure > .slider-overlay > .slide-action > .btn"
    )
      .click()
      .wait(1500);
    cy.visit(urlMain);
  });
  //--------------------------------------------------------------------------------
  it("work flow : ข่าวโปรโมชั่น bar", () => {
    cy.get('[class="heading"]')
      .scrollIntoView()
      .wait(1500);
    cy.get(".owl-wrapper > :nth-child(1) > .news-desc > h4 > a")
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get('[class="heading"]')
      .scrollIntoView()
      .wait(1500);
    cy.get(".owl-wrapper > :nth-child(2) > .news-desc > h4 > a")
      .click()
      .wait(1500);
    cy.visit(urlMain);
  });
  //--------------------------------------------------------------------------------
  it("work flow : เกมส์ออนไลน์ยอดนิยม bar", () => {
    cy.get(":nth-child(8) > .widget1_box > a > .img-responsive")
      .scrollIntoView()
      .wait(1500);
    cy.get(":nth-child(2) > .col-md-12 > .text-center > .btn")
      .click()
      .wait(1500);
    cy.visit(urlMain);
  });
  // --------------------------------------------------------------------------------
  it("work flow : BLOG & FEATURES bar", () => {
    cy.get(".wrap > :nth-child(12)")
      .scrollIntoView()
      .wait(1500);
    cy.get(":nth-child(1) > .news-desc > .blogs-description > .text-danger")
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get(".wrap > :nth-child(12)")
      .scrollIntoView()
      .wait(1500);
    cy.get(":nth-child(2) > .news-desc > .blogs-description > .text-danger")
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get(".wrap > :nth-child(12)")
      .scrollIntoView()
      .wait(1500);
    cy.get(":nth-child(3) > .news-desc > .blogs-description > .text-danger")
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get(".wrap > :nth-child(12)")
      .scrollIntoView()
      .wait(1500);
    cy.get(":nth-child(3) > .col-md-12 > .text-center > .btn")
      .click()
      .wait(500);
    cy.visit(urlMain);
  });
  it("work flow : footer bar", () => {
    cy.get("footer")
      .scrollIntoView()
      .wait(1500);
    cy.get('.list-unstyled > :nth-child(1) > a')
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get('.list-unstyled > :nth-child(2) > a')
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get('.list-unstyled > :nth-child(3) > a')
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get('.list-unstyled > :nth-child(4) > a')
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get('.list-unstyled > :nth-child(5) > a')
      .click()
      .wait(1500);
    cy.visit(urlMain);
    cy.get('.list-unstyled > :nth-child(6) > a')
      .click()
      .wait(500);
    cy.visit(urlMain);
  });
});

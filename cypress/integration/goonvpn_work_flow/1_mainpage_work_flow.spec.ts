const urlMain = "https://www.goonvpn.com/";
describe("Main page work flow", () => {
  it("Go to URL.", () => {
    cy.visit(urlMain);
    // cy.get('[class="slider-overlay"]').scrollIntoView()
    //   .wait(3000)
    // cy.get('[class="flex-control-nav flex-control-paging"]').scrollIntoView()
    // .wait(3000)
    // cy.get('[class="heading"]').scrollIntoView()
    // .wait(3000)
    // cy.get('[class="owl-pagination"]').scrollIntoView()
    // .wait(3000)
    // cy.get(':nth-child(2) > .col-md-12 > .text-center > .btn').scrollIntoView()
    // .wait(3000)
    // cy.get('.wrap > :nth-child(12)').scrollIntoView()
    // .wait(3000)
    // cy.get('footer').scrollIntoView()
  });
  it("wallpaper bar work flow", () => {
    cy.get('[class="slider-overlay"]')
      .scrollIntoView()
      .wait(1000);
    cy.get(".flex-control-nav > :nth-child(1) > a")
    .click()
    .wait(2000)
    cy.get(
      ".flex-active-slide > figure > .slider-overlay > .slide-action > .btn"
    )
      .click()
      .wait(3000);
    cy.visit(urlMain);
//-----------------------------------------------------------------------------
    cy.get('[class="slider-overlay"]')
      .scrollIntoView()
      .wait(1000);
    cy.get(".flex-control-nav > :nth-child(2) > a")
    .click()
    .wait(2000)  
    cy.get(
      ".flex-active-slide > figure > .slider-overlay > .slide-action > .btn"
    )
      .click()
      .wait(3000);
    cy.visit(urlMain);
//-----------------------------------------------------------------------------
cy.get('[class="slider-overlay"]')
      .scrollIntoView()
      .wait(1000);
    cy.get(".flex-control-nav > :nth-child(3) > a")
    .click()
    .wait(2000)  
    cy.get(
      ".flex-active-slide > figure > .slider-overlay > .slide-action > .btn"
    )
      .click()
      .wait(3000);
    cy.visit(urlMain);
  });
});

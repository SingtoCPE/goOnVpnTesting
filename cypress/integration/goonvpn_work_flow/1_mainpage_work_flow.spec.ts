const urlMain = 'https://www.goonvpn.com/';
describe('Main page work flow',()=>{
  it("Go to URL.", () => {
    cy.visit(urlMain);
    cy.get('[class="slider-overlay"]').scrollIntoView()
      .wait(3000)
    cy.get('[class="flex-control-nav flex-control-paging"]').scrollIntoView()
    .wait(3000)
    cy.get('[class="heading"]').scrollIntoView()
    .wait(3000)
    cy.get('[class="owl-pagination"]').scrollIntoView()
    .wait(3000)
    cy.get(':nth-child(2) > .col-md-12 > .text-center > .btn').scrollIntoView()
    .wait(3000)
    cy.get('.wrap > :nth-child(12)').scrollIntoView()
    .wait(3000)
    cy.get('footer').scrollIntoView()


  });
})
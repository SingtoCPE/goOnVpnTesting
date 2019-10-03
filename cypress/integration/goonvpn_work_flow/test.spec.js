describe("Work flow : Installation", () => {
  beforeEach("Go to Installation.", () => {
    cy.beforeEachInstallation(); //commands
  });

  // it("Work flow : Installation > โปรแกรม Softether VPN Client > วิธีติดตั้ง", () => {
  //   cy.get('[class="dropdown-menu"]')
  //     .children()
  //     .children()
  //     .children()
  //     .children()
  //     .contains(" วิธีติดตั้ง")
  //     .should("have.attr", "href", "/pages/install-softether")
  //     .click({ force: true });
  // });

  it("Work flow : Installation > โปรแกรม Softether VPN Client > วิธีติดตั้ง", () => {
    cy.get("#w2 > li.dropdown-submenu > ul > li:nth-child(1) > a")
      .contains(" วิธีติดตั้ง")
      .should("have.attr", "href", "/pages/install-softether")
      .click({ force: true });
  });
});

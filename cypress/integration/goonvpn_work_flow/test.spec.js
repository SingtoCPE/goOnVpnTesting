describe("Work flow : Installation", () => {
  beforeEach("Go to Installation.", () => {
    cy.beforeEachInstallation(); //commands
  });

  it("Work flow : Installation > โปรแกรม Softether VPN Client > วิธีติดตั้ง", () => {
    cy.get('[class="dropdown-menu"]')
      .children()
      .children()
      .children()
      .children()
      .contains(" วิธีติดตั้ง")
      .should("have.attr", "href", "/pages/install-softether")
      .click({ force: true });
  });
});

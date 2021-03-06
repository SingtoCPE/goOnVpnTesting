/// <reference types = 'cypress'/>

describe("Work flow : Download", () => {
  beforeEach("Go to Download.", () => {
    cy.beforeEachDowload();
  });

  it("Download : download for window > Go Connect v1.5.0.0", async () => {
    await cy
      .get('[class="btn border-theme  btn-block"]')
      .should("have.attr", "href", "/download/go-connect")
      .contains("ดาวน์โหลด")
      .click();
  });

  it("Download : download for window > Softether VPN Client", async () => {
    await cy
      .get(":nth-child(2) > :nth-child(2) > .btn")
      .contains(" ดาวน์โหลด")
      .should("have.attr", "href", "/download/softether")
      .click();
  });

  it("Download : download for Mac OS X > Tunnelblick 3.7.5", async () => {
    await cy
      .get(
        ":nth-child(2) > .text-center > .table-responsive > .table > tbody > tr > :nth-child(2) > .btn"
      )
      .contains(" ดาวน์โหลด")
      .should("have.attr", "href", "/download/osx")
      .click();
  });

  it("Download : download for IOS and Androin > Itunes Store", async () => {
    await cy
      .get('[href="/download/ios"]')
      .contains(" Itunes Store")
      .should("have.attr", "href", "/download/ios")
      .click();
  });

  it("Download : download for IOS and Androin > Play Store", async () => {
    await cy
      .get('[href="/download/android"]')
      .contains(" Play Store")
      .should("have.attr", "href", "/download/android")
      .click();
  });
});

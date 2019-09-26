/// <reference types = 'cypress'/>

const urlMain = "https://www.goonvpn.com/";
const urlPrice = "https://www.goonvpn.com/price";
describe("Work flow : Price and package", () => {
  it("Go to Price and package.", () => {
    cy.visit(urlPrice);
  });
});
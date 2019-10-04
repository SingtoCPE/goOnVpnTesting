Cypress.Commands.add("beforeEachInstruction", () => {
  cy.setCookie(
    "_identity",
    "14bd1e44832aa71ac1555d838164fce36e7ea3b812e9155d148c2ef8d0d1f3aca%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B57856%2C%22ptrcRZnG37LiJnIATMxs5QV5O6CXCGE7%22%2C2592000%5D%22%3B%7D"
  );
  cy.visit(Cypress.env("URLMAIN")).wait(500);
  cy.url().should("include", "/");
  cy.get('[class="dropdown-toggle"]')
    .contains("วิธีใช้ ")
    .click();
});

// loop ---
Cypress.Commands.add("loopProgramInstuction", () => {
  const path = [
    "/pages/use-go-connect",
    "/pages/use-softether",
    "/pages/use-tunnelblick",
    "/pages/install-openvpn-connect-ios",
    "/pages/install-openvpn-connect-android"
  ];

  const program = [
    " GO Connect",
    " Softether VPN Client",
    " Tunnelblick สำหรับ Mac",
    " iPhone, iPad",
    " Android"
  ];

  for (let i = 0; i < path.length; i++) {
    cy.get('[class="dropdown-submenu"]')
      .contains("วิธีใช้งานโปรแกรม")
      .click();
    cy.get(`#w3 > li.dropdown-submenu > ul > li:nth-child(${i + 1}) > a`)
      .contains(program[i])
      .click({ force: true });
    cy.url().should("include", `${path[i]}`);
    cy.beforeEachInstruction(); //commands
  }
});

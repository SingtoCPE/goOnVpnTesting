/// <reference types = 'cypress'/>

describe("Work flow : Installation", () => {
  beforeEach("Go to Installation.", () => {
    cy.beforeEachInstallation();
  });

  it("Installation : โปรแกรม GO Connect", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("โปรแกรม GO Connect")
      .should("have.attr", "href", "/pages/install-go-connect")
      .click();
    cy.get('[class="sub-link"]')
      .contains(" ดาวน์โหลด GO Connect")
      .should("have.attr", "href", "/get-client")
      .click();
    cy.get('[class="sub-link"]')
      .contains(" วิธีใช้งาน GO Connect")
      .should("have.attr", "href", "/pages/use-go-connect")
      .click();
  });

  it("Installation : โปรแกรม Softether VPN Client > วิธีติดตั้ง", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("โปรแกรม Softether VPN Client")
      .click();
    cy.get("#w2 > li.dropdown-submenu > ul > li:nth-child(1) > a")
      .contains(" วิธีติดตั้ง")
      .should("have.attr", "href", "/pages/install-softether")
      .click({ force: true });
    cy.url().should("eq", "https://www.goonvpn.com/pages/install-softether");
    cy.get('[class="sub-link"]')
      .contains(" วิธีการอัพเดทรายการเซิฟเวอร์")
      .should("have.attr", "href", "/pages/update-softether")
      .click();
    cy.url().should("eq", "https://www.goonvpn.com/pages/update-softether");
  });

  it("Installation : โปรแกรม Softether VPN Client > วิธีอัพเดทเซิฟเวอร์", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("โปรแกรม Softether VPN Client")
      .click();
    cy.get("#w2 > li.dropdown-submenu > ul > li:nth-child(2) > a")
      .contains(" วิธีอัพเดทเซิฟเวอร์")
      .should("have.attr", "href", "/pages/update-softether")
      .click({ force: true });
    cy.url().should("eq", "https://www.goonvpn.com/pages/update-softether");
  });

  it("Installation : โปรแกรม Tunnelblick สำหรับ Mac", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("โปรแกรม Tunnelblick สำหรับ Mac")
      .should("have.attr", "href", "/pages/install-tunnelblick")
      .click();
    cy.url().should("eq", "https://www.goonvpn.com/pages/install-tunnelblick");
    cy.get('[class="sub-link"]')
      .contains(" ดาวน์โหลด Tunnelblick")
      .should("have.attr", "href", "/get-client")
      .click();
    cy.url().should("eq", "https://www.goonvpn.com/pages/install-tunnelblick");
    cy.get('[class="btn btn-lg border-theme"]')
      .contains(" ดูวิธีการใช้งาน Tunnelblick กันต่อเลย")
      .should("have.attr", "href", "/pages/use-tunnelblick")
      .click();
    cy.url().should("eq", "https://www.goonvpn.com/pages/use-tunnelblick");
  });

  it("Installation : OpenVPN Connect สำหรับ iPhone, iPad", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("OpenVPN Connect สำหรับ iPhone, iPad")
      .should("have.attr", "href", "/pages/install-openvpn-connect-ios")
      .click();
    cy.url().should(
      "eq",
      "https://www.goonvpn.com/pages/install-openvpn-connect-ios"
    );
    cy.get('[class="sub-link"]')
      .contains(" ดาวน์โหลด")
      .should("have.attr", "href", "/get-client")
      .click();
  });

  it("Installation : OpenVPN Connect สำหรับ Android", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("OpenVPN Connect สำหรับ Android")
      .should("have.attr", "href", "/pages/install-openvpn-connect-android")
      .click();
    cy.url().should(
      "eq",
      "https://www.goonvpn.com/pages/install-openvpn-connect-android"
    );
    cy.get('[class="sub-link"]')
      .contains(" ดาวน์โหลด")
      .should("have.attr", "href", "/get-client")
      .click();
  });
});

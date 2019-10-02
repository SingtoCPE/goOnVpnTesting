/// <reference types = 'cypress'/>

describe("Work flow : Installation", () => {
  beforeEach("Go to Installation.", () => {
    cy.beforeEachInstallation(); //commands
  });

  it("Work flow : Installation > โปรแกรม GO Connect", () => {
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

  it("Work flow : Installation > โปรแกรม Softether VPN Client > วิธีติดตั้ง", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("โปรแกรม Softether VPN Client")
      .click();
    cy.visit("https://www.goonvpn.com/pages/install-softether");
    cy.url().should("include", "/pages/install-softether");
    cy.get('[class="sub-link"]')
      .contains(" วิธีการอัพเดทรายการเซิฟเวอร์")
      .should("have.attr", "href", "/pages/update-softether")
      .click();
  });

  it("Work flow : Installation > โปรแกรม Softether VPN Client > วิธีอัพเดทเซิฟเวอร์", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("โปรแกรม Softether VPN Client")
      .click();
    cy.visit("https://www.goonvpn.com/pages/update-softether#");
    cy.url().should("include", "/pages/update-softether#");
  });

  it("Work flow : Installation > โปรแกรม Softether VPN Client > โปรแกรม Tunnelblick สำหรับ Mac", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("โปรแกรม Tunnelblick สำหรับ Mac")
      .should("have.attr", "href", "/pages/install-tunnelblick")
      .click();
    cy.get('[class="sub-link"]')
      .contains(" ดาวน์โหลด Tunnelblick")
      .should("have.attr", "href", "/get-client")
      .click();
    cy.get('[class="btn btn-lg border-theme"]')
      .contains(" ดูวิธีการใช้งาน Tunnelblick กันต่อเลย")
      .should("have.attr", "href", "/pages/use-tunnelblick")
      .click();
    cy.url().should("include", "/pages/use-tunnelblick");
  });

  it("Work flow : Installation > โปรแกรม Softether VPN Client > OpenVPN Connect สำหรับ iPhone, iPad", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("OpenVPN Connect สำหรับ iPhone, iPad")
      .should("have.attr", "href", "/pages/install-openvpn-connect-ios")
      .click();
    cy.get('[class="sub-link"]')
      .contains(" ดาวน์โหลด")
      .should("have.attr", "href", "/get-client")
      .click();
  });

  it("Work flow : Installation > โปรแกรม Softether VPN Client > OpenVPN Connect สำหรับ Android", () => {
    cy.get('[class="dropdown-menu"]')
      .contains("OpenVPN Connect สำหรับ Android")
      .should("have.attr", "href", "/pages/install-openvpn-connect-android")
      .click();
    cy.get('[class="sub-link"]')
      .contains(" ดาวน์โหลด")
      .should("have.attr", "href", "/get-client")
      .click();
  });
});

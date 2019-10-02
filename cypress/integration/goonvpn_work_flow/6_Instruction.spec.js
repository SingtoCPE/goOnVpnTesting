/// <reference types = 'cypress'/>

describe("Work flow : Instruction", () => {
  beforeEach("Go to Instruction.", () => {
    cy.beforeEachInstruction(); //commands
  });

  it('Work flow : Instruction > วิธีใช้ > GO Connect', () => {
    cy.get('[class="dropdown-submenu"]')
      .contains('วิธีใช้งานโปรแกรม')
      .click()
    cy.visit('https://www.goonvpn.com/pages/use-go-connect')
    cy.url().should('include','/pages/use-go-connect')
  })

  it('Work flow : Instruction > วิธีใช้ > Softether VPN Client', () => {
    cy.get('[class="dropdown-submenu"]')
      .contains('วิธีใช้งานโปรแกรม')
      .click()
    cy.visit('https://www.goonvpn.com/pages/use-softether')
    cy.url().should('include','/pages/use-softether')
  })

  it('Work flow : Instruction > วิธีใช้ > Tunnelblick สำหรับ Mac', () => {
    cy.get('[class="dropdown-submenu"]')
      .contains('วิธีใช้งานโปรแกรม')
      .click()
    cy.visit('https://www.goonvpn.com/pages/use-tunnelblick')
    cy.url().should('include','/pages/use-tunnelblick')
  })

  it('Work flow : Instruction > วิธีใช้ > iPhone, iPad', () => {
    cy.get('[class="dropdown-submenu"]')
      .contains('วิธีใช้งานโปรแกรม')
      .click()
    cy.visit('https://www.goonvpn.com/pages/install-openvpn-connect-ios')
    cy.url().should('include','/pages/install-openvpn-connect-ios')
  })

  it('Work flow : Instruction > วิธีใช้ > Android', () => {
    cy.get('[class="dropdown-submenu"]')
      .contains('วิธีใช้งานโปรแกรม')
      .click()
    cy.visit('https://www.goonvpn.com/pages/install-openvpn-connect-android')
    cy.url().should('include','/pages/install-openvpn-connect-android')
  })

  it("Work flow : Instruction > วิธีแจ้งโอนเงิน", () => {
    cy.get("#w3 > :nth-child(2) > a")
      .contains("วิธีแจ้งโอนเงิน")
      .click()
      .should("have.attr", "href", "/pages/how-to-transfer");
    cy.url().should("include", "/pages/how-to-transfer");
  });

  it("Work flow : Instruction > วิธีเติม GP ผ่านทรูมันนี่", () => {
    cy.get("#w3 > :nth-child(3) > a")
      .contains("วิธีเติม GP ผ่านทรูมันนี่")
      .click()
      .should("have.attr", "href", "/pages/how-to-truemoney");
    cy.url().should("include", "/pages/how-to-truemoney");
  });

  it("Work flow : Instruction > วิธีเติม GP ผ่าน PayPal", () => {
    cy.get("#w3 > :nth-child(4) > a")
      .contains("วิธีเติม GP ผ่าน PayPal")
      .click()
      .should("have.attr", "href", "/pages/how-to-paypal");
    cy.url().should("include", "/pages/how-to-paypal");
  });

  it("Work flow : Instruction > วิธีเติมวันใช้งาน", () => {
    cy.get("#w3 > :nth-child(5) > a")
      .contains("วิธีเติมวันใช้งาน")
      .should("have.attr", "href", "/pages/how-to-airtime")
      .click();
    cy.url().should("include", "/pages/how-to-airtime");
  });
});

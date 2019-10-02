/// <reference types = 'cypress'/>

describe("Work flow : Instruction", () => {
  beforeEach("Go to Instruction.", () => {
    cy.beforeEachInstruction(); //commands
  });
  
  // it('Work flow : Instruction > วิธีใช้ > GO Connect', () => {
  //   cy.get('[class="dropdown-submenu"]')
  //     .contains('วิธีใช้งานโปรแกรม')
  //     .click()
  //   cy.visit('https://www.goonvpn.com/pages/use-go-connect')
  //   cy.url().should('include','/pages/use-go-connect')
  // })

  // it('Work flow : Instruction > วิธีใช้ > Softether VPN Client', () => {
  //   cy.get('[class="dropdown-submenu"]')
  //     .contains('วิธีใช้งานโปรแกรม')
  //     .click()
  //   cy.visit('https://www.goonvpn.com/pages/use-softether')
  //   cy.url().should('include','/pages/use-softether')
  // })

  // it('Work flow : Instruction > วิธีใช้ > Tunnelblick สำหรับ Mac', () => {
  //   cy.get('[class="dropdown-submenu"]')
  //     .contains('วิธีใช้งานโปรแกรม')
  //     .click()
  //   cy.visit('https://www.goonvpn.com/pages/use-tunnelblick')
  //   cy.url().should('include','/pages/use-tunnelblick')
  // })

  // it('Work flow : Instruction > วิธีใช้ > iPhone, iPad', () => {
  //   cy.get('[class="dropdown-submenu"]')
  //     .contains('วิธีใช้งานโปรแกรม')
  //     .click()
  //   cy.visit('https://www.goonvpn.com/pages/install-openvpn-connect-ios')
  //   cy.url().should('include','/pages/install-openvpn-connect-ios')
  // })

  // it('Work flow : Instruction > วิธีใช้ > Android', () => {
  //   cy.get('[class="dropdown-submenu"]')
  //     .contains('วิธีใช้งานโปรแกรม')
  //     .click()
  //   cy.visit('https://www.goonvpn.com/pages/install-openvpn-connect-android')
  //   cy.url().should('include','/pages/install-openvpn-connect-android')
  // })
})
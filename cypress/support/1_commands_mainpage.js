Cypress.Commands.add("beforeEachMainpage", () => {
  cy.clearCookies();
  cy.visit(Cypress.env("URLMAIN"))
    .contains("หน้าแรก")
    .wait(500);
  cy.url().should("eq", "https://www.goonvpn.com/");
});

Cypress.Commands.add("loopWallpaperMenuTab", () => {
  const btn = ["btn btn-slide signup", "btn btn-slide ", "btn btn-slide"];
  const path = ["/signup", "/game-reviews", "/pages/introduce-gp"];
  const contains = [
    " สมัครสมาชิก",
    " รายชื่อเกมส์ที่รองรับ",
    "ข้อดีของระบบ GP"
  ];
  for (let i = 0; i < btn.length; i++) {
    cy.get('[class="flex-control-nav flex-control-paging"]')
      .contains(i + 1)
      .click();
    cy.get(`[class='${btn[i]}']`)
      .should("have.attr", "href", path[i])
      .and("contain.text", contains[i])
      .click();
    cy.url().should("include", path[i]);
    cy.visit(Cypress.env("URLMAIN"));
  }
});

Cypress.Commands.add("loopFooterTab", () => {
  const text = [
    " ตรวจสอบไอพี",
    " วิธีแจ้งโอนเงิน",
    " วิธีเติม GP ด้วยทรูมันนี่",
    " วิธีการเติมวัน",
    " ตอบ-ถามปัญหาการใช้งาน",
    " Blog & Feature"
  ];
  const path = [
    "/check-ip",
    "/pages/how-to-transfer",
    "/pages/how-to-truemoney",
    "/pages/how-to-airtime",
    "/support",
    "/blogs"
  ];
  for (let i = 0; i < text.length; i++) {
    cy.get("footer");
    cy.get(`.list-unstyled > :nth-child(${i + 1}) > a`)
      .should("have.attr", "href", path[i])
      .and("contain.text", text[i])
      .click();
    cy.url().should("include", path[i]);
    cy.visit(Cypress.env("URLMAIN"));
  }
});

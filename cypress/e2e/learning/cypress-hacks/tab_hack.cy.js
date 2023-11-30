describe("Tab hack checks", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com/");
  });
  it("Modify tab to open in same screen", () => {
    // ! toto nebude fungovat, otevře se v nové záložce/okně: cy.get("#contact-us").click();
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('input[name="first_name"]').type("Petr");
  });
});

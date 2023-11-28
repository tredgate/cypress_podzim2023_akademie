describe("Base URL Tests", () => {
  it("Using baseUrl in visit", () => {
    cy.visit("/");
  });

  it("Open different url than baseUrl", () => {
    cy.visit("https://tredgate.cz");
  });
});

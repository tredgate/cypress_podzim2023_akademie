import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha Tests", () => {
  beforeEach(() => {
    cy.viewport(800, 600);
    cy.log("Běžím před každým testem.");
  });

  it("Visit pmtool", () => {
    new LoginPage().openPmtool();
  });

  it("Visit pmtool and login", () => {
    new LoginPage()
      .openPmtool()
      .typePassword("CypressPodzim")
      .typeUsername("cy_podzim_2023")
      .clickLogin();
  });

  afterEach(() => {
    cy.log("Běžím po doběhnutí každého testu.");
  });
});

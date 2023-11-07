import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Login header has text 'Login'", () => {
    cy.get("h3.form-title").should("have.text", "Login");
  });

  // ! Failing
  it.skip("Login header has text Login2", () => {
    cy.get("h3.form-title").should("have.text", "Login2");
  });

  it("Forgotten password link has correct text", () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it("Username input has value testUsername after type", () => {
    cy.get("#username")
      .type("testUsername")
      .should("have.value", "testUsername");
  });

  it("Lost password email input has value testmail@example.com after type", () => {
    new LoginPage().clickPasswordForgotten().typeEmail("testmail@example.com");
    cy.get(":nth-child(3) > .input-icon > .form-control").should(
      "have.value",
      "testmail@example.com"
    );
  });

  it("Username input has form-control class", () => {
    cy.get("#username").should("have.class", "form-control");
  });

  it("Login button has class btn-info", () => {
    cy.get(".btn").should("have.class", "btn-info");
  });

  it("Login button is visible", () => {
    cy.get(".btn").should("be.visible");
  });

  it("Application header is visible", () => {
    new LoginPage()
      .typePassword("CypressPodzim")
      .typeUsername("cy_podzim_2023")
      .clickLogin();
    cy.get(".navbar-brand").should("be.visible");
  });

  it("Login button exist", () => {
    cy.get(".btn").should("exist");
  });

  it("Password Forgotten link exist", () => {
    cy.get("#forget_password").should("exist");
  });

  it("Username input should have placeholder 'Username'", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it("Password input should have placeholder 'Password'", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });
});

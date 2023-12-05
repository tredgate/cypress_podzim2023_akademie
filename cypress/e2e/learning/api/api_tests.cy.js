describe("Api Display Tests", () => {
  it("Check Login APIs", () => {
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
  });

  it("Basic Intercept Test", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
  });

  it("Wait for Login", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api");
  });

  it("Login Api has POST request method", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api").its("request.method").should("eq", "POST");
  });

  it("Login Api has status 201", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api").its("response.statusCode").should("eq", 201);
  });

  it("access_token is present in login api json body", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api").its("response.body.access_token").should("exist");
  });

  it.only("Mock get Account API", () => {
    cy.intercept("/accounts/user/**", { fixture: "mock_accounts.json" }).as(
      "account_api"
    );
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.get('[data-testid="accounts_section_link"]').click();
  });
});

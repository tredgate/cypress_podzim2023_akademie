import { DashboardPage } from "./dashboard_page";

export class LoginPage {
  constructor() {
    this.tegbUrl = "http://localhost:3001";
    this.usernameInput = '[data-testid="username"]';
    this.passwordInput = '[data-testid="password"]';
    this.loginButton = '[data-testid="log_in"]';
    cy.intercept("/auth/login").as("login_api");
    cy.intercept("/accounts/user/*").as("accounts_user");
  }

  openTegB() {
    cy.visit(this.tegbUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }
}

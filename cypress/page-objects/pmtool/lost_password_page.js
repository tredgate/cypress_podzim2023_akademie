import { LoginPage } from "./login_page";

export class LostPasswordPage {
  constructor() {
    this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
    this.emailInput = ":nth-child(3) > .input-icon > .form-control";
    this.backButton = "#back-btn";
    this.sendButton = ".btn-info";
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  clickBack() {
    cy.get(this.backButton).click();
    return new LoginPage();
  }

  clickSend() {
    cy.get(this.sendButton).click();
    return new LoginPage();
  }
}

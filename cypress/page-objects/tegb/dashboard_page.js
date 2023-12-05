import { AccountsPage } from "./accounts_page";

export class DashboardPage {
  constructor() {
    this.accountsButton = '[data-testid="accounts_section_link"]';
  }

  waitForLoginApi() {
    cy.wait("@login_api");
    return this;
  }

  clickAccounts() {
    cy.get(this.accountsButton).click();
    return new AccountsPage();
  }
}

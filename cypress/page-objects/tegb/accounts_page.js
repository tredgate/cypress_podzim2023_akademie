export class AccountsPage {
  constructor() {
    this.accountsTitle = '[data-testid="title"]';
  }

  waitForAccountsLoad() {
    cy.wait("@accounts_user");
    return this;
  }

  titleHasText(titleText) {
    cy.get(this.accountsTitle).should("have.text", titleText);
    return this;
  }
}

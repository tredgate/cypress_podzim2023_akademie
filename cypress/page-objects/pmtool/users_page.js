import { HeaderSection } from "./header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.page_title = "h3.page-title";
    this.addUserButton = 'button[test_id="Add User"]';
  }

  pageTitleIsVisible() {
    cy.get(this.page_title).should("be.visible");
    return this;
  }

  pageTitleHasText(text) {
    cy.get(this.page_title).should("have.text", text);
    return this;
  }

  addUserButtonIsVisible() {
    cy.get(this.addUserButton).should("be.visible");
    return this;
  }

  addUserButtonHasText(text) {
    cy.get(this.addUserButton).should("have.text", text);
    return this;
  }
}

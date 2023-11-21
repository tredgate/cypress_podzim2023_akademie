import { LoginPage } from "./login_page";
import { MenuSection } from "./menu_sections";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.logoffButton = "#logout > a";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogoff() {
    cy.get(this.logoffButton).click();
    return new LoginPage();
  }
}

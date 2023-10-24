import { LoginPage } from "./login_page";

export class HomePage {
  constructor() {
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

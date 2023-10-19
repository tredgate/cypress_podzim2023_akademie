export class HomePage {
  constructor() {
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.logoffButton = "#logout > a";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
  }

  clickLogoff() {
    cy.get(this.logoffButton).click();
  }
}

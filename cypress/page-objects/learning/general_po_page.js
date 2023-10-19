export class GeneralPoPage {
  constructor() {
    this.someElementSelector = "#selector";
  }

  someMethod() {
    cy.get(this.someElementSelector).click();
  }
}

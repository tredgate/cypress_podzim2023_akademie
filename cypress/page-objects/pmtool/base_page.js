export class BasePage {
  constructor(path) {
    this.baseUrl = "http://tredgate.com/pmtool/index.php?";
    this.path = path;
  }

  visit() {
    const finalUrl = this.baseUrl + this.path;
    cy.log(`Opening page: ${finalUrl}`);
    cy.visit(finalUrl);
    return this;
  }
}

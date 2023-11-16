import { HeaderSection } from "./header_section";

export class ProjectInfoPage extends HeaderSection {
  constructor() {
    super();
    this.projectTitle = ".portlet-title .caption";
    this.statusDiv = ".check-form-tabs .form-group-157 div";
    this.startDateTd = ".check-form-tabs .form-group-159 td";
    this.addedDateTd = ".check-form-tabs .form-group-154 td";
    this.createdByTd = ".check-form-tabs .form-group-155 td";
  }

  projectTitleHasText(projectTitle) {
    cy.get(this.projectTitle).should("contain.text", projectTitle);
    return this;
  }

  statusHasText(statusText) {
    cy.get(this.statusDiv).should("have.text", statusText);
    return this;
  }

  startDateHasText(startDateText) {
    cy.get(this.startDateTd).should("have.text", startDateText);
    return this;
  }

  addedDateContainText(addedDateText) {
    cy.get(this.addedDateTd).should("contain.text", addedDateText);
    return this;
  }

  createdByHasText(author) {
    cy.get(this.createdByTd).should("have.text", author);
    return this;
  }
}

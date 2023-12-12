import { TasksPage } from "./tasks_page";

export class CreateProjectModal {
  constructor() {
    this.prioritySelect = "div[data-testid='Priority'] select";
    this.statusSelect = "div[data-testid='Status'] select";
    this.nameInput = "div[data-testid='Name'] input";
    this.startDateInput = "div[data-testid='Start Date'] input";
    this.fileUpload = "input[type='file'][data-msg-accept]";
    this.saveButton = ".modal-footer .btn-primary";
    this.descriptionIframe = "iframe[tabindex]";
  }

  selectPriority(priority) {
    cy.get(this.prioritySelect).select(priority);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  typeProjectName(projectName) {
    cy.get(this.nameInput).type(projectName);
    return this;
  }

  typeStartDate(startDate) {
    cy.get(this.startDateInput).type(startDate);
    return this;
  }

  // ! Musí být nastavený alias uploadFile v testu
  insertFileToUpload() {
    cy.get(this.fileUpload).selectFile("@uploadFile", { force: true });
    cy.wait(500);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new TasksPage();
  }

  typeDescription(description) {
    cy.get(this.descriptionIframe).then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").type(description);
    return this;
  }
}

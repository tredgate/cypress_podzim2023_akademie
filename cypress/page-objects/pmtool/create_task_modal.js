import { ProjectInfoPage } from "./project_info_page";
import { TasksPage } from "./tasks_page";

export class CreateTaskModal {
  constructor() {
    this.typeSelect = 'div[data-testid="Type"] select';
    this.nameInput = 'div[data-testid="Name"] input';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.saveButton = 'button[type="submit"]';
  }

  selectType(type) {
    cy.get(this.typeSelect).select(type);
    return this;
  }

  typeName(name) {
    cy.get(this.nameInput).type(name);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new TasksPage();
  }
}

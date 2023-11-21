import { CreateProjectModal } from "./create_project_modal";
import { HeaderSection } from "./header_section";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProjectButton = "button[test_id='Add Project']";
    this.projectsTable = ".table-bordered";
    cy.get(this.projectsTable).should("be.visible");
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return new CreateProjectModal();
  }
}

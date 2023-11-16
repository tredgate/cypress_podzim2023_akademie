import { CreateTaskModal } from "./create_task_modal";
import { HeaderSection } from "./header_section";
import { ProjectInfoPage } from "./project_info_page";

export class TasksPage extends HeaderSection {
  constructor() {
    super();
    this.addTaskButton = 'button[test_id="Add Task"]';
    this.projectInfoButton = ".navbar-header .navbar-brand";
  }

  clickAddTask() {
    cy.get(this.addTaskButton).click();
    return new CreateTaskModal();
  }

  clickProjectInfo() {
    cy.get(this.projectInfoButton).click();
    return new ProjectInfoPage();
  }
}

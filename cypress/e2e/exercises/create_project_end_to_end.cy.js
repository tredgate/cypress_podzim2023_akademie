import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";

describe("PMTool E2E Project test", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .openProjects();
  });
  it("Create Project and Task in PMTool", () => {
    const todayDate = "2023-11-16";
    const todayDateProjectInfo = "16/11/2023";
    const randomInt = faker.number.int({ max: 9999 });
    const projectName = `FIFKA_self-exercise_${randomInt}`;
    cy.fixture("test.txt", { encoding: null }).as("uploadFile");
    const taskName = "FIFKA_TASK_" + faker.number.int({ max: 9999 });

    new ProjectsPage()
      .clickAddProject()
      .selectPriority("High")
      .selectStatus("Open")
      .typeProjectName(projectName)
      .typeStartDate(todayDate)
      .insertFileToUpload()
      .clickSave()
      .clickAddTask()
      .selectStatus("Open")
      .selectType("Change")
      .typeName(taskName)
      .clickSave()
      .clickProjectInfo()
      .projectTitleHasText(projectName)
      .createdByHasText("Treducation Gate")
      .addedDateContainText(todayDateProjectInfo)
      .startDateHasText(todayDateProjectInfo)
      .statusHasText("Open");
  });
});

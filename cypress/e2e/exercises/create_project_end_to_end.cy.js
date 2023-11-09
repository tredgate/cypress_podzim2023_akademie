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
    const todayDate = "2023-11-09";
    const randomInt = faker.number.int({ max: 9999 });
    const projectName = `FIFKA_self-exercise_${randomInt}`;
    cy.fixture("test.txt", { encoding: null }).as("uploadFile");

    new ProjectsPage()
      .clickAddProject()
      .selectPriority("High")
      .selectStatus("Open")
      .typeProjectName(projectName)
      .typeStartDate(todayDate)
      .insertFileToUpload();
  });
});

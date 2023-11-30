import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Keyboard arguments", () => {
  it("Confirm form by pressing enter key", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(`${Cypress.env("pmtool_password")}{enter}`)
      .clickProjects();
    // Cypress.env('pmtool_password') + '{enter}'
  });
});

import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe("Users page atomic tests", { testIsolation: false }, () => {
  before(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();

    //využíváme basepage visit pro přímé otevření
    new UsersPage().visit();
  });

  context("Title Tests", () => {
    it("Title is visible", () => {
      new UsersPage().pageTitleIsVisible();
    });

    it("Title have Text", () => {
      new UsersPage().pageTitleHasText("Users");
    });
  });

  context("Add User Button Tests", () => {
    it("Add User Button is visible", () => {
      new UsersPage().addUserButtonIsVisible();
    });

    it("Add User Button have Text", () => {
      new UsersPage().addUserButtonHasText("Add User");
    });
  });
});

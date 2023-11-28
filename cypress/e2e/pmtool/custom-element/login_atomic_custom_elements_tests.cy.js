import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe(
  "Login Page atomic tests with custom elements",
  { testIsolation: false },
  () => {
    before(() => {
      new LoginPage().openPmtool();
    });

    context("Username input tests", () => {
      it("Username is visible", () => {
        new LoginPage().usernameInput.isVisible();
      });
      it("Username has placeholder", () => {
        new LoginPage().usernameInput.hasPlaceholder("Username");
      });
      it("Username has value after type", () => {
        const username = "TEST123";
        new LoginPage().typeUsername(username).usernameInput.hasValue(username);
      });
    });
  }
);

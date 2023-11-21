import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Login Page Atomic Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  context("Username input tests", () => {
    it("Username has placeholder", () => {
      new LoginPage().usernameHasPlaceholder("Username");
    });

    it("Username is visible", () => {
      new LoginPage().usernameIsVisible();
    });

    it("Username has value after type", () => {
      const usernameValue = "Test123";
      new LoginPage()
        .typeUsername(usernameValue)
        .usernameHasValue(usernameValue);
    });
  });

  context("Password Input Tests", () => {
    it("Password input is visible", () => {
      new LoginPage().passwordIsVisible();
    });

    it("Password has Placeholder", () => {
      new LoginPage().passwordHasPlaceholder("Password");
    });
  });

  context("Page Header Tests", () => {
    it("Page Header is visible", () => {
      new LoginPage().pageHeaderIsVisible();
    });

    it("Page Header has text", () => {
      new LoginPage().pageHeaderHasText("Login");
    });
  });

  context("Lost Password Anchor Tests", () => {
    it("Lost password anchor is visible", () => {
      new LoginPage().passwordForgottenIsVisible();
    });
  });

  context("Remember Me Checkbox Tests", () => {
    it("Remember Me Checkbox is visible", () => {
      new LoginPage().rememberMeIsVisible();
    });

    it("Remember Me Checkbox has text", () => {
      new LoginPage().rememberMeHasText("Remember Me");
    });
  });
});

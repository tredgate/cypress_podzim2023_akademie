import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Lost password tests", () => {
  it("Lost password E2E test", () => {
    new LoginPage()
      .openPmtool()
      .clickPasswordForgotten()
      .typeUsername("lost_password_user")
      .typeEmail("lost_password@tredgate.cz")
      .clickSend();
  });

  it("Open Forgotten Password page and return back Test", () => {
    new LoginPage().openPmtool().clickPasswordForgotten().clickBack();
  });
});

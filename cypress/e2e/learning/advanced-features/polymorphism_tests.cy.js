import { HomePage } from "../../../page-objects/pmtool/home_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  it("Logout via polymorphism", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("pw_skoleni")
      .typePassword("TEG2023")
      .clickLogin()
      .clickProfile()
      .clickLogoff();
  });

  it("Open Projects and logout", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("pw_skoleni")
      .typePassword("TEG2023")
      .clickLogin()
      .openProjects()
      .clickProfile()
      .clickLogoff();
  });
});

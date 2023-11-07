import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .typeUsername("cy_podzim_2023")
      .typePassword("CypressPodzim")
      .clickLogin()
      .clickProfile()
      .clickLogoff();
  });

  it("Open and close forgotten password page", () => {
    new LoginPage().clickPasswordForgotten().clickBack();
  });
});

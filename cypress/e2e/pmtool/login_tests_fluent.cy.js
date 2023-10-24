import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cy_podzim_2023")
      .typePassword("CypressPodzim")
      .clickLogin()
      .clickProfile()
      .clickLogoff();
  });
});

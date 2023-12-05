import { LoginPage } from "../../page-objects/tegb/login_page";

describe("TEG#B Login Tests", () => {
  it("Login to TEG#B", () => {
    new LoginPage()
      .openTegB()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});

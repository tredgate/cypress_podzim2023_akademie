import { LoginPage } from "../../page-objects/tegb/login_page";

describe("TEG#B Accounts Tests", () => {
  it("Open Accounts and check title text", () => {
    new LoginPage()
      .openTegB()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .waitForLoginApi()
      .clickAccounts()
      .waitForAccountsLoad()
      .titleHasText("Account");
  });
});

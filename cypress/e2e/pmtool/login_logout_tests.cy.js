import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login and Logout Tests", () => {
  it("Login to pmtool", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("cy_podzim_2023");
    loginPage.typePassword("CypressPodzim");
    loginPage.clickLogin();
  });

  it("Login and Logout test", () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    loginPage.openPmtool();
    loginPage.typeUsername("cy_podzim_2023");
    loginPage.typePassword("CypressPodzim");
    loginPage.clickLogin();
    homePage.clickProfile();
    homePage.clickLogoff();
  });
});

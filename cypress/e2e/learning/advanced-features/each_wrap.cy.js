import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Using Each and Wrap function", () => {
  //   beforeEach(() => {
  //     new LoginPage()
  //       .openPmtool()
  //       .typeUsername("pw_skoleni")
  //       .typePassword("TEG2023")
  //       .clickLogin()
  //       .openProjects();
  //   });
  it.skip("Checking if all rows in Project table has actions delete and edit", () => {
    cy.get("tbody .listing-table-tr").each((row) => {
      // ! špatně !
      // ! row.should("be.visible");
      // ! špatně !
      // ! cy.get(row).should("be.visible");

      cy.wrap(row).should("be.visible");
    });
  });

  it("Check users_table rows has id visible", () => {
    cy.visit("http://tredgate.com/webtrain/");
    cy.get("#users_table > tbody > tr").each((row) => {
      cy.wrap(row).should("be.visible");
      cy.wrap(row).within(() => {
        cy.get("#id").should("be.visible");
      });
    });
  });
});

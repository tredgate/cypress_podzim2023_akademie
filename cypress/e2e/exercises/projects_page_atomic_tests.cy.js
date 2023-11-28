import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";

describe("Projects Page Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new ProjectsPage().visit();
  });

  context("Filters Table Tests", () => {
    it("Filters section is visible", () => {
      new ProjectsPage().filtersTableBody.isVisible();
    });

    it("Hide filters section, it is not visible", () => {
      new ProjectsPage().clickFiltersHeader().filtersTableBody.isNotVisible();
      new ProjectsPage().clickFiltersHeader();
    });

    it("Filters title is visible", () => {
      new ProjectsPage().filtersTableHeader.isVisible();
    });

    it("Filters title has text", () => {
      new ProjectsPage().filtersTableHeader.containsText("Applied Filters");
    });

    it("Dropdown menu is visible", () => {
      new ProjectsPage().filtersDropdownMenu.isVisible();
    });

    it("Context menu is opened after dropdown menu click", () => {
      new ProjectsPage().clickDropdownMenu().openedContextMenu.isVisible();
    });

    it("Add filter menu button is visible", () => {
      new ProjectsPage().addFilterMenu.isVisible();
    });

    it("Context menu is opened after add filter button click", () => {
      new ProjectsPage().clickAddFilterMenu().addFilterMenu.isVisible();
    });
  });

  context("Projects action elements tests", () => {
    it("Add Project button is visible", () => {
      new ProjectsPage().addProjectButton.isVisible();
    });

    it("With Selected button is visible", () => {
      new ProjectsPage().withSelectedButton.isVisible();
    });

    it("Upload button is visible", () => {
      new ProjectsPage().uploadAnchor.isVisible();
    });

    it("Search input is visible", () => {
      new ProjectsPage().searchInput.isVisible();
    });

    it("Search button is visible", () => {
      new ProjectsPage().searchButton.isVisible();
    });

    it("Add Project button has text", () => {
      new ProjectsPage().addProjectButton.hasText("Add Project");
    });

    it("With Selected has text", () => {
      new ProjectsPage().withSelectedButton.containsText("With Selected");
    });

    it("Search input has Placeholder", () => {
      new ProjectsPage().searchInput.hasAttribute("placeholder", "Search");
    });
  });
});

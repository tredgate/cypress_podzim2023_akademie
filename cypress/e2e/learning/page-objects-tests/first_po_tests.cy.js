import { GeneralPoPage } from "../../../page-objects/learning/general_po_page";

describe("First Page Objects Tests", () => {
  it("General Page Object Init", () => {
    const firstPageObject = new GeneralPoPage();
    firstPageObject.someMethod();
  });
});

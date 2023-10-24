import { HomePage } from "../../page-objects/automationteststore/home_page";

describe("Automation Store products tests", () => {
  it("Add skinsheen bronzer to basket", () => {
    new HomePage()
      .openStore()
      .clickSkinsheenBronzerStickName()
      .typeProductQuantity(5)
      .clickAddToCart();
  });
});

export class ProductSkinsheenBronzerStickPage {
  constructor() {
    this.productQuantityInput = "#product_quantity";
    this.addToCartButton = ".cart";
  }

  typeProductQuantity(quantity) {
    cy.get(this.productQuantityInput).clear().type(quantity);
    return this;
  }

  clickAddToCart() {
    cy.get(this.addToCartButton).click();
    // TODO: dodělat return statement jakmile bude hotový page-object pro košík.
  }
}

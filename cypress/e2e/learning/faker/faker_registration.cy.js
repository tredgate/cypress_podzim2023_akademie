import { faker } from "@faker-js/faker";

describe("Using faker", () => {
  it("Generate unique data with faker", () => {
    const fullName = faker.person.fullName();
    const email = faker.internet.exampleEmail();
    const address = faker.location.streetAddress();
    cy.log("Name: " + fullName);
    cy.log("Email: " + email);
    cy.log("Address: " + address);
    cy.visit("http://tredgate.com/webtrain/registration.html");
    cy.get("#name").clear().type(fullName);
    cy.get("#email").type(email);
    cy.get("#address").type(address);
  });
});

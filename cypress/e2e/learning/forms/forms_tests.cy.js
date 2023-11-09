describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("http://tredgate.com/webtrain/registration.html");
  });

  it("Check Radio button", () => {
    cy.get("input[name='subscription']").check("basic");
    cy.get("#basic").should("be.checked");
    cy.get("#premium").should("not.be.checked");
  });

  it("Check 2 interests", () => {
    cy.get('input[name="interests[]"]').check(["sports", "reading"]);
    cy.get("#interests-sports").should("be.checked");
    cy.get("#interests-reading").should("be.checked");
    cy.get("#interests-music").should("not.be.checked");
    cy.get("#interests-travel").should("not.be.checked");
  });

  it("Check and uncheck checkbox", () => {
    cy.get('input[name="interests[]"]').check(["sports", "reading"]);
    cy.get("#interests-sports").should("be.checked");
    cy.get("#interests-reading").should("be.checked");
    cy.get('input[name="interests[]"]').uncheck("sports");
  });

  it("Clean and fill name", () => {
    cy.get("#name")
      .clear()
      .type("Petr Fifka")
      .should("have.value", "Petr Fifka");
  });

  it("Select female gender", () => {
    cy.get("#gender").select("female").should("have.value", "female");
  });

  it("Submit form", () => {
    cy.get("#myForm").submit();
    cy.get("#message-box")
      .should("be.visible")
      .should("have.text", "Form submitted successfully!");
  });

  it("Upload file", () => {
    const fileName = "/Users/petrfifka/Downloads/Kupony.png";
    cy.get("#file-upload").selectFile(fileName);
  });

  it("Upload file fixtures", () => {
    cy.fixture("test.txt", { encoding: null }).as("uploadFile");
    cy.get("#file-upload").selectFile("@uploadFile");
  });

  it.only("Type date", () => {
    cy.get("#datepicker").type("1990-05-01").should("have.value", "1990-05-01");
  });
});

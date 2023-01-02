describe("Sick Trick Wish List", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      fixture: "tricks.json",
    }).as("tricks");

    cy.visit("http://localhost:3000");
  });

  it("Should display a Title", () => {
    cy.get("h1").should("contain", "Sick Trick Wish List");
  });

  it("Should display a Form", () => {
    cy.get("form").within(() => {
      cy.get('[name="stance"]').should("contain", "Choose your Stance")
      cy.get('[name="name"]').contains("Name of Trick")
      cy.get('[name="obstacle"]').should("contain", "Choose your Obstacle")
      cy.get('[name="tutorial"]').contains("Link to Tutorial")
      cy.get('button')
    });
  });

  it("Should display trick cards", () => {
    cy.wait(3000)
    cy.get('.trick-list-container').within(() => {
      cy.get(".trick-card").eq(0).should("contain", "regular treflip").and("contain", "flat ground");
      cy.get(".trick-card").eq(1).should("contain", "switch heelflip").and("contain", "stairs");
    });
  });
});

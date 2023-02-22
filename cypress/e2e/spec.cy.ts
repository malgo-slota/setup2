describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1025, 900);
    cy.visit('http://localhost:3000')

    cy.get('nav').contains("About").click();
    cy.url().should("eq", "http://localhost:3000/about");

    // cy.get("nav").contains("Alerts").click();
    //     cy.url().should("eq", "http://localhost:3000/dashboard/alerts");
  }) 
})

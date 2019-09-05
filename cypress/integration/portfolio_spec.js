describe('portfolio page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/portfolio');
    cy.contains('portfolio');
    cy.contains('about');
    cy.contains('Sasha');
    cy.contains('Alfa-bank - App');
    cy.contains('Newstime');
    cy.contains('Y-packs');
    cy.contains('Bionit');
  });
});

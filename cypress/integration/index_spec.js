describe('Index test', () => {
  it('successfully loads and says welcome', () => {
    cy.visit('http://localhost:3000');
    cy.contains('portfolio');
    cy.contains('about');
    cy.contains('Sasha');
  });
});

describe('about page test', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/about');
    cy.contains('portfolio');
    cy.contains('about');
    cy.contains('Sasha Suslova');
  });
});

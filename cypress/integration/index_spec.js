describe('index page', () => {
  it('successfully redirects to portfolio', () => {
    cy.visit('http://localhost:3000/');
    cy.location('pathname').should('eq', '/portfolio');
  });
});

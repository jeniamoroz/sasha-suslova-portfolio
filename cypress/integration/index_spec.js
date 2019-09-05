describe('Index test', () => {
  it('successfully loads portfolio', () => {
    cy.visit('http://localhost:3000/portfolio');
    cy.contains('portfolio');
    cy.contains('about');
    cy.contains('Sasha');
    cy.contains('Alfa-bank - App');
    cy.contains('Newstime');
    cy.contains('Y-packs');
    cy.contains('Bionit');
  });
  it('successfully loads about page', () => {
    cy.visit('http://localhost:3000/about');
    cy.contains('portfolio');
    cy.contains('about');
    cy.contains('Sasha Suslova');
  });
});

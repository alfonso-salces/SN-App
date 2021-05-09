
describe('login', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
    });

    it('loads initial page', () => {
      cy.visit('/login');
      cy.get("[data-testid='sn-login-container']");
    });

    it('shows email errors if is invalid', () => {
      cy.visit('/login');
      cy.get('input[name=email]').type('emailinválido');
      cy.get('button[type=submit]').click();
      cy.contains('El campo debe ser un email.');
    });

  it('shows password errors if have less than 5 characters', () => {
    cy.visit('/login');
    cy.get('input[name=password]').type('asdf');
    cy.get('button[type=submit]').click();
    cy.contains('La contraseña debe tener una longitud mínima de 5 carácteres.');
  });

  it('dont shows password errors if have more than 5 characters', () => {
    cy.visit('/login');
    cy.get('input[name=password]').type('asdadasdas');
    cy.get('button[type=submit]').click();
    cy.contains('La contraseña debe tener una longitud mínima de 5 carácteres.').should('not.exist');
  });

  it('dont shows emails errors if is valid email', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('email@valido');
    cy.get('button[type=submit]').click();
    cy.contains('El campo debe ser un email.').should('not.exist');
  });

});

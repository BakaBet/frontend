describe('Login Tests', () => {
    beforeEach(() => {
      cy.visit('/signin');
    });
  
    it('successfully logs in with valid credentials', () => {
      cy.get('input[name="username"]').type('validUsername');
      cy.get('input[name="password"]').type('validPassword{enter}');
      cy.url().should('include', '/dashboard');
    });
  
    it('displays an error message on login failure', () => {
      cy.get('input[name="username"]').type('invalidUsername');
      cy.get('input[name="password"]').type('wrongPassword{enter}');
      cy.get('.error-message').should('be.visible').and('contain', 'Invalid username or password');
    });
  });
  
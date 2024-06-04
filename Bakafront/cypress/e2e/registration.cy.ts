let uniqueUsername;

describe('Registration Tests', () => {

    beforeEach(() => {
      const timestamp = new Date().getTime();
      uniqueUsername = `johnDoe${timestamp}`;
    });
  
    it('should register a new user successfully', () => {
      cy.visit('/register');
      cy.get('input[id="Email"]').type('user@example.com');
      cy.get('input[id="Password"]').type('Password1!');
      cy.get('input[id="ConfirmPassword"]').type('Password1!');
      cy.get('input[id="FirstName"]').type('John');
      cy.get('input[id="LastName"]').type('Doe');
      cy.get('input[id="PhoneNumber"]').type('1234567890');
      cy.get('input[id="UserName"]').type(uniqueUsername);
      cy.get('form').submit();
      cy.url().should('include', '/sportbet');
    });
});

describe('Login and Logout Tests', () => {

    beforeEach(() => {
        cy.visit('/signin');
        cy.get('input[id="userName"]').type(uniqueUsername);
        cy.get('input[id="password"]').type('Password1!');
        cy.get('form').submit();
        cy.url().should('include', '/sportbet');
    });

    it('should login successfully', () => {
        
    });

    it('should logout successfully', () => {
        cy.get('button').contains('Logout').click();
        cy.url().should('include', '/signin');
    });

});

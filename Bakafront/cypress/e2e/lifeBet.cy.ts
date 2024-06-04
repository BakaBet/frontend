describe('Life Bet Component', () => {
    it('should not allow bet creation when not logged in', () => {
      cy.visit('/lifebet'); 
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Vous devez être connecté pour créer un pari.');
      });
      // Optionally, confirm no new elements were added to the page
      cy.get('.bet-display').should('not.exist');
    });
  });
  

  
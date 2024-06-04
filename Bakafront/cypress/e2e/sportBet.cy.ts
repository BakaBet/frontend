

describe('Test des barres de recherche', () => {
    beforeEach(() => {

      cy.visit('/sportbet'); 
    });
  
    it('should ensure that at least one of the teams in each match contains the team entered', () => {
        const teamName = 'Carolina Panthers';
    
        cy.get('input[placeholder="Rechercher par équipe"]').type(teamName);

    
       
        cy.get('.bg-gray-200').then($matches => {
            cy.wrap($matches.slice(1, -1)).each(($el, index) => {
                const homeTeam = $el.find('.font-bold.text-xl').eq(0).text();
                const awayTeam = $el.find('.font-bold.text-xl').eq(1).text();
    
         
    
                expect(homeTeam.includes(teamName) || awayTeam.includes(teamName)).to.be.true;
            });
        });
        
    });
});


describe('Verify Sport Details', () => {
    it('should find sports names within match details', () => {
        const sportName = 'NFL';  

        cy.visit('/sportbet');

        cy.get('input[placeholder="Rechercher par sport"]').type(sportName);


        cy.get('.bg-gray-200').then(($matches) => {
            const filteredMatches = $matches.slice(1, -1); 

            cy.wrap(filteredMatches).each(($el) => {
                if (!$el.find('.match-details').is(':visible')) {
                    cy.wrap($el).find('.toggle-details-button').click(); 
                }

                cy.wrap($el).find('.sport-title').invoke('text').should('include', sportName);
            });
        });
    });
});


describe('Verify Date Details', () => {
    it('should find dates', () => {
        const date = '08/09/2024'; 

        cy.visit('/sportbet');

        cy.get('input[placeholder="Rechercher par date"]').type(date);

        cy.get('.bg-gray-200').then($matches => {
            const filteredMatches = $matches.slice(1, -1); 

            cy.wrap(filteredMatches).each(($el, index) => {
                if (!$el.find('.match-details').is(':visible')) {
                    cy.wrap($el).find('.toggle-details-button').click(); 
                }

                cy.wrap($el).find('.commence-time').invoke('text').should('include', date);
            });
        });
    });
});
    
    


  
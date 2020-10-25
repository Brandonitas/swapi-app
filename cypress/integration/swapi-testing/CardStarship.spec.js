describe('Test in <CardStarship/>', () => {
    describe('Navigate to list of starship of movie 1', () =>{
        it('Should load all the starships of movie 1', () => {

            cy.visit('http://localhost:3000/movie/1');
            cy.get('.card-container-starship').should('have.length',8)
        
        })
    })

    
})
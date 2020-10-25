describe('Test in <CardMovie/>', () => {
    describe('Navigate to list of movies', () =>{
        it('Should load all the movies', () => {

            cy.visit('http://localhost:3000/movies');
            cy.get('.card-container-movie').should('have.length',6)
        
        })
    })

    
})
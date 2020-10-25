describe('Test in all the app', () => {
    describe('Navigate to edit the data of starship', () =>{
        it('Should save the new data', () => {

            cy.visit('http://localhost:3000/movies');
            cy.get('[href="/movie/1"] > .card-container-movie').click();
            cy.get('[href="/starship/5"] > .card-container-starship').click();


            cy.wait(2000)


            cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').clear().type('100')
            cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').clear().type('200')
            cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').clear().type('300')

            cy.get('.btn-submit').click();

            cy.get('#swal2-title').contains('successfully')
            
        
        })
    })

    
})
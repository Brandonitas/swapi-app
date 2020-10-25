
describe('Test in <EditStarship/>', () => {
    describe('Navigate to starship 2', () =>{
        it('Should load all data of the starship', () => {

            cy.visit('http://localhost:3000/starship/2');
            cy.get(':nth-child(1) > h3').should('have.text', 'Name: CR90 corvette')
        
        })
    })

    
})
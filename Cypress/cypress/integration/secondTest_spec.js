describe('Los estudiantes search for a Professor', function() {
    it('Visits los estudiantes and search for a Professor', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        //Lineas nuevas  
        cy.get('.Select-placeholder').get('.Select-input').get('input').click({force: true}).type('mario lin') 
        expect(cy.contains('Mario Linares Vasquez')).to.exist
    })
})


describe('Los estudiantes navigate to a Professor page', function() {
    it('Visits los estudiantes and navigate to a Professor page', function() {
        cy.contains('Mario Linares Vasquez').click()
        cy.url().should('eq', 'https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
    })
})


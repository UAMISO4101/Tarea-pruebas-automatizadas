describe('Los estudiantes filter by subjects', function() {
    it('Visits los estudiantes and filter by subjects', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
        cy.get('.statsProfesorDropdownItemChecked').get(':checkbox').first().click()
        expect(cy.get('.post').should('have.length', 4));
    });
});
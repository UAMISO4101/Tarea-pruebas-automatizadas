describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        //Lineas nuevas  
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1256734")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})

var rand = Math.floor((Math.random() * 200))
var testMail =rand+ 'wrongemail@example3.com'  
var testPass = '12343' + rand

describe('Los estudiantes create new account', function() {
    it('Visits los estudiantes and create new account', function() {
        cy.get('input[name="nombre"]').click().type("Juan Camilo")
        cy.get('input[name="apellido"]').click().type("Forero Perez")
        cy.get('input[name="correo"]').first().click().type(testMail)
        cy.get('input[name="password"]').first().click().type(testPass)
        cy.get('select[name="idDepartamento"]').select('3')
        cy.get(':checkbox').click()
        cy.contains('Registrarse').click()
        expect(cy.contains('Registro exitoso!')).to.exist
    })
})

describe('Los estudiantes login', function() {
    it('Visits los estudiantes and login succesfully', function() {
        cy.contains('OK').click()
        cy.get('.usrImage.fa.fa-user-circle.fa-2x').click()
        cy.contains('Salir').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type(testMail)
        cy.get('.cajaLogIn').find('input[name="password"]').click().type(testPass)
        cy.get('.cajaLogIn').contains('Ingresar').click()
        expect(cy.get('.usrImage.fa.fa-user-circle.fa-2x')).to.exist
    })
})

describe('Los estudiantes failed at create new account', function() {
    it('Visits los estudiantes and failed in create new account', function() {
        cy.get('.usrImage.fa.fa-user-circle.fa-2x').click()
        cy.contains('Salir').click()
        cy.contains('Ingresar').click()
        cy.get('input[name="nombre"]').click().type("Juan Camilo")
        cy.get('input[name="apellido"]').click().type("Forero Perez")
        cy.get('input[name="correo"]').first().click().type(testMail)
        cy.get('input[name="password"]').first().click().type(testPass)
        cy.get('select[name="idDepartamento"]').select('3')
        cy.get(':checkbox').click()
        cy.contains('Registrarse').click()
        expect(cy.contains('Ocurrió un error activando tu cuenta')).to.exist
    })
})

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

describe('Los estudiantes filter by subjects', function() {
    it('Visits los estudiantes and filter by subjects', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
        cy.get('.statsProfesorDropdownItemChecked').get(':checkbox').first().click()
        expect(cy.get('.post').should('have.length', 4));
    });
});

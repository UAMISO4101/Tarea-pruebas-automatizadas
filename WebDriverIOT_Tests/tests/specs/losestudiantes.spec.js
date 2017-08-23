var assert = require('assert');
var name = 'Juanitozxcvr';
var lastName = 'Alimanvcxzvcf';
var mail = 'zxcv@hotmail.com';
var passwordIn = 'Qwerty1234';
describe('los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Cerrar', 5000);
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');


        var cajaLogIn = browser.element('.cajaLogIn');
        browser.waitForVisible('input[name="correo"]', 5000);
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.setValue('wrongemail@example.com');

        browser.waitForVisible('input[name="password"]', 5000);
        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.setValue('1234');

        browser.waitForVisible('button=Ingresar', 5000);
        cajaLogIn.element('button=Ingresar').click();
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });
});

// describe('los estudiantes Create ', function() {
//     it('should create an account in los estudiantes', function () {

//         browser.waitForVisible('input[name="nombre"]', 5000);
//         var regName = browser.element('input[name="nombre"]');
//         regName.click();
//         regName.setValue(name);

//         browser.waitForVisible('input[name="apellido"]', 5000);
//         var regLastName = browser.element('input[name="apellido"]');
//         regLastName.click();
//         regLastName.setValue(lastName);
        
//         browser.waitForVisible('input[name="correo"]', 5000);
//         var mailInput = browser.element('input[name="correo"]');
//         mailInput.click();
//         mailInput.setValue(mail);
       
//         browser.waitForVisible('select[name="idDepartamento"]', 15000);
//         var selectDepartment = browser.element('select[name="idDepartamento"]');
//         selectDepartment.selectByValue('3');

//         browser.waitForVisible('input[name="password"]', 5000);
//         var passwordInput = browser.element('input[name="password"]');
//         passwordInput.click();
//         passwordInput.setValue(passwordIn);

//         browser.waitForVisible('button=Registrarse', 5000);
//         browser.element('button=Registrarse').click();

//         browser.waitForVisible('.sweet-alert', 50000);
//         console.log('hasta aca funciona bn');
//         var alertText = browser.element('.sweet-alert').getText('h2');
//         expect(alertText).toBe('Registro exitoso!');
//     });
// });


describe('los estudiantes login', function() {
    it('should visit los estudiantes and log in succesfully', function () {
        

        browser.newWindow('https://losestudiantes.co', 'login');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        //descomentar las siguientes lineas cuando se ejecute antes la creacion de la cuenta
        //logOut
        // browser.waitForVisible('.usrImage.fa.fa-user-circle.fa-2x', 5000);
        // var logIcon = browser.element('.usrImage.fa.fa-user-circle.fa-2x');
        // logIcon.click();
        // browser.waitForVisible('.dropdown-menu', 5000);
        // var dropMenu = browser.element('.dropdown-menu');
        // dropMenu.element('a').click();

        
        var cajaLogIn = browser.element('.cajaLogIn');
        browser.waitForVisible('input[name="correo"]', 5000);
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.setValue(mail);

        browser.waitForVisible('input[name="password"]', 5000);
        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        console.log(passwordIn);
        passwordInput.setValue('Qwerty1234');
        console.log('sera que se jodio' + passwordInput.getText());


        browser.waitForVisible('button=Ingresar', 5000);
        cajaLogIn.element('button=Ingresar').click();

        browser.waitForVisible('.usrImage.fa.fa-user-circle.fa-2x', 5000);
        expect(browser.isExisting('.usrImage.fa.fa-user-circle.fa-2x'));
    });
});

describe('Find Profesor', function(){
    it('Should redirect to profesor page',function(){

    });
    browser.waitForVisible('.profesor', 5000);
    browser.element('.profesor').click();
    expect(browser.getUrl().toBe('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/german-romero-gutierrez'));
    //https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/german-romero-gutierrez
});

describe('los estudiantes Create ', function() {
    it('should not create an account in los estudiantes, already exists', function () {
        //logOut
        browser.waitForVisible('.usrImage.fa.fa-user-circle.fa-2x', 5000);
        var logIcon = browser.element('.usrImage.fa.fa-user-circle.fa-2x');
        logIcon.click();
        browser.waitForVisible('.dropdown-menu', 5000);
        var dropMenu = browser.element('.dropdown-menu');
        dropMenu.element('a').click();

        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');
        //browser.waitForVisible(logIcon.element('a'), 5000);
        //console.log('tet' + browser.getText('=Salir'));
        //browser.getText('=Salir').click();


        browser.waitForVisible('input[name="nombre"]', 5000);
        var regName = browser.element('input[name="nombre"]');
        regName.click();
        regName.setValue(name);

        browser.waitForVisible('input[name="apellido"]', 5000);
        var regLastName = browser.element('input[name="apellido"]');
        regLastName.click();
        regLastName.setValue(lastName);
        
        browser.waitForVisible('input[name="correo"]', 5000);
        var mailInput = browser.element('input[name="correo"]');
        mailInput.click();
        mailInput.setValue(mail);
       
        browser.waitForVisible('select[name="idDepartamento"]', 15000);
        var selectDepartment = browser.element('select[name="idDepartamento"]');
        selectDepartment.selectByValue('3');

        browser.waitForVisible('input[name="password"]', 5000);
        var passwordInput = browser.element('input[name="password"]');
        passwordInput.click();
        passwordInput.setValue(passwordIn);

        browser.waitForVisible('button=Registrarse', 5000);
        browser.element('button=Registrarse').click();

        browser.waitForVisible('.sweet-alert', 50000);
        console.log('hasta aca funciona bn');
        var alertText = browser.element('.sweet-alert').getText('h2');
        expect(alertText).toBe('Ocurrió un error activando tu cuenta');
    });
});
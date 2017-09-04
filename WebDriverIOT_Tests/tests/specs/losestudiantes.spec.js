var assert = require('assert');
var rand = Math.floor(Math.random() * 2000);
var name = 'Juanitozxcd' + rand;
var lastName = 'Alimanvcxzfe' + rand;
var mail = 'zxcv' + rand  + '@hotmail.com';
var passwordIn = 'Qwerty1234';
describe('1.) los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Cerrar', 5000);
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 4000);
        browser.click('button=Ingresar');


        var cajaLogIn = browser.element('.cajaLogIn');
        browser.waitForVisible('input[name="correo"]', 5000);
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.setValue('wrongemail@example.com');

        browser.waitForVisible('input[name="password"]', 5000);
        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.setValue('12345464234');

        browser.waitForVisible('button=Ingresar', 5000);
        cajaLogIn.element('button=Ingresar').click();
        browser.waitForVisible('.aviso.alert.alert-danger');

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });
});

describe('2.) los estudiantes Create ', function() {
    it('should create an account in los estudiantes', function () {

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
        console.log('.');
        var alertText = browser.element('.sweet-alert').getText('h2');
        expect(alertText).toBe('Registro exitoso!');
    });
});


describe('3.) los estudiantes login ', function() {
    it('should visit los estudiantes and log in succesfully', function () {
        $(".sweet-alert").$('button').click();
        // browser.newWindow('https://losestudiantes.co', 'login');
        browser.waitForVisible('.usrImage.fa.fa-user-circle.fa-2x', 5000);
        //console.log('espera para cerrar sesion');
        var logIcon = browser.element('.usrImage.fa.fa-user-circle.fa-2x');
        logIcon.click();
        browser.waitForVisible('.dropdown-menu', 5000);
        var dropMenu = browser.element('.dropdown-menu');
        dropMenu.element('a').click();

        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');
        
        var cajaLogIn = browser.element('.cajaLogIn');
        browser.waitForVisible('input[name="correo"]', 5000);
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.setValue(mail);

        browser.waitForVisible('input[name="password"]', 5000);
        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        console.log('.');
        passwordInput.setValue('Qwerty1234');
        console.log('.');


        browser.waitForVisible('button=Ingresar', 5000);
        cajaLogIn.element('button=Ingresar').click();

        browser.waitForVisible('.usrImage.fa.fa-user-circle.fa-2x', 5000);
        expect(browser.isExisting('.usrImage.fa.fa-user-circle.fa-2x'));
    });
});

describe('4.) Find Profesor ', function(){
    it('Should redirect to profesor page',function(){
        browser.pause(4000);
        var test = $('.Select-multi-value-wrapper').$$('div')[1];
        test.$$('input')[0].setValue('Mario Linares Vasquez');
        browser.pause(7000);
        var ctrl = $('.Select-menu-outer').$('div[id="react-select-required_error_checksum--option-0"]').getHTML();
        $('.Select-menu-outer').$('div[id="react-select-required_error_checksum--option-0"]').click();
        browser.pause(4000);
        expect(browser.getUrl()).toBe('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez');
    });
});

describe('5.) los estudiantes Create ', function() {
    it('should not create an account in los estudiantes, already exists', function () {
        browser.pause(4000);
        browser.waitForVisible('.usrImage.fa.fa-user-circle.fa-2x', 5000);
        var logIcon = browser.element('.usrImage.fa.fa-user-circle.fa-2x');
        logIcon.click();
        browser.waitForVisible('.dropdown-menu', 5000);
        var dropMenu = browser.element('.dropdown-menu');
        dropMenu.element('a').click();

        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');
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
        console.log('.');
        var alertText = browser.element('.sweet-alert').getText('h2');
        expect(alertText).toBe('Ocurrió un error activando tu cuenta');
    });
});
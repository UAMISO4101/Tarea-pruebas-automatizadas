var testName = 'Camilo';
var testLastName = 'Forero';
var testMail = 'camilo1234@wrongmail.com';
var testPassword = '123432';


module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes redirect to Professor page':function (browser){
    browser
    .url('https://losestudiantes.co/')
    .click('.botonCerrar')
    .pause(2000)
    .click('select[id="sample_select"] option[value="universidad-de-los-andes,ingenieria-de-sistemas"]')
    .click('.false.boton.btn.btn-default')
    .pause(1000)
    .click('.profesor a')
    .pause(4000)
    .assert.urlEquals('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/alvaro-andres-gomez-d%60alleman');
  },
  'Los estudiantes filter professor by subject' : function(browser){
    browser
    .click('input[name="ISIS1205"]')
    .assert.visible('.statsProfesor');
  },
  after : function(client) {
    client.end();
  }
};
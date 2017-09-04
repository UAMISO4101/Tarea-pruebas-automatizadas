module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes redirect to Professor page':function (browser){
    browser
    .url('https://losestudiantes.co/')
    .pause(4000)
    .click('.botonCerrar')
    .pause(4000)
    .getLog('browser', function(result) {
      console.log('test');
    })
    .click('select[id="sample_select"] option[value="universidad-de-los-andes,ingenieria-de-sistemas"]')
    .pause(4000)
    .click('.false.boton.btn.btn-default')
    .pause(4000)
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
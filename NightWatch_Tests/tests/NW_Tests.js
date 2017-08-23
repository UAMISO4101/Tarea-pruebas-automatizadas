module.exports = { // adapted from: https://git.io/vodU0
  // 'Los estudiantes login falied': function(browser) {
  //   browser
  //     .url('https://losestudiantes.co/')
  //     .click('.botonCerrar')
  //     .waitForElementVisible('.botonIngresar', 4000)
  //     .click('.botonIngresar')
  //     .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
  //     .setValue('.cajaLogIn input[name="password"]', '1234')
  //     .click('.cajaLogIn .logInButton')
  //     .waitForElementVisible('.aviso.alert.alert-danger', 4000)
  //     .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
  //     .end();
  // },

  'Los estudiantes login succesfully': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaLogIn input[name="correo"]', 'camus375@hotmail.com')
      .setValue('.cajaLogIn input[name="password"]', 'Qwerty123')
      .click('.cajaLogIn .logInButton')
      .waitForElementVisible('.usrImage.fa.fa-user-circle.fa-2x', 4000)
      //.assert.containsText('.usrImage.fa.fa-user-circle.fa-2x', '')
      .end();
  }
};
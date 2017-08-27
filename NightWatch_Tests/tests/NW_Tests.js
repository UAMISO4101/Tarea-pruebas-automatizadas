module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login falied': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .pause(4000)
      .click('.botonIngresar')
      .pause(4000)
      .setValue('.cajaLogIn input[name="correo"]', 'wrongemail123421@example.com')
      .setValue('.cajaLogIn input[name="password"]', '123432122')
      .click('.cajaLogIn .logInButton')
      .pause(4000)
      .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran');
  },
  'Los estudiantes login succesfully': function(browser) {
    browser
      .pause(4000)
      .click('.botonIngresar')
      .pause(4000)
      .click('.cajaLogIn input[name="correo"]')
      .clearValue('.cajaLogIn input[name="correo"]')
      .setValue('.cajaLogIn input[name="correo"]', 'camus375@hotmail.com')
      .clearValue('.cajaLogIn input[name="password"]')
      .setValue('.cajaLogIn input[name="password"]', 'Qwerty123')
      .click('.cajaLogIn .logInButton')
      .pause(4000)
      .assert.visible('button[id="cuenta"]');
  }, 
  'Los estudiantes create new user ' : function(browser){
      
  },
  after : function(client) {
    client.end();
  }
};


// module.exports = { // adapted from: https://git.io/vodU0
//   'Los estudiantes login succesfully': function(browser) {
//     browser
//       .url('https://losestudiantes.co/')
//       .click('.botonCerrar')
//       .pause(5000)
//       //.waitForElementVisible('.botonIngresar', 4000)
//       .click('.botonIngresar')
//       .pause(5000)
//       .click('.cajaLogIn input[name="correo"]')
//       .setValue('.cajaLogIn input[name="correo"]', 'camus375@hotmail.com')
//       .setValue('.cajaLogIn input[name="password"]', 'Qwerty123')
//       .click('.cajaLogIn .logInButton')
//       //.waitForElementVisible('.usrImage .fa .fa-user-circle .fa-2x', 4000)
//       //.assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
//       .pause(4000)
//       .assert.visible('button[id="cuenta"]')
//       .end();
//   }
// };


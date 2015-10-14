var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcryptjs');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {

  User.findById(id, function(err, user){
    if(err) done(err);
    done(null, user)
  })

});

passport.use('user', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},

//Usuario y Password son los nombres de los campos a buscar en la BD
function(username, password, done) {
  User.findOne({ username: username }).exec(function(err, user) {
    if(err) {
      return done(err);
    }
    if(!user) {
      return done(null, false, { message: 'No existe el usuario ' + username }); 
    }

    bcrypt.compare(password, user.password, function(err, res) {
      if(!res) return done(null, false, {message: 'Password o usuario invalido'});
      return done(null, user);
    });
  });
}
));

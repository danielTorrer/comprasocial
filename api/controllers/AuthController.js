var passport = require('passport');

module.exports = {

  login: function (req, res) {
    res.view('index');
  },

  process: function(req, res){
        passport.authenticate('user', function(err, user, info) {
            if( (err) || (!user) ) {

                req.session.flash = {
                    err:  [info.message],
                    type: 'warning'
                };
                
                return res.redirect('/');
            }

            req.logIn(user, function(err) {
                if(err) res.send(err);

                req.session.flash = {
                    err:  ["Bienvenido"],
                    type: 'success'
                };
                
                return res.redirect('/dashboard')
            });
        }) (req, res);
    },

  logout: function(req, res) {
        req.logOut();
        req.session.flash = {
            err:  ["Sesión cerrada, esperamos verte pronto"],
            type: 'success'
        };
        return res.redirect('/');
  }

};
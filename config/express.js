var passport = require('passport');

module.exports.http = {
    customMiddleware: function(app){

        // Passport
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(function( req, res, next ){ 
        	PassportService.init(); 
        	next(); 
        })

        app.use(function(req, res, next){
            res.locals.user = req.session.user;
            next();
        });

        app.locals.moment = require('moment');

    }
};
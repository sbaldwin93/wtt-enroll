var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Admin = require('../models/admin');
passport.serializeUser(function(admin, done) {
	done(null, admin.id);
});
passport.deserializeUser(function(id, done) {
	Admin.findById(id, function(err, admin) {
		done(err, admin);
	});
});  
var localStrategy = new LocalStrategy(function(username, password, done) {
	Admin.findOne({username: username}, function(err, admin) {
		if(err) return done(err);
		if(!admin) return done(null, false);
		admin.comparePassword(password, function(err, isMatch) {
			if(err) return done(err);
			if(isMatch) {
				return done(err, admin);
			}
			else {
				return done(null, false);
			}
		});
	});
});
passport.use(localStrategy);
module.exports = {
	ensureAuthenticated: function(req, res, next) {
		if(req.isAuthenticated()) {
			return next();
		}
		res.redirect('/auth/login');
	}
};
var passport = require('passport');
var Admin = require('../models/admin');
var performLogin = function(req, res, next, admin) {
	req.login(admin, function(err) {
		if(err) return next(err);
		//return res.redirect('/html/index.html');
		return res.redirect('/');
	});
};
var adminAuthenticationController = {
	login: function(req, res) {
		res.sendFile('/html/admin.html', {root: './public'});
	},
	processLogin: function(req, res, next) {
		var authFunction = passport.authenticate('local', function(err, admin, info) {
			if(err) return next(err);
			if(!admin) {
				return res.send({error: 'Error logging in. Please try again.'});
			}
			performLogin(req, res, next, admin);
		});
		authFunction(req, res, next);
	},
	processSignup: function(req, res, next) {
		var admin = new Admin({
			username: req.body.username,
			password: req.body.password	 
		});
		admin.save(function(err, admin) {
			if(err) {
				if(err.code === 11000) {
					return res.send({error: 'This admin already exists. Please try again.'})
				}
				else {
					return res.send({error: 'An error occured, please try again.'})
				}
			}
			performLogin(req, res, next, admin);
		});
	},
	/*
	logout: function(req, res) {
		req.logout();
		res.redirect('/auth/login');
	}
	*/
};
module.exports = adminAuthenticationController;
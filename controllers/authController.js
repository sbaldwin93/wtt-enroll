var passport = require('passport');
var User = require('../models/user');
var performLogin = function(req, res, next, user) {
	req.login(user, function(err) {
		if(err) return next(err);
		//return res.redirect('/html/index.html');
		return res.redirect('/');
	});
};
var authenticationController = {
	login: function(req, res) {
		res.sendFile('/html/enroll.html', {root: './public'});
	},
	processLogin: function(req, res, next) {
		var authFunction = passport.authenticate('local', function(err, user, info) {
			if(err) return next(err);
			if(!user) {
				return res.send({error: 'Error logging in. Please try again.'});
			}
			performLogin(req, res, next, user);
		});
		authFunction(req, res, next);
	},
	processSignup: function(req, res, next) {
		var user = new User({
			travelerFirstname             : req.body.travelerFirstname,
			travelerLastname              : req.body.travelerLastname,
			travelerMiddlename            : req.body.travelerMiddlename,
			travelerMailingCountry        : req.body.travelerMailingCountry,
			travelerState                 : req.body.travelerState,
			travelerZipCode               : req.body.travelerZipCode,
			travelerStreetAddress         : req.body.travelerStreetAddress,
			travelerEmail                 : req.body.travelerEmail,
			travelerPrimaryPhone          : req.body.travelerPrimaryPhone,
			travelerSecondaryPhone        : req.body.travelerSecondaryPhone,
			travelerBirthdate             : req.body.travelerBirthdate,
			travelerGender                : req.body.travelerGender,
		    travelerSchoolYear            : req.body.travelerSchoolYear,
		    travelerAllergiesDisabilities : req.body.travelerAllergiesDisabilities,
		    travelerReferral              : req.body.travelerReferral,
		    guardian1Name                 : req.body.guardian1Name,
		    guardian1Email                : req.body.guardian1Email,
		    guardian1Phone                : req.body.guardian1Phone,
		    guardian2Name                 : req.body.guardian2Name,
		    guardian2Email                : req.body.guardian2Email,
		    guardian2Phone                : req.body.guardian2Phone,
		    /*
		    program                       : req.body.program,
		    */
		    programCost                   : req.body.programCost,
			username                      : req.body.username,
			password                      : req.body.password 
		});
		user.save(function(err, user) {
			if(err) {
				if(err.code === 11000) {
					return res.send({error: 'This user already exists. Please try again.'})
				}
				else {
					return res.send({error: 'An error occured, please try again.'})
				}
			}
			performLogin(req, res, next, user);
		});
	},
	/*
	logout: function(req, res) {
		req.logout();
		res.redirect('/auth/login');
	}
	*/
};
module.exports = authenticationController;
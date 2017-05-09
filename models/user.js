var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
	travelerFirstname                    : {type: String},
	travelerLastname                     : {type: String},
	travelerMiddlename                   : {type: String}, 
	travelerMailingCountry               : {type: String},
	travelerState                        : {type: String}, 
	travelerZipCode                      : {type: String},
	travelerStreetAddress                : {type: String},
	travelerEmail                        : {type: String},
	travelerPrimaryPhone                 : {type: String},
	travelerSecondaryPhone               : {type: String},
	travelerBirthdate                    : {type: String},
	travelerGender                       : {type: String},
	travelerSchoolYear                   : {type: String},
	travelerAllergiesDisabilities        : {type: String},
	travelerReferral                     : {type: String},
	guardian1Name                        : {type: String},
	guardian1Email                       : {type: String},
	guardian1Phone                       : {type: String},
	guardian2Name                        : {type: String},
	guardian2Email                       : {type: String},
	guardian2Phone                       : {type: String},
	/*
	program                              : {type: Schema.Types.ObjectId, ref: 'program'},
	*/
	programCost                          : {type: String},
	username                             : {type: String, required: true},
	password                             : {type: String, required: true}
});
userSchema.pre('save', function(next) {
	if(!this.isModified('password')) return next();
	var user = this;
	bcrypt.genSalt(10, function(err, salt) {
		if(err) return next(err);
		bcrypt.hash(user.password, salt, function(err, hash) {
			if(err) return next(err);
			user.password = hash;
			return next();
		});
	});
});
userSchema.methods.comparePassword = function(candidatePassword, next) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) return next(err);
		return next(null, isMatch);
	});
};
var User = mongoose.model('user', userSchema);
module.exports = User;
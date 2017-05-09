var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var adminSchema = mongoose.Schema({
	username  : {type: String, required: true},
	password  : {type: String, required: true}
});
adminSchema.pre('save', function(next) {
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
adminSchema.methods.comparePassword = function(candidatePassword, next) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) return next(err);
		return next(null, isMatch);
	});
};
var Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var programSchema = mongoose.Schema({
	name  : {type: String, required: true},
	price : {type: String, required: true},
	info  : {type: String, required: true},
	image : {type: String, required: true}
});
var Program = mongoose.model('program', programSchema);
module.exports = Program;
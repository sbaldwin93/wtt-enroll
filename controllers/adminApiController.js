var Program = require('../models/program');
var Admin = require('../models/admin');
var fs = require('fs-extra');
var path = require('path');

module.exports = {
	addProgram: function(req, res) {
		var program = new Program({
			name  : req.body.name,
			price : req.body.price,
			info  : req.body.info,
			image : req.body.image
		});
		var file = req.files.file;
		console.log("user " + " fs submitting ", file);
		var uploadDate = new Date();
		var tempPath = file.path;
		var targetPath = path.join(__dirname, "../programImages" + uploadDate + file.name);
		var savePath = "/programImages" + uploadDate + file.name;
		fs.rename(tempPath, targetPath, function(err) {
			if(err) {
				console.log(err);
			}
			else {
				program.image = savePath;
				program.save(function(err, programs) {
					if(err){
						res.error(err);
					}
					else {
						res.json(programs);
					}
				})
			}
		})
	},
	getPrograms: function(req, res) {
		Program.find({}).exec(function(err, allPrograms) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allPrograms);
			}
		})
	}
};
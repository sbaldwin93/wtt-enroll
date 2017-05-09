// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var app = express();
// CONNECT TO DB \\
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wtt-enroll');
// CONTROLLERS \\
var adminpassportConfig = require('./config/adminpassport');

var adminAuthenticationController = require('./controllers/adminAuthController');

var adminApiController = require('./controllers/adminApiController'); 
// SESSION SETUP \\
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// FOLDER DEPENDENCIES \\
app.use('/node_modules', express.static(__dirname + "/node_modules"));
// ADMIN AUTHENTICATION ROUTES \\
app.get('/auth/login', adminAuthenticationController.login);
app.post('/auth/login', adminAuthenticationController.processLogin);
app.post('/auth/signup', adminAuthenticationController.processSignup);

// ROUTES \\
/*
app.get('/api/me', function(req, res) {
  res.send(req.admin)
});
*/

app.use(adminpassportConfig.ensureAuthenticated);
app.get('/', function(req, res) {
  res.sendFile('/html/admin-portal.html', {root: './public'});
});

app.post('/api/programs/addProgram', multipartMiddleware, adminApiController.addProgram);
app.get('/api/programs/getPrograms', adminApiController.getPrograms);
// SERVER \\
var port = 8080
app.listen(port, function(){
  console.log('Server running on port ' + port);
});





































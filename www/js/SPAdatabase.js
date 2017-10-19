const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const config = require('./config/database');

mongoose.connect(config.database);
let db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});

// Init App
const app = express();

// Bring in Models
let user = require('./Models/user');
let profile = require('./Models/profile');
let login = survey('./Models/survey');

// Load View Engine
app.set('www', path.join(__dirname, 'www'));
app.set('www engine', 'html');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});

// Route Files
let users = require('./routes/users');
let profiles = require('./routes/profiles');
let surveys = require('./routes/surveys');
app.use('/users', users);
app.use('/profiles', profiles);
app.use('/surveys', surveys);

// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});

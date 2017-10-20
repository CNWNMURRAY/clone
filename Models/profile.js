var mongoose = require('mongoose');

 //Profile schema
 var Profile = mongoose.Schema({
 	name: {
 		type: String,
 		require: true
 	},
  	username: {
 		type: String,
 		require: true
 	},
 	country: {
 		type: String,
 		require: true
 	},
  	state: {
 		type: String,
 		require: true
 	},
  	city: {
 		type: String,
 		require: true
 	},
  	town: {
 		type: String,
 		require: true
 	},
	birthdate: {
 		type: Date,
 		require: true
 	},
  	education: {
 		type: String,
 		require: true
 	},
  	politics: {
 		type: String,
 		require: true
 	},
  	religion: {
 		type: String,
 		require: true
 	},
	gender: {
 		type: String,
 		require: true
 	},
  	biologicalsex: {
 		type: String,
 		require: true
 	},
  	pronoun: {
 		type: String,
 		require: true
 	},
  	ethnicity: {
 		type: String,
 		require: true
 	},
	nationality: {
 		type: String,
 		require: true
 	},
  	origincountry: {
 		type: String,
 		require: true
 	},
  	currentcountry: {
 		type: String,
 		require: true
 	},
  	relationshipstatus: {
 		type: String,
 		require: true
 	},
	num_sibs: {
 		type: Number,
 		require: true
 	},
  	parentsmstatus: {
 		type: String,
 		require: true
 	},
	foriegn_travel: {
 		type: String,
 		require: true
 	},
  	income: {
 		type: Number,
 		require: true
 	},
	work: {
 		type: String,
 		require: true
 	},
  	parentsmstatus: {
 		type: String,
 		require: true
 	},
  	children: {
 		type: String,
 		require: true
 	},
  	num_children: {
 		type: Number,
 		require: true
 	},
 });

var Profile = module.exports = mongoose.model('Profile', ProfileSchema);
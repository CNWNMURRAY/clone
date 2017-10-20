var mongoose = require('mongoose');

 //survey schema
 var Survey = mongoose.Schema({
	surveyname: {
 		type: String,
 		require: true
 	},
  	question: {
 		type: String,
 		require: true
 	},
	samplesize: {
 		type: Number,
 		require: true
 	},
	surveyopen: {
 		type: Date,
 		require: true
 	},
  	surveyclose: {
 		type: Date,
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
	age: {
 		type: Number,
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
  	currentycountry: {
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
  	children: {
 		type: String,
 		require: true
 	},
  	num_children: {
 		type: Number,
 		require: true
 	},
 });

 var Survey = module.exports = mongoose.model('Survey', SurveySchema);
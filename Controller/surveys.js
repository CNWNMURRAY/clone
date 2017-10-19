var surveys = require("../Models/survey");

exports.getsurveys = function(req, res){
	res.send("getting  all suvey");
};

exports.getsurvey = function(req, res){
	res.send("getting a suvey");
};

exports.createsurveys = function(req, res){
	res.send("survey created");
}


var profiles = require("../Models/profile");

/*should pull in the user information 
var UserProfileModel = function(cnf) {
    this.email = cnf.email,
    this.name = cnf.name,
    this.username = cnf.username
};*/
exports.getprofiles = function(req, res){
	res.send("get all profiles");
};

exports.getprofile = function(req, res){
	res.send("get all profiles");
}

exports.createprofiles = function(req, res){
	res.send("creating a profile");
}

exports.updateprofiles = function(req, res){
	res.send("profile updated");
}
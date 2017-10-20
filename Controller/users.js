var users = require("../Models/user");

exports.getusers = function(req, res){
	res.send("getting all accounts");
};

exports.getuser = function(req, res){
	res.send("getting a account");
}
exports.adduser = function(req, res){
	
	var user = new User();
	
	name= req.body.name;
	email= req.body.email;
	password = req.body.password;
	
	user.save(function(err){
		if(err){
			res.send(err)
		}
		res.send({message:"New user account created.",data:user});
	});
	
}
var users = require("../Models/user");

exports.getusers = function(req, res){
	res.send("getting all accounts");
};

exports.getuser = function(req, res){
	res.send("getting a account");
}
exports.createusers = function(req, res){
	
	var user = new User();
	
	user.name= req.body.name;
	user.email= req.body.email;
	user.password = req.body.passoword;
	
	user.save(function(err){
		if(err){
			res.send(err)
		}
		res.send({message:"New user account created.",data:user});
	});
	
}
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

exports.createprofile = function(req, res){
	res.send("creating a profile");
}

exports.addprofile = function(req, res){
	
	var profile = new Profile();
	
	name= req.body.name;
 	country= req.body.country;
  	city= req.body.city;
  	town= req.body.town;
	birthdate= req.body.birthdate;
  	education= req.body.education;
  	politics= req.body.politics;
  	religion= req.body.religion;
	income = req.body.income;
	work = req.body.work;
	gender= req.body.gender;
  	biologicalsex= req.body.biologicalsex;
  	pronoun= req.body.pronoun;
  	ethnicity= req.body.ethnicity;
	nationality= req.body.nationality;
  	origincountry= req.body.origincountry;
  	currentcountry= req.body.currentcountry;
	foriegn_travel = req.body.foriegn_travel;
  	relationshipstatus= req.body.relationshipstatus;
	num_sibs= req.body.num_sibs;
  	parentsmstatus= req.body.parentsmstatus;
  	children= req.body.children;
  	num_children= req.body.num_children;
	
	profile.save(function(err){
		if(err){
			res.send(err)
		}
		res.send({message:"New profile account created.",data:profile});
	});
}
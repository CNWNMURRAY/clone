var surveys = require("../Models/survey");

exports.getsurveys = function(req, res){
	res.send("getting  all suvey");
};

exports.getsurvey = function(req, res){
	res.send("getting a suvey");
};

exports.addsurvey = function(req, res){
   
   surveyname = req.body.surveyname;
   question = req.body.question;
   samplesize = req.body.samplesize
   surveyopen = req.body.surveyopen
   surveyclose = req.body.surveyclose
   age = req.body.age
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
	
	survey.save(function(err){
		if(err){
			res.send(err)
		}
		res.send({message:"New survey account created.",data:survey});
	});
  
}
	

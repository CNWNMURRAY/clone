const express = require('express');
const router = express.Router();


//Bring in survey Model 
let Survey = require('../Models/profile');

//get request to the survey route so a survey can be loaded.
//survey Form 
router.get('../www/createprofile', function(req, res){
	res.render('survey');
});

// Survey create Proccess
router.post('/survey', function(req, res){
  const sname = req.body.sname;
  const question = req.body.question;
  const country = req.body.country;
  const state = req.body.state;
  const city = req.body.city;
  const town_neighborhood = req.body.town_neighborhood;
  const age = req.body.age;
  const religion = req.body.religion;
  const education = req.body.education;
  const income = req.body.income;
  const work = req.body.work;
  const ethnicity = req.body.ethnicity;
  const nationality = req.body.nationality;
  const country_born = req.body.country_born;
  const country_current = req.body.country_current;
  const numb_sibs = req.body.numb_sibs;
  const politics = req.body.politics;
  const divorced_parents = req.body.divorced_parents;
  const children = req.body.children;
  const foriegn_travel = req.body.foriegn_travel;
  const biological_sex = req.body.biological_sex;
  const pronoun = req.body.pronoun;
  const relationship_status = req.body.relationship_status;
  

  req.checkBody('sname', 'Survey Name is required').notEmpty();
  req.checkBody('question', 'A question is required').notEmpty();
  req.checkBody('country').();
  req.checkBody('state').notEmpty();
  req.checkBody('city', 'Password is required').notEmpty();
  req.checkBody('town_neighborhood', 'Passwords do not match').equals(req.body.password);
  req.checkBody('age', 'Name is required').notEmpty();
  req.checkBody('religion', 'Email is required').notEmpty();
  req.checkBody('education', 'Email is not valid').isEmail();
  req.checkBody('income', 'Username is required').notEmpty();
  req.checkBody('work', 'Password is required').notEmpty();
  req.checkBody('ethnicity', 'Name is required').notEmpty();
  req.checkBody('nationality', 'Email is required').notEmpty();
  req.checkBody('country_born', 'Email is not valid').isEmail();
  req.checkBody('country_current', 'Username is required').notEmpty();
  req.checkBody('numb_sibs', 'Password is required').notEmpty();
  req.checkBody('politics', 'Name is required').notEmpty();
  req.checkBody('divorced_parents', 'Email is required').notEmpty();
  req.checkBody('biological_sex', 'Email is not valid').isEmail();
  req.checkBody('pronoun', 'Username is required').notEmpty();
  req.checkBody('relationship_status', 'Password is required').notEmpty();

  let errors = req.validationErrors();

  if(errors){
    res.render('survey', {
      errors:errors
    });
  } else {
    let newSurvey = new Survey({
      sname:sname,
      question:question;
	  country :country;
	  state:state;
	  city :city;
	  town_neighborhood :town_neighborhood;
	  age:age;
	  religion:religion;
	  education:education;
	  income:income;
	  work:work;
	  ethnicity:ethnicity;
	  nationality:nationality;
	  country_born :country_born;
	  country_current:country_current;
	  numb_sibs:numb_sibs;
	  politics:politics;
	  divorced_parents:divorced_parents;
	  children:children;
	  foriegn_travel:foriegn_travel;
	  biological_sex:biological_sex;
	  pronoun:pronoun;
	  relationship_status:relationship_status
    });
  }
});


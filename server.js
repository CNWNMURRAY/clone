/* Sows you how the server works
var express = require("express")

var app = express();

app.get("/", function(req, res){
	res.send("Test");
});

var server = app.listen(3000, function(){

	var host = server.address().address;
	var port = server.address().port; 

	 console.log("Sever is listen at:%s on port %s", host, port);

})*/

var express = require("express");
var bodyParser = require("body-parser");
//var mongo = require("mongodb");
var mongoose = require("mongoose");
var usersController = require("./Controller/users");
var profilesController = require("./Controller/profiles");
var surveysController = require("./Controller/surveys");

mongoose.connect('mongodb://localhost:27017/COMP422SPA');

var app = express();

//allows us to diges the body of the request
app.use(bodyParser.urlencoded({
	extended: true
}));

var router = express.Router();

//this is an api, so use the api to have the defualt subdirectory of api
// it tells the express app if someone comes to api use the router

app.use("/api", router);
//users
router.route("/users").get(usersController.getusers);
router.route("/users").get(usersController.getuser);
router.route("/users").post(usersController.adduser);
//profiles
router.route("/profiles").get(profilesController.getprofiles);
router.route("/profiles").get(profilesController.getprofile);
router.route("/profiles").post(profilesController.addprofile);
//router.route("/profiles").post(profilesController.updateprofile);
//surveys
router.route("/surveys").get(surveysController.getsurveys);
router.route("/surveys").get(surveysController.getsurvey);
router.route("/surveys").post(surveysController.addsurvey);

app.listen(3000);


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

var express = require("express")
var usersController = require("./Controller/users");
var profilesController = require("./Controller/profiles");
var surveysController = require("./Controller/surveys");

var app = express();

var router = express.Router();

//this is an api, so use the api to have the defualt subdirectory of api
// it tells the express app if someone comes to api use the router

app.use("/api", router);

router.route("/users").get(usersController.getusers);
router.route("/profiles").get(profilesController.getprofiles);
router.route("/surveys").get(surveysController.getsurveys);

app.listen(3000);


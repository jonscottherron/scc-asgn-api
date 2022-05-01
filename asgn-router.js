/** 
 * asgn-router.js
 * Using Routes & Express
 * Name: Jon Herron
 * COMP2150 Web Services
*/



let router = require("express").Router();
var controller = require("./asgn-controller.js");

router.get("/", function (req, res) {
	res.json({
		status: "API is Working.",
		message: "Welcome to the Assignments API."
	});
});

router.route("/assignments")
	.get(controller.index)
	.post(controller.new);

router.route("/assignments/:assignment_id")
	.get(controller.view)
	.put(controller.update)
	.delete(controller.delete);

module.exports = router;
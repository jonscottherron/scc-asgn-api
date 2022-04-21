/** 
 * asgn-model.js
 * Using Models & Mongoose
 * Name: Jon Herron
 * COMP2150 Web Services
*/

const mongoose = require("mongoose");

var assignmentSchema = mongoose.Schema({
	courseName: {
		type: String,
		
	},
	assignmentName: {
		type: String,
		required: true
	},
	dueDate:{
		type: Date
	}
});

var assignment = module.exports = mongoose.model("assignments", assignmentSchema);
module.exports.get = function (callback, limit) {
	assignment.find(callback).limit(limit);
}
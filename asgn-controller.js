/*
Controller.js
Jon Herron
*/


const assignment = require("./asgn-model.js");


exports.index = function (req, res) {
	assignment.get(function (err, assignments) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Assignments retrieved successfully",
			data: assignments
		});
	});
}

/**
 * Handle create assignment actions 
 * POST api/assignments
 */
exports.new = function (req, res) {
    var Assignment = new Assignment();
    Assignment.courseName = req.body.courseName ? req.body.courseName : Assignment.courseName;
    Assignment.assignmentName = req.body.assignmentName;
    Assignment.dueDate = req.body.dueDate;



    Assignment.save(function (err) {
        if (err) {
            res.json(err);
		}
		res.json({
            message: 'New assignment created!',
            data: Assignment
        });
    });
};

/**
 * Handle find assignment using ID
 * GET
 */
exports.view = function (req, res) {
    assignment.findById(req.params.assignment_id, function (err, Assignment) {
        if (err) {
            res.send(err);
		}
        res.json({
            message: 'Assignment details loading..',
            data: Assignment
        });
    });
};

/**
 * Handle update assignment
 * PUT /api/assignment/:assignment_id
 */
exports.update = function (req, res) {
	assignment.findById(req.params.assignment_id, function (err, Assignment) {
        if (err) {
            res.send(err);
		}
		Assignment.courseName = req.body.courseName ? req.body.courseName : Assignment.courseName;
        Assignment.assignmentName = req.body.assignmentName;
        Assignment.dueDate = req.body.dueDate;

        Assignment.save(function (err) {
            if (err) {
                res.json(err);
			}
            res.json({
                message: 'Assignment Info updated',
                data: Assignment
            });
        });
    });
};

/**
* Handle delete assignment
* DELETE /api/assignment/:assignment_id
*/
exports.delete = function (req, res) {
    assignment.remove({
        _id: req.params.assignment_id
    }, function (err, Assignment) {
        if (err) {
            res.send(err);
		}
		res.json(
			{
				status: "success",
				message: 'Assignment deleted'
			});
    });
};
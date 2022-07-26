import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import Teams from "../models/Teams.js";
import User from "../models/Users.js";
import AssignmentStudent from "../models/AssignmentStudent.js";



//send pending assignments to students
export const submitAssignments= async (req, res, next) => {
    try {
        const user= await User.findOne({sapid: req.body.sapid});
        if (!user) return next(createError(404, "user not found!"));
        const assignment = await AssignmentStudent.findOne({ userid: user._id.toString(), assignmentid: req.body.assignmentid });
        if (!assignment) return next(createError(404, "assignment not found!"));
        
        assignment.submitted=true;
        assignment.save();        
        res.status(200).send("Assignments sent to users");
    } catch (err) {
        next(createError(404, "Error!"));
    }
}




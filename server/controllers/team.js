import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import Teams from "../models/Teams.js";
import User from "../models/Users.js";
import AssignmentStudent from "../models/AssignmentStudent.js";


export const addTeams = async (req, res, next) => {
  try {
    const newTeam = new Teams({ ...req.body });
    await newTeam.save();
    res.status(200).send("Team has been created");
  } catch (err) {
    next(createError(404, "Team already exists!"));
  }
};

export const addStudents = async (req, res, next) => {
  try{
    const team = await Teams.findOne({ teamname: req.name });
    if (!team) return next(createError(404, "Team not found!"));
    const user = await User.findOne({ sapid: req.body.sapid });
    if (!user) return next(createError(404, "User not found!"));
    team.students.push(user._id);
    await team.save();
    res.status(200).send("User has been added to team");
  } catch (err) {
    next(createError(404, "Error!"));
  }
}

export const addAssignments = async (req, res, next) => {
  try {
    const team = await Teams.findOne({ teamname: req.name });
    if (!team) return next(createError(404, "Team not found!"));
    team.assignments.push({...req.body, sent: 0});
    await team.save();
    next()
    res.status(200).send("Assignment has been created");
  } catch (err) {
    next(createError(404, "Team already exists!"));
  }
};

//send pending assignments to students
export const sendAssignments= async (req, res, next) => {
    try {
        const team = await Teams.findOne({ teamname: req.name });
        if (!team) return next(createError(404, "Team not found!"));
        var arr1 = [];
        team.assignments.forEach(async (assignment) => {
          if(!assignment.sent)
          {
            team.students.forEach(async(element) =>{
              arr1.push({studentid: element, teamid: team._id, assignmentid: assignment._id.toString() ,submitted: 0 });
            })
            assignment.sent=true;
          }
        })
        await team.save();
        await AssignmentStudent.insertMany(arr1);

        res.status(200).send("Assignments sent to users");
    } catch (err) {
        next(createError(404, "Error!"));
    }
}




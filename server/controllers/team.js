import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import Teams from "../models/Teams.js";
import User from "../models/Users.js";


export const addTeams = async (req, res, next) => {
  try {
    const newTeam = new Teams({ ...req.body });
    await newTeam.save();
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

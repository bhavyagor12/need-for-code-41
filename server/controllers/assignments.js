import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import Teams from "../models/Teams.js";
import Assignment from "../models/Assignment.js";
import User from "../models/Users.js";


export const addAssignments = async (req, res, next) => {
  try {
    const team = await Teams.findOne({ teamname: req.name });
    if (!team) return next(createError(404, "Team not found!"));
    const newAssignment = new Assignment({ ...req.body, teamid: team._id });
    await newAssignment.save();
    res.status(200).send("Assignment has been created");
  } catch (err) {
    next(createError(404, "Team already exists!"));
  }
};


import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import Teams from "../models/Teams.js";
import User from "../models/Users.js";
import AssignmentStudent from "../models/AssignmentStudent.js";


export const addQuery = async (req, res, next) => {
  try {
    const Team = await Teams.findOne({ name: req.body.teamname });
    if (!Team) return next(createError(404, "Team not found!"));
    const user = await User.findOne({ sapid: req.body.sapid });
    if (!user) return next(createError(404, "User not found!"));
    Team.queries.push({...req.body,askerid: user._id.toString()});
    console.log(Team.queries)
    await Team.save();
    res.status(200).send("Query has been added");
  } catch (err) {
    next(createError(404, " already exists!"));
  }
};

export const answerQuery = async (req, res, next) => {
    try {
        const team = await Teams.findOne({ _id: req.body.teamid });
        if (!team) return next(createError(404, "Team not found!"));
        team.queries.forEach(query => {
            if (query._id.toString() === req.body.queryid) {
                query.answer = req.body.answer;
            }
        })
        await team.save();
        res.status(200).send("Query has been answered");
    } catch (err) {
        next(createError(404, "Error!"));
    }
}





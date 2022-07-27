import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import Teams from "../models/Teams.js";
import User from "../models/Users.js";
import AssignmentStudent from "../models/AssignmentStudent.js";
import marks from "../models/marks.js";




export const marks = async (req, res, next) => {
    try{
        const marks = await marks(...req.body);
        marks.save();
        res.send(marks);
    }
    catch{ throw new Error("Error!"); }
}

export const getmarks= async(req, res, next) => {
    try{
        const marks = await marks.findOne({userid: req.body.userid, teamid: req.body.teamid})
        marks.save();
        res.send(marks);
    }
    catch{ throw new Error("Error!"); }
}




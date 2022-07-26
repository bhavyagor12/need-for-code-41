import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import Teams from "../models/Teams.js";
import User from "../models/Users.js";


export const verifyTeacher = async (req, res, next) => {
    try {
      // console.log(req.body.teacherid)
      const user = await User.findOne({_id: req.body.teacherid});
      if (!user) return next(createError(404, "User not found!"));
      if(user.typeofuser==="teacher") 
      { 
        next();
      }
      else throw err;
    } catch (err) {
      next(createError(404, "Verification error!"));
    }
};



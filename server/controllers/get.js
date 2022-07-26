import User from "../models/Users.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";
  
  
  export const getuserdata = async (req, res, next) => {
    try {
      const user = await User.findOne({ sapid: req.body.sapid });
      if (!user) return next(createError(404, "user not found!"));
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
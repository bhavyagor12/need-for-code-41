import Assignment from "../models/Assignment.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    try {
      const newAssignment = new Assignment({ ...req.body});
      await newAssignment.save();
      res.status(200).send("Assignment has been created");
    } catch (err) {
      next(createError(404, "Assignment already exists!"));
    }
};

export const signin = async (req, res, next) => {
    try {
      const Assignment = await Assignment.findOne({ sapid: req.body.sapid });
      if (!Assignment) return next(createError(404, "Assignment not found!"));

      if (Assignment.email!==req.body.email) return next(createError(404, "email mismatch!"));
      if (Assignment.password!==req.body.password) return next(createError(404, "password mismatch!"));
  
      const token = jwt.sign({ id: Assignment._id }, process.env.JWT);
      const { password, ...others } = Assignment._doc; //removing password from the Assignments so we dont send password back even if its hashed
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(others);
    } catch (err) {
      next(err);
    }
};

  export const signout = async (req, res, next) => {
    try {
      const options = {
        expires: new Date(Date.now() + 10000),
      };
      res.cookie("access_token", "expired_token", options);
      res.status(200).json({ status: "success" });
    } catch (err) {
      next(err);
    }
  };
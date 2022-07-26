import express from "express";
import { addAssignments } from "../controllers/assignments.js";
import { signup, signin, signout } from "../controllers/auth.js";
import { verifyTeacher } from "../controllers/verify.js";

const router = express.Router();

router.post("/addassignments", verifyTeacher, addAssignments);


export default router;
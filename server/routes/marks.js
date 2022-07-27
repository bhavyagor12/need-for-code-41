import express from "express";
import { submitAssignments, gradeAssignment, gradeallassignmentsrandomly } from "../controllers/evaluation.js";
import { verifyTeacher } from "../controllers/verify.js";
import { signup, signin, signout} from "../controllers/auth.js";
import { createError } from "../error.js";
import { marks, getmarks } from "../controllers/marks.js";

const router = express.Router();

//create a user

router.post("/addmarks", marks);
router.get("/getmarks", getmarks);


export default router;
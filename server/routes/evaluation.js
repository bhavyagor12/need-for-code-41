import express from "express";
import { submitAssignments, gradeAssignment } from "../controllers/evaluation.js";
import { verifyTeacher } from "../controllers/verify.js";

const router = express.Router();

//create a user

router.post("/submit", submitAssignments)

router.post("/grade", verifyTeacher,gradeAssignment)


export default router;
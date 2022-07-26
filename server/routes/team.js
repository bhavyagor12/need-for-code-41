import express from "express";
import {verifyTeacher} from "../controllers/verify.js";
import { addTeams, addStudents, addAssignments, sendAssignments} from "../controllers/team.js";

const router = express.Router();

router.post("/addteam",verifyTeacher,addTeams);
router.post("/addstudent",verifyTeacher,addStudents);

router.post("/addassignments", verifyTeacher, addAssignments);
router.post("/sendassignments", verifyTeacher, sendAssignments);



export default router;
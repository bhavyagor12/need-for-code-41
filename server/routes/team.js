import express from "express";
import {verifyTeacher} from "../controllers/verify.js";
import { addTeams, addStudents, addAssignments, sendAssignments, addAttendance} from "../controllers/team.js";

const router = express.Router();

router.post("/addteam",verifyTeacher,addTeams);
router.post("/addstudent",verifyTeacher,addStudents);

router.post("/addassignments", verifyTeacher, addAssignments);
router.post("/sendassignments", verifyTeacher, sendAssignments);

router.post('/addattendance', verifyTeacher, addAttendance);


export default router;
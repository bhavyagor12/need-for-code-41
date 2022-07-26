import express from "express";
import {verifyTeacher} from "../controllers/verify.js";
import { addTeams, addStudents } from "../controllers/team.js";

const router = express.Router();

router.post("/addteam",verifyTeacher,addTeams);
router.post("/addstudent",verifyTeacher,addStudents);



export default router;
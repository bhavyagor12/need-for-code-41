import express from "express";
import { submitAssignments } from "../controllers/evaluation.js";

const router = express.Router();

//create a user

router.post("/submit", submitAssignments)


export default router;
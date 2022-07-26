import express from "express";
import { getuserdata } from "../controllers/get.js";
import { verifyTeacher } from "../controllers/verify.js";
import { addQuery, answerQuery } from "../controllers/querypage.js";

const router = express.Router();

router.post("/add", addQuery);
router.post("/answer",verifyTeacher,answerQuery);




export default router;
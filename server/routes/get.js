import express from "express";
import { getuserdata } from "../controllers/get.js";

const router = express.Router();

router.post("/getuser", getuserdata);



export default router;
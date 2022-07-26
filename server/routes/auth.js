import express from "express";
import { signup, signin, signout } from "../controllers/auth.js";

const router = express.Router();

//create a user

router.post("/signup", signup);
//sign in
router.post("/signin", signin);
router.get("/logout", signout);

export default router;
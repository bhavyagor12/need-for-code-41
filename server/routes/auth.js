import express from "express";
import { signup, signin, signout, getuserdata} from "../controllers/auth.js";

const router = express.Router();

//create a user

router.post("/", signin);
router.post("/signup", signup);
router.post("/getuser", getuserdata);
//sign in
router.get("/logout", signout);


export default router;
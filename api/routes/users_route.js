import express from "express";
import { register_new_user, login_user } from "../controllers/users_controller.js";

const router = express.Router();

router.post("/register", register_new_user); // localhost:PORT/users/register
router.post("/login", login_user); // localhost:PORT/user/login

export default router;

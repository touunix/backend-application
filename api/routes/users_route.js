//const express = require('express');
import express from "express";
const router = express.Router();
import {register_new_user, login_user} from "../controllers/users_controller.js"; 
//const users_controller = require("../controllers/users_controller");

// register new account
//router.post('/register', users_controller.register_new_user);
router.post('/register', register_new_user);

// login user
//router.post('/login', users_controller.login_user);
router.post('/login', login_user);

//module.exports = router;
export default router;

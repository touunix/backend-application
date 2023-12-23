import User from "../models/user_model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
//const User = require("../models/user_model")
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
import {
	StatusCodes,
	getReasonPhrase,
} from "http-status-codes";

//exports.register_new_user = async (req, res, next) => {
export async function register_new_user(req, res, next) {
    // TODO: Sprawdzenie czy już przypadkiem taki username nie istnieje w bazie
    try {
        const hashed_password = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            Username: req.body.username,
            Password: hashed_password,
        });
        
        const savedUser = await newUser.save();

        res.status(StatusCodes.CREATED).json({
            Feedback_Message: "New user added Succesfully!",
            Data_registration: savedUser.Data_registration,
        });
    } catch (error) {
        console.error("Error during adding new car:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
    }
};


//exports.login_user = async (req, res, next) => {
export async function login_user(req, res, next) {
    try {
        const find_user = await User.findOne({Username: req.body.username});

        if (!find_user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({Error: getReasonPhrase(StatusCodes.UNAUTHORIZED)});
        }

        const compare_password = await bcrypt.compare(req.body.password, find_user.Password);

        if (!compare_password) {
            return res.status(StatusCodes.UNAUTHORIZED).json({Error: getReasonPhrase(StatusCodes.UNAUTHORIZED)});
        }

        const token = jwt.sign({Message: "Token"}, process.env.JWT_KEY, {
            expiresIn: "3h",
        });

        res.status(StatusCodes.OK).json({Token: token});
    } catch (error) {
        console.error("Error during login user:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });    }
}
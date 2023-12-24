import User from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function register_new_user(req, res, next) {
    try {
        const filter = { Username: req.body.username };
        const find_user = await User.findOne(filter);

        if (!find_user) {
            const hashed_password = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                Username: req.body.username,
                Password: hashed_password,
            });

            const savedUser = await newUser.save();

            res.status(StatusCodes.CREATED).json({
                Feedback_Message: "New user added Successfully!",
                Data_registration: savedUser.Data_registration,
            });
        } else {
            res.status(StatusCodes.CONFLICT).json({
                Feedback_Message: "User already exists.",
            });
        }
    } catch (error) {
        console.error("Error during adding new user:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function login_user(req, res, next) {
    try {
        const filter = { Username: req.body.username };
        const find_user = await User.findOne(filter);

        if (!find_user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ Error: getReasonPhrase(StatusCodes.UNAUTHORIZED) });
        }

        const compare_password = bcrypt.compare(req.body.password, find_user.Password);

        if (!compare_password) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ Error: getReasonPhrase(StatusCodes.UNAUTHORIZED) });
        }

        const token = jwt.sign({ Message: "Token" }, process.env.JWT_KEY, {
            expiresIn: "3h",
        });

        res.status(StatusCodes.OK).json({ Token: token });
    } catch (error) {
        console.error("Error during login user:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

import { StatusCodes, getReasonPhrase } from "http-status-codes";
import jwt from "jsonwebtoken";

class AuthorizationMiddleware {
    static checkAuthorization(req, res, next) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            next();
        } catch (error) {
            console.error("Error during authorization process:", error);
            res.status(StatusCodes.UNAUTHORIZED).json({ Error: getReasonPhrase(StatusCodes.UNAUTHORIZED) });
        }
    }
}

export default AuthorizationMiddleware.checkAuthorization;

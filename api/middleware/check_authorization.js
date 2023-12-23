const { StatusCodes, getReasonPhrase } = require("http-status-codes");
const jwt = require("jsonwebtoken");

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

const AuthorizationMiddlewareInstance = AuthorizationMiddleware.checkAuthorization();
module.exports = AuthorizationMiddlewareInstance;

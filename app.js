import express from "express";
import morgan from "morgan";
import users_routes from "./api/routes/users_route.js";
import cars_routes from "./api/routes/cars_route.js";
import spare_parts_routes from "./api/routes/spare_parts_route.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use("/users", users_routes);
app.use("/cars", cars_routes);
app.use("/spare_parts", spare_parts_routes);

app.use((req, res, next) => {
    res.status(StatusCodes.NOT_FOUND).json({ Feedback_Message: getReasonPhrase(StatusCodes.NOT_FOUND) });
});

export default app;

import express from "express";
import morgan from "morgan";
import users_routes from "./api/routes/users_route.js";
import cars_routes from "./api/routes/cars_route.js";

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use("/users", users_routes);
app.use("/cars", cars_routes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
});

export default app;

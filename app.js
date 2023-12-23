import express from "express";
import morgan from "morgan";
//import { json } from "body-parser";

import pkg from 'body-parser';
const { json } = pkg;

import cars_routes from "./api/routes/cars_route.js";
import users_routes from "./api/routes/users_route.js";
const app = express();

app.use(morgan("combined"));
app.use(json());
app.use("/cars", cars_routes);
app.use("/users", users_routes);

app.use((req, res, next)=>{
    res.status(404).json({message: "Not Found"});
});

export default app;

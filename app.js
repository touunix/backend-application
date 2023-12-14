const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const carRoutes = require("./api/routes/cars_route");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use("/cars", carRoutes);
app.use((req, res, next)=>{
    res.status(404).json({message: "Not Found"});
});

module.exports = app;

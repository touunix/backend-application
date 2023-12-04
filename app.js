const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());

module.exports = app;

import "dotenv/config";
import { createServer } from "http";
import app from "./app.js";
import DatabaseConnector from "./database.js";

const database_connection = new DatabaseConnector(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD
);
database_connection.connect();

const port = process.env.SERVER_PORT; // declare server port
const server = createServer(app); // create server

server.listen(port); // start the server

require("dotenv").config();

const http = require("http");
const app = require("./app")
const DatabaseConnector = require("./database");

const database_connection = new DatabaseConnector(process.env.DATABASE_NAME,
                                                  process.env.DATABASE_USER,
                                                  process.env.DATABASE_PASSWORD);
database_connection.connect();
                                            
const port = process.env.SERVER_PORT;
const server  = http.createServer(app);

server.listen(port);
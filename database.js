import mongoose from "mongoose";
//const mongoose = require("mongoose");

class DatabaseConnector {
    constructor(database_name, database_user, database_password){
        this.database_name = database_name;
        this.database_user = database_user;
        this.database_password = database_password;
        this.connection_adress = `mongodb+srv://${this.database_user}:${this.database_password}@cluster0.4ispprf.mongodb.net/${this.database_name}?retryWrites=true&w=majority`
    }

    connect() {
        mongoose.connect(this.connection_adress)
        .then(() => console.log("SUCCESSFULLY connected to the Database!"));
    };
}

//module.exports = DatabaseConnector;
export default DatabaseConnector;
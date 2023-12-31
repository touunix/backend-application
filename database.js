import mongoose from "mongoose";

class DatabaseConnector {
    constructor(database_name, database_user, database_password) {
        this.database_name = database_name;
        this.database_user = database_user;
        this.database_password = database_password;
        this.connection_address = `mongodb+srv://${this.database_user}:${this.database_password}@cluster0.4ispprf.mongodb.net/${this.database_name}?retryWrites=true&w=majority`;
    }

    connect() {
        mongoose
            .connect(this.connection_address)
            .then(() => console.log("SUCCESSFULLY connected to the Database!"))
            .catch((error) => console.error("Connection error:", error));
    }
}

export default DatabaseConnector;

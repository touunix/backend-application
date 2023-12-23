import { Schema, model } from "mongoose";

class UserModel {
    static createSchema() {
        return new Schema({
            Username: String,
            Password: String,
            Data_registration: { type: Date, default: Date.now },
        });
    }
}

const UserSchema = UserModel.createSchema();
const UserModelInstance = model("UserModel", UserSchema);

export default UserModelInstance;

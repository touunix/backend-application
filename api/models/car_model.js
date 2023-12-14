const mongoose = require("mongoose");
const { Schema, model } = mongoose;

class CarModel {
    static createSchema() {
        return new Schema({
            Model: String,
            Year: Number,
            Color: String,
            License_plate_number: String,
            Is_insured: { type: Boolean, default: true },
            Data_modification: { type: Date, default: Date.now },
        });
    }
}

const CarSchema = CarModel.createSchema();
const CarModelInstance = model("CarModel", CarSchema);

module.exports = CarModelInstance;

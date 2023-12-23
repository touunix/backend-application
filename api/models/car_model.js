import { Schema, model } from "mongoose";

class CarModel {
    static createSchema() {
        return new Schema({
            Brand: String,
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

export default CarModelInstance;

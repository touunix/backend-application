import { Schema, model } from "mongoose";

class SparePartModel {
    static createSchema() {
        return new Schema({
            Brand: String,
            Model: String,
            Model_ID: Number,
            Year: Number,
            Lifetime_in_years: Number,
            Warranty: Number,
            For_vehicles: Array,
            Data_modification: { type: Date, default: Date.now },
        });
    }
}

const SparePartSchema = SparePartModel.createSchema();
const SparePartInstance = model("SparePartModel", SparePartSchema);

export default SparePartInstance;

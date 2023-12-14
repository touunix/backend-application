// pobieram model
const Car = require("../models/car_model");

exports.get_all_car_list = async (req, res, next) => {
    try {
        const result = await Car.find();
        res.status(200).json({
            Feedback_Message: "List of all cars",
            Info: result,
        });
    } catch (error) {
        console.error("Error during getting the list of all cars:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.add_new_car = async (req, res, next) => {
    try {
        const { Model, Year, Color, License_plate_number, Is_insured } = req.body;

        const newCar = new Car({
            Model,
            Year,
            Color,
            License_plate_number,
            Is_insured,
        });

        const savedCar = await newCar.save(); // Save the new car to the database

        res.status(201).json({
            Feedback_Message: "New car added Succesfully!",
            Info: savedCar,
        });
    } catch (error) {
        console.error("Error during adding new car:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.get_car_info_by_id = async (req, res, next) => {
    try {
        const car_id = req.params.car_id;
        const result = await Car.findById(car_id);
        res.status(200).json({
            Feedback_Message: `Details of the car with ID: ${car_id}`,
            Info: result,
        });
    } catch (error) {
        console.error("Error during getting the details of car:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.update_car_info_by_id = async (req, res, next) => {
    try {
        const car_id = req.params.car_id;
        const { Model, Year, Color, License_plate_number, Is_insured } = req.body;

        const result = await Car.findByIdAndUpdate(car_id, {
            Model,
            Year,
            Color,
            License_plate_number,
            Is_insured,
        });
        res.status(200).json({
            Feedback_Message: `Details of a car with ID: ${car_id}`,
            Info: result,
        });
    } catch (error) {
        console.error("Error during updating car:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.delete_car_by_id = async (req, res, next) => {
    try {
        const car_id = req.params.car_id;
        await Car.findByIdAndDelete(car_id);
        res.status(200).json({
            Feedback_Message: `Car with ID: ${car_id} deleted.`,
        });
    } catch (error) {
        console.error("Error during deleting car:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

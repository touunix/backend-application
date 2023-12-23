import { StatusCodes, getReasonPhrase } from "http-status-codes";
import Car from "../models/car_model.js";

export async function get_all_car_list(req, res, next) {
    try {
        const result = await Car.find();

        if (result) {
            res.status(StatusCodes.OK).json({
                Feedback_Message: "List of all cars",
                Info: result,
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                Feedback_Message: `List of all cars is empty.`,
            });
        }
    } catch (error) {
        console.error("Error during getting the list of all cars:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function get_car_info_by_id(req, res, next) {
    try {
        const car_id = req.params.car_id;
        const result = await Car.findById(car_id);
        if (result) {
            res.status(StatusCodes.OK).json({
                Feedback_Message: `Details of the car with ID: ${car_id}`,
                Info: result,
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                Feedback_Message: `Car part with ID: ${car_id} does not exist.`,
            });
        }
    } catch (error) {
        console.error("Error during getting the details of car:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function add_new_car(req, res, next) {
    try {
        const { Brand, Model, Year, Color, License_plate_number, Is_insured } = req.body;

        const newCar = new Car({
            Brand,
            Model,
            Year,
            Color,
            License_plate_number,
            Is_insured,
        });

        const savedCar = await newCar.save(); // Save the new car to the database

        res.status(StatusCodes.OK).json({
            Feedback_Message: "New car added Succesfully!",
            Info: savedCar,
        });
    } catch (error) {
        console.error("Error during adding new car:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function update_car_info_by_id(req, res, next) {
    try {
        const car_id = req.params.car_id;
        const { Brand, Model, Year, Color, License_plate_number, Is_insured } = req.body;

        const result = await Car.findByIdAndUpdate(car_id, {
            Brand,
            Model,
            Year,
            Color,
            License_plate_number,
            Is_insured,
        });

        if (result) {
            res.status(StatusCodes.OK).json({
                Feedback_Message: `Updated details of a car with ID: ${car_id}`,
                Info: result,
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                Feedback_Message: `Car part with ID: ${car_id} does not exist. Nothing to update.`,
            });
        }
    } catch (error) {
        console.error("Error during updating car:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function delete_car_by_id(req, res, next) {
    try {
        const car_id = req.params.car_id;
        const result = await Car.findByIdAndDelete(car_id);

        if (result) {
            res.status(StatusCodes.OK).json({
                Feedback_Message: `Car with ID: ${car_id} deleted.`,
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                Feedback_Message: `Car part with ID: ${car_id} does not exist. Nothing to delete.`,
            });
        }
    } catch (error) {
        console.error("Error during deleting car:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

import { StatusCodes, getReasonPhrase } from "http-status-codes";
import SparePart from "../models/spare_part_model.js";

export async function get_all_spare_parts_list(req, res, next) {
    try {
        const result = await SparePart.find();

        if (result) {
            res.status(StatusCodes.OK).json({
                Feedback_Message: "List of all spare parts.",
                Info: result,
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                Feedback_Message: "List of all spare parts is empty.",
            });
        }
    } catch (error) {
        console.error("Error during getting the list of all spare parts:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function get_all_spare_parts_list_by_brand(req, res, next) {
    try {
        const brand_id = req.params.brand_id;
        const filter = { Brand: brand_id };
        const result = await SparePart.find(filter);

        if (result && result.length != 0) {
            res.status(StatusCodes.OK).json({
                Feedback_Message: "List of all spare parts by brand.",
                Info: result,
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                Feedback_Message: `List of all spare parts for brand: ${brand_id} is empty.`,
            });
        }
    } catch (error) {
        console.error("Error during getting the list of all spare parts by brand:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function get_spare_part_info_by_id(req, res, next) {
    try {
        const spare_part_id = req.params.spare_part_id;
        const result = await SparePart.findById(spare_part_id);

        if (result) {
            res.status(StatusCodes.OK).json({
                Feedback_Message: `Details of the spare part with ID: ${spare_part_id}`,
                Info: result,
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                Feedback_Message: `Spare part with ID: ${spare_part_id} does not exist.`,
            });
        }
    } catch (error) {
        console.error("Error during getting the details of spare part:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function add_new_spare_part(req, res, next) {
    try {
        const { Brand, Model, Model_ID, Year, Lifetime_in_years, Warranty, For_vehicles } = req.body;

        const newSparePart = new SparePart({
            Brand,
            Model,
            Model_ID,
            Year,
            Lifetime_in_years,
            Warranty,
            For_vehicles,
        });

        const savedSparePart = await newSparePart.save(); // Save the new spare part to the database

        res.status(StatusCodes.OK).json({
            Feedback_Message: "New spare part added Successfully!",
            Info: savedSparePart,
        });
    } catch (error) {
        console.error("Error during adding new spare part:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function update_spare_part_info_by_id(req, res, next) {
    try {
        const spare_part_id = req.params.spare_part_id;
        const { Brand, Model, Model_ID, Year, Lifetime_in_years, Warranty, For_vehicles } = req.body;

        const result = await SparePart.findByIdAndUpdate(spare_part_id, {
            Brand,
            Model,
            Model_ID,
            Year,
            Lifetime_in_years,
            Warranty,
            For_vehicles,
        });

        if (result) {
            res.status(StatusCodes.OK).json({
                Feedback_Message: `Updated details of a spare part with ID: ${spare_part_id}`,
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                Feedback_Message: `Spare part with ID: ${spare_part_id} does not exist. Nothing to update.`,
            });
        }
    } catch (error) {
        console.error("Error during updating spare part:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

export async function delete_spare_part_by_id(req, res, next) {
    try {
        const spare_part_id = req.params.spare_part_id;
        const result = await SparePart.findByIdAndDelete(spare_part_id);

        if (result) {
            res.status(StatusCodes.OK).json({
                Feedback_Message: `Spare part with ID: ${spare_part_id} deleted.`,
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                Feedback_Message: `Spare part part with ID: ${spare_part_id} does not exist. Nothing to delete.`,
            });
        }
    } catch (error) {
        console.error("Error during deleting spare part:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            Error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        });
    }
}

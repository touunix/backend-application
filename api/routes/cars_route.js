//const express = require("express");
import express from "express";
const router = express.Router();
//const cars_controller = require("../controllers/cars_controller.js");
import {get_all_car_list, add_new_car, get_car_info_by_id, update_car_info_by_id, delete_car_by_id} from "../controllers/cars_controller.js";

// Read GET localhost:3000/cars
router.get("/", get_all_car_list);

// Create POST	localhost:3000/cars
router.post("/", add_new_car);

// Read GET localhost:3000/cars/100
router.get("/:car_id", get_car_info_by_id);

// Update PUT localhost:3000/cars/100
router.put("/:car_id", update_car_info_by_id);

// Delete	DELETE localhost:3000/cars/100
router.delete("/:car_id", delete_car_by_id);

//module.exports = router;
export default router;

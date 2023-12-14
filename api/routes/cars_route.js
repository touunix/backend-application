const express = require("express");
const router = express.Router();
const cars_controller = require("../controllers/cars_controller");

// Read GET localhost:3000/cars
router.get("/", cars_controller.get_all_car_list);

// Create POST	localhost:3000/cars
router.post("/", cars_controller.add_new_car);

// Read GET localhost:3000/cars/100
router.get("/:car_id", cars_controller.get_car_info_by_id);

// Update PUT localhost:3000/cars/100
router.put("/:car_id", cars_controller.update_car_info_by_id);

// Delete	DELETE localhost:3000/cars/100
router.delete("/:car_id", cars_controller.delete_car_by_id);

module.exports = router;

import express from "express";
import {
    get_all_car_list,
    add_new_car,
    get_car_info_by_id,
    update_car_info_by_id,
    delete_car_by_id,
} from "../controllers/cars_controller.js";

const router = express.Router();

router.get("/", get_all_car_list); // localhost:PORT/cars
router.post("/", add_new_car); // localhost:PORT/cars
router.get("/:car_id", get_car_info_by_id); // localhost:PORT/cars/123456
router.put("/:car_id", update_car_info_by_id); // localhost:PORT/carsd/123456
router.delete("/:car_id", delete_car_by_id); // localhost:PORT/cars/123456

export default router;

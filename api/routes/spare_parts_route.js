import express from "express";
import {
    get_all_spare_parts_list,
    get_all_spare_parts_list_by_brand,
    get_spare_part_info_by_id,
    add_new_spare_part,
    update_spare_part_info_by_id,
    delete_spare_part_by_id
} from "../controllers/spare_parts_controller.js";
import check_authorization from "../middleware/check_authorization.js";

const router = express.Router();

router.get("/", get_all_spare_parts_list); // localhost:PORT/spare_parts
router.get("/:brand_id", get_all_spare_parts_list_by_brand); // localhost:PORT/spare_parts/<brand-id>
router.get("/:spare_part_id", get_spare_part_info_by_id); // localhost:PORT/spare_parts/123456
router.post("/", check_authorization, add_new_spare_part); // localhost:PORT/spare_parts
router.put("/:spare_part_id", check_authorization, update_spare_part_info_by_id); // localhost:PORT/spare_parts/123456
router.delete("/:spare_part_id", check_authorization, delete_spare_part_by_id); // localhost:PORT/spare_parts/123456

export default router;

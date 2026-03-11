const { Router } = require("express");
const {
  getAllBrands,
  addBrand
} = require("../controller/brand.controller");
const brandValidatorMiddleware = require("../middleware/brand.validator.middleware");

const router = Router();

router.get("/get_all_brands", getAllBrands);
router.post("/add_brand",brandValidatorMiddleware, addBrand);

module.exports = router;
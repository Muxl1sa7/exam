const { Router } = require("express");
const {
  getAllBrands,
  addBrand
} = require("../controller/brand.controller");

const router = Router();

router.get("/get_all_brands", getAllBrands);
router.post("/add_brand", addBrand);

module.exports = router;
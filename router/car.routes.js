const { Router } = require("express");
const { getCarsByBrand, addCar } = require("../controller/car.controller");

const router = Router();

router.get("/get_cars/:brandId", getCarsByBrand);
router.post("/add_car", addCar);

module.exports = router;
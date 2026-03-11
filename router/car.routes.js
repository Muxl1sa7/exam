const { Router } = require("express");

const { addCar } = require("../controller/car.controller");
const carValidatorMiddleware = require("../middleware/car.validator.middleware");

const router = Router();

router.post("/add_car", carValidatorMiddleware, addCar);

module.exports = router;
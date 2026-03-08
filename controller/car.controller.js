const Car = require("../schema/car.schema");
const CustomError = require("../error/custom-error");

const getCarsByBrand = async (req, res, next) => {
  try {
    const { brandId } = req.params;

    const cars = await Car.find({ brandInfo: brandId }).populate(
      "brandInfo",
      "brandName logoUrl"
    );

    res.json(cars);
  } catch (error) {
    next(error);
  }
};

const addCar = async (req, res, next) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCarsByBrand,
  addCar
};
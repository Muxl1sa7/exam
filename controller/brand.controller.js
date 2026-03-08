const Brand = require("../schema/brand.schema");
const CustomError = require("../error/custom-error");
const getAllBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    next(error);
  }
};

const addBrand = async (req, res, next) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.status(201).json(newBrand);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBrands,
  addBrand
};
const Brand = require("../models/brand.model");

const addBrand = async (req, res, next) => {
  try {

    const brand = await Brand.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.json(brand);

  } catch (error) {
    next(error);
  }
};

const getAllBrands = async (req, res, next) => {
  try {

    const brands = await Brand.find().populate("createdBy", "userName email");

    res.json(brands);

  } catch (error) {
    next(error);
  }
};

const updateBrand = async (req, res, next) => {
  try {

    const brand = await Brand.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(brand);

  } catch (error) {
    next(error);
  }
};

const deleteBrand = async (req, res, next) => {
  try {

    await Brand.findByIdAndDelete(req.params.id);

    res.json({ message: "Brand deleted successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBrand,
  getAllBrands,
  updateBrand,
  deleteBrand
};
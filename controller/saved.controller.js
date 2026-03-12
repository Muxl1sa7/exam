const Saved = require("../models/saved.model");

const saveCar = async (req, res, next) => {
  try {

    const saved = await Saved.create({
      user: req.user.id,
      car: req.params.id
    });

    res.json(saved);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  saveCar
};
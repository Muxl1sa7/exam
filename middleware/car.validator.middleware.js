const carValidate = require("../validator/car.validator");
const CustomError = require("../error/custom.error");

module.exports = function (req, res, next) {

  const { error } = carValidate(req.body);

  if (error) {
    throw CustomError.BadRequest(error.message);
  }

  next();
};
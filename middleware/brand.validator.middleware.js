const CustomError = require("../error/custom.error");
const brandValidator = require("../validator/brand.validate")

module.exports =function (req, res, next) {
    const {error} = brandValidator(req.body);

    if (error) {
        throw CustomError.badRequest(error.message);
    }
    
    next();
}


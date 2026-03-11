const brandValidator = require("../validator/brand.validate")

module.exports =function (req, res, next) {
    const {error} = brandValidator(req.body);

    if (error) {
        throw CustomErrorhandler.badRequest(error.message);
    }
    
    next();
}


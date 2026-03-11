const joi = require('joi');

const brandValidator = (data) => {
    const schema = joi.object({
      brandName: joi.string().required().min(2).max(50).pattern(/^[a-zA-Z0-9\s]+$/),
      description: joi.string().optional(),
      logUrl: joi.string().optional()
    })
    return schema.validate(data);
}

module.exports = brandValidator;
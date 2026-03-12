const Joi = require("joi");

const changePasswordValidation = (data)=>{

  const schema = Joi.object({

    oldPassword:Joi.string().required(),

    newPassword:Joi.string().min(6).required()

  });

  return schema.validate(data);
}

module.exports = changePasswordValidation
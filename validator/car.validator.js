const Joi = require("joi")

const carValidate = (data)=>{
  const schema = Joi.object({
    carName: Joi.string().required(),
    imageUrl: Joi.string().required(),
    brandInfo: Joi.string().required(),
    price: Joi.number().required()
  })

  return schema.validate(data)
}

module.exports = carValidate
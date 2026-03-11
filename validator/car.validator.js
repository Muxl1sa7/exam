const joi =require('joi');

const carValidator = (data) => {
    const schema = joi.object({
        carName: joi.string().required().min(2).max(50).pattern(/^[a-zA-Z0-9\s]+$/),
        imageUrl: joi.string().required(),
        brandInfo: joi.string().required(),
    })
    return schema.validate(data);
}
const Car = require("../models/car.model");
const Brand = require("../models/brand.model");
const carValidate = require("../validator/car.validator")
const addCar = async(req,res,next)=>{
  try{

    const brand = await Brand.findById(req.body.brandInfo);

    if(!brand){
      return res.status(404).json({message:"Brand not found"});
    }

    const car = await Car.create({
      ...req.body,
      createdBy:req.user.id
    });

    res.json(car);

  }catch(err){
    next(err);
  }
};

const getAllCars = async(req,res,next)=>{
  try{

    const cars = await Car.find().populate("brandInfo","brandName");

    res.json(cars);

  }catch(err){
    next(err);
  }
};

const getCarsByBrand = async (req,res,next)=>{
try{

const {brandId} = req.params

const cars = await Car.find({brandInfo: brandId})
.populate("brandInfo","brandName")

res.json(cars)

}catch(error){
next(error)
}
}

const getOneCar = async(req,res,next)=>{
  try{

    const car = await Car.findById(req.params.id)
    .populate("brandInfo");

    if(!car){
      return res.status(404).json({message:"Car not found"});
    }

    res.json(car);

  }catch(err){
    next(err);
  }
};

const updateCar = async(req,res,next)=>{
  try{

    const car = await Car.findByIdAndUpdate(req.params.id,req.body,{new:true});

    if(!car){
      return res.status(404).json({message:"Car not found"});
    }

    res.json(car);

  }catch(err){
    next(err);
  }
};

const deleteCar = async(req,res,next)=>{
  try{

    const car = await Car.findByIdAndDelete(req.params.id);

    if(!car){
      return res.status(404).json({message:"Car not found"});
    }

    res.json({message:"deleted"});

  }catch(err){
    next(err);
  }
};

module.exports={
  addCar,
  getAllCars,
  getCarsByBrand,
  getOneCar,
  updateCar,
  deleteCar
}
const User = require("../models/user.model");
const Saved = require("../models/saved.model");
const Car = require("../models/car.model");
const Brand = require("../models/brand.model");

const getProfile = async(req,res)=>{

  const user = await User.findById(req.user.id).select("-password");

  const likedCars = await Saved.find({user:req.user.id}).populate("car");

  const myCars = await Car.find({createdBy:req.user.id});

  const myBrands = await Brand.find({createdBy:req.user.id});

  res.json({
    user,
    likedCars,
    myCars,
    myBrands
  });

};

module.exports={getProfile};
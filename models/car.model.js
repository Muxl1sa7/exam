const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({

 name:{
  type:String,
  required:true
 },

 price:{
  type:Number,
  required:true
 },

 image:{
  type:String
 },

 brand:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Brand"
 }

})

module.exports = mongoose.model("Car",carSchema)
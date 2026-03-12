const { Schema, model } = require("mongoose");

const CarSchema = new Schema(
{
  carName:{
    type:String,
    required:true
  },

  price:{
    type:Number,
    required:true
  },

  brandInfo:{
    type:Schema.Types.ObjectId,
    ref:"brand"
  },

  images:{
    side:String,
    exterior:String,
    interior:String
  },

  motor:String,
  year:Number,
  color:String,
  distance:Number,
  gearbox:String,
  tonirovka:String,

  description:String,

  createdBy:{
    type:Schema.Types.ObjectId,
    ref:"user"
  }

},
{
  timestamps:true
});

module.exports = model("car",CarSchema);
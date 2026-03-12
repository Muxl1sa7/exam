const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
{
  userName:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true,
    unique:true
  },

  password:{
    type:String,
    required:true
  },

  role:{
    type:String,
    enum:["user","admin"],
    default:"user"
  },

  otp:String,

  otpTime:Number
},
{
  timestamps:true,
  versionKey:false
});

module.exports = model("user",UserSchema);
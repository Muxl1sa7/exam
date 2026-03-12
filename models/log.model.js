const { Schema, model } = require("mongoose");

const LogSchema = new Schema({
  level:String,
  message:String
},{
  timestamps:true
});

module.exports = model("log",LogSchema);
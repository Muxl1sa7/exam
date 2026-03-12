const { Schema, model } = require("mongoose");

const SavedSchema = new Schema(
{
  user:{
    type:Schema.Types.ObjectId,
    ref:"user"
  },

  car:{
    type:Schema.Types.ObjectId,
    ref:"car"
  }
},
{
  timestamps:true
});

module.exports = model("saved",SavedSchema);
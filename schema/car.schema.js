const { Schema, model } = require("mongoose");

const CarSchema = new Schema(
  {
    carName: {
      type: String,
      required: [true, "Car name required"],
      trim: true,
      minlength: 2,
      maxlength: 50
    },

    imageUrl: {
      type: String,
      required: [true, "Car image required"]
    },

    brandInfo: {
      type: Schema.Types.ObjectId,
      ref: "brand",
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("car", CarSchema);
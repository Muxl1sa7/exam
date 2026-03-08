const { Schema, model } = require("mongoose");

const BrandSchema = new Schema(
  {
    brandName: {
      type: String,
      required: [true, "Brand name required"],
      trim: true,
      minlength: 2,
      maxlength: 50
    },

    description: {
      type: String
    },

    logoUrl: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("brand", BrandSchema);
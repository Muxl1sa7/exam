const { Schema, model } = require("mongoose");

const BrandSchema = new Schema(
  {
    brandName: {
      type: String,
      unique: true,
      required: true
    },

    description: {
      type: String
    },

    logoUrl: {
      type: String
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Brand", BrandSchema);
const { Schema, model } = require("mongoose");

const AuthSchema = new Schema(
{
  userName: {
    type: String,
    required: [true, "Username berilishi shart"],
    trim: true,
    minlength: 2,
    maxlength: 50
  },

  email: {
    type: String,
    required: [true, "Email berilishi shart"],
    unique: true
  },

  password: {
    type: String,
    required: [true, "Password berilishi shart"],
    minlength: 6
  },

  rol: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },

  otp: {
    type: String
  },

  otpTime: {
    type: Number,
    required: true
  }
},
{
  timestamps: true,
  versionKey: false
}
);

const AuthModel = model("auth", AuthSchema);

module.exports = AuthModel;
const CustomError = require("../error/custom-error");
const AuthSchema = require("../schema/auth.schema");
const bcrypt = require("bcrypt");
const sendMessage = require("../utils/send-email");
const register = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const foundedUser = await AuthSchema.findOne({ email });

    if (foundedUser) {
        throw CustomError.BadRequest("Bunday email bilan user mavjud");
    }

const hashedPassword = await bcrypt.hash(password, 12);
const code=+Array.from({length:6},()=>Math.floor(Math.random()*6)).join("");
  await sendMessage(code, email);

  await AuthSchema.create({
    userName,
    email,  
    password: hashedPassword,
    otp: code,
    otpTime: Date.now() + 120000 
  });

    res.status(200).json({ message: "registered" });
  } catch (error) {
    next(error);
  }
};


const verify = async (req, res, next) => {
  try {
    const { email,code } = req.body;

    const foundedUser = await AuthSchema.findOne({ email });

    if (foundedUser) {
        throw CustomError.BadRequest("user not found");
    }

    if (!foundedUser) {
      throw CustomError.BadRequest("user not found");
    }

    if (!foundedUser.otp) {
      throw CustomError.Unauthorized("otp not found");
    }

    if (foundedUser.otpTime< Date.now()) {
      throw CustomError.UnAuthorized("otp expired");
    }

await AuthSchema.findByIdAndUpdate(foundedUser._id,{otp:"",otpTime:0});

const token=access_token({id:foundedUser._id,rol:foundedUser.rol,email:foundedUser.email});
res.cookie("token", token, { maxAge:100*60*15, httpOnly: true });



    res.status(200).json({ message: "Successfully verified", token });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  register,
  verify
};
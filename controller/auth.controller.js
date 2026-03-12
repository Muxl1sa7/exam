const User = require("../models/user.model");
const Brand = require("../models/brand.model")
const Car = require("../models/car.model")
const logger = require("../utils/logger")
const bcrypt = require("bcrypt");
const generateOtp = require("../utils/generateOtp");
const sendEmail = require("../utils/sendEmail");
const { accessToken, refreshToken } = require("../utils/jwt");
const CustomError = require("../error/custom.error");
const register = async (req, res, next) => {
  try {

    const { userName, email, password } = req.body;

    console.log(email)
    const exist = await User.findOne({ email })

    if (exist) {
      throw CustomError.BadRequest("User already exists")
    }

    const hash = await bcrypt.hash(password, 12)

    const otp = generateOtp()

    await sendEmail(otp, email)

    await User.create({
      userName,
      email,
      password: hash,
      otp,
      otpTime: Date.now() + 1600000
    })

    res.json({ message: "Registered. Verify OTP" })

  } catch (error) {
    next(error)
  }
}

const verify = async (req, res, next) => {
  try {

    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) throw CustomError.BadRequest("User not found");


    if (String(user.otp) !== String(otp)) {
      throw CustomError.BadRequest("Wrong OTP");
    }

    if (user.otpTime < Date.now()) {
      throw CustomError.BadRequest("OTP expired");
    }

    user.otp = null;
    user.otpTime = null;

    await user.save();

    res.json({ message: "Verified successfully" });

  } catch(error){
 logger.error(error.message)
 next(error)
}
};

const login = async (req,res,next)=>{
try{

const {email,password} = req.body

if(!email || !password){
return res.status(400).json({message:"Email and password required"})
}

const user = await User.findOne({email})

if(!user){
return res.status(404).json({message:"User not found"})
}

const match = await bcrypt.compare(password,user.password)

if(!match){
return res.status(400).json({message:"Wrong password"})
}

const token = accessToken({
id:user._id,
role:user.role,
email:user.email
})

const refresh = refreshToken({
id:user._id
})

res.cookie("refresh_token",refresh,{
httpOnly:true,
sameSite:"strict"
})

res.json({token})

}catch(error){
 logger.error(error.message)
 next(error)
}
}

const logout = async (req, res) => {
  res.clearCookie("refresh_token")
  res.json({ message: "Logged out" })
}

const refresh = async (req, res) => {
  try {

    const token = req.cookies.refresh_token

    if (!token) {
      return res.status(401).json({ message: "Refresh token missing" })
    }

    const decoded = require("jsonwebtoken").verify(
      token,
      process.env.REFRESH_SECRET_KEY
    )

    const newAccess = accessToken({
      id: decoded.id
    })

    res.json({ token: newAccess })

  } catch (error) {
    logger.error(error.message)
    res.status(401).json({ message: "Invalid refresh token" })
  }
}

const forgotPassword = async (req, res) => {
  const { email } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  const otp = generateOtp()

  user.otp = otp
  user.otpTime = Date.now() + 600000

  await user.save()

  await sendEmail( otp, email)

  res.json({ message: "OTP sent" })
}



const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body

  const user = await User.findById(req.user.id)

  const match = await bcrypt.compare(oldPassword, user.password)

  if (!match) {
    return res.status(400).json({ message: "Wrong password" })
  }

  user.password = await bcrypt.hash(newPassword, 12)

  await user.save()

  res.json({ message: "Password updated" })
}

const profile = async (req,res,next)=>{
 try{

 const user = await User
 .findById(req.user.id)
 .select("-password -otp -otpTime")

 let brands = []
 let cars = []

 if(user.role === "admin"){
   brands = await Brand.find({ createdBy: user._id })
   cars = await Car.find({ createdBy: user._id })
 }

 res.json({
  user,
  brands,
  cars
 })

 }catch(err){
 next(err)
 }
}

module.exports = {
  register,
  verify,
  login,
  logout,
  refresh,
  forgotPassword,
  changePassword,
  profile
}
const jwt = require("jsonwebtoken");

const accessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_SECRET_KEY || "accesssecret123", {
    expiresIn: "15m",
  });
};

const refreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_SECRET_KEY || "refreshsecret123", {
    expiresIn: "7d",
  });
};

module.exports = {
  accessToken,
  refreshToken,
};

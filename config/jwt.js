const jwt = require("jsonwebtoken");

function accessToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "15m"
  });
}

function refreshToken(payload) {
  return jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
    expiresIn: "7d"
  });
}

module.exports = {
  accessToken,
  refreshToken
};
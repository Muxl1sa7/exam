module.exports = (err, req, res, next) => {
  console.log("ERROR DEBUG:", err);

  res.status(err.status || 500).json({
    message: err.message || "Server error"
  });
};
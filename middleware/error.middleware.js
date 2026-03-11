// module.exports = (err, req, res, next) => {
//   console.log("ERROR DEBUG:", err);

//   res.status(err.status || 500).json({
//     message: err.message || "Server error"
//   });
// };


const CustomError = require("../error/custom-error");

module.exports = function (err, req, res, next) {
  try {

    if (err instanceof CustomError) {
      return res
        .status(err.status || 400)
        .json({
          message: err.message,
          errors: err.errors
        });
    }

    if (err.name === "ValidationError") {
      const validationErrors = Object.values(err.errors).map(
        (error) => error.message
      );

      return res.status(400).json({
        message: "Validation Error",
        errors: validationErrors
      });
    }

    return res.status(500).json({
      message: err.message || "Server Error"
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
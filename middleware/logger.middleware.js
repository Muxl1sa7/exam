const logger = require("../logger/winston.logger");

module.exports = function(req,res,next){

  logger.info(`${req.method} ${req.url}`);

  next();
}
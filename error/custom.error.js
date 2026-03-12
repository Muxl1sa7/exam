class CustomError extends Error{
 constructor(status, message){
  super(message)
  this.status = status
 }

 static BadRequest(message){
  return new CustomError(400, message)
 }

 static Unauthorized(message){
  return new CustomError(401, message)
 }

 static NotFound(message){
  return new CustomError(404, message)
 }

 static InternalServer(message){
  return new CustomError(500, message)
 }
}

module.exports = CustomError
const swaggerJsdoc = require("swagger-jsdoc")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Car Showroom API",
      version: "1.0.0",
      description: "Backend API for Car Showroom project"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ],
    components:{
      securitySchemes:{
        bearerAuth:{
          type:"http",
          scheme:"bearer",
          bearerFormat:"JWT"
        }
      }
    }
  },
  apis:["./router/*.js"]
}

const swaggerSpec = swaggerJsdoc(options)

module.exports = swaggerSpec
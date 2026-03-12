require("dotenv").config()
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./docs/swagger")
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./router/auth.routes");
const brandRouter = require("./router/brand.routes");
const carRouter = require("./router/car.routes");
const profileRouter = require("./router/profile.routes");
const savedRouter = require("./router/saved.routes");

const loggerMiddleware = require("./middleware/logger.middleware");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(loggerMiddleware);

app.use("/auth", authRouter);
app.use("/brands", brandRouter);
app.use("/cars", carRouter);
app.use("/profile", profileRouter);
app.use("/saved", savedRouter);

app.use(errorMiddleware);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
module.exports = app;
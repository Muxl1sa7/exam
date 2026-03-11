const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db.config");
const brandRouter = require("./router/brand.routes");
const carRouter = require("./router/car.routes");
const errorMiddleware = require("./middleware/error.middleware");
const authRouter = require("./router/auth.routes");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/brands", brandRouter);
app.use("/cars", carRouter);
app.use("/auth", authRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
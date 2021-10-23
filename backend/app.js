
const express =require("express");
const app =express();
const cookieParser = require("cookie-parser")
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const dotenv = require("dotenv");


//config
dotenv.config({path:"backend/config/config.env"});


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//Route Imports
const product =require("./routes/productRoute");
const user = require("./routes/userRoute");
const payment = require("./routes/paymentRoute");



app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1", payment);
//Middleware for errors
app.use(errorMiddleware);

module.exports = app

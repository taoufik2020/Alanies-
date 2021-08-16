const express = require("express");
const app = express();
require("dotenv").config();
const cookie = require("cookie-parser");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const cors = require("cors");
//var bodyParser = require('body-parser')
//import routes
const authRoute = require("./router/auth");
const userRouter = require("./router/users");
const urlRouter = require("./router/urls");
app.use(express.json());
app.use(cookie());
app.use(expressValidator());
app.use(cors());
//routes
app.use("/api", authRoute);
app.use("/user", userRouter);
app.use("/url", urlRouter);
//middlware

//bodyParser.json()

//connection with database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("data base connected"))
  .catch(() => console.log("database not connected"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("port run in port", port));

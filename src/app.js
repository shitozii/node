const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const httpStatus=require('http-status');
const routes = require("./routes/v1/index");

const app = express();
const { errorHandler } = require("./middlewares/errorHandler");
// use cors : client can communicate with server
app.use(cors());
app.options("*", cors());

// use body parser to parse the json request body
app.use(express.json());

// parse urlencoded request body : convert character that outside ASCII to form %
app.use(express.urlencoded({ extended: true }));

// use helmet to avoid some kind of by secure HTTP header
app.use(helmet());

// use routes
app.use("/api/v1", routes);

// all the another routes are not valid

app.all("*", (req, res, next) => {
  const err = new Error("The route can not be found");
  err.statusCode = 404;
  next(err);
});

// use error handler
app.use(errorHandler);
// export module
module.exports = app;
